<template>
    <div>
        <h1>{{ item.title }}</h1>
        <div>
            <img :src="item.image.fullpath" alt="">
            <p>{{ item.description }}</p>
        </div>

    </div>
</template>

<script>
export default {
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