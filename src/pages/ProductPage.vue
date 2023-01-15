<template>
    <div class="Product-Page-Container">
        <h1>{{ item.title }}</h1>
        <div class="Product-Information">
        <ProductDescription :Image="item.image.fullpath" :Description="item.description" />
        <ProductIngredient :Ingredients="item.ingredients"/>
    </div>
    </div>
</template>

<script>
import ProductDescription from '@/components/ProductDescription.vue';
import ProductIngredient from '@/components/ProductIngredient.vue';

export default {
    
    components:{
    ProductDescription,
    ProductIngredient
},
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            item: []
        };
    },
    created() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            try {
                const response = await fetch(`https://api.mediehuset.net/bakeonline/products/${this.id}`);
                const data = await response.json();

                this.item = data.item;
                console.log(data.item)
            } catch (error) {
                console.error(error);
            }
        },
    }
}
</script>

<style>

.Product-Page-Container{
    width: 80%;
    margin: auto;
}

.Product-Information{
    display: flex;
    justify-content: space-evenly;
    width: 100%;
}

 
</style>