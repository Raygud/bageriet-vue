<template>
    <div>
        <ol class="News-Item" v-for="item in items" :key="item.id">
            <li @click="activeItem = item.id">{{ item.title }}</li>
        </ol>

        <div class="grid-container">

            <div v-for="item in categoryItems" :key="item.id">
                {{ activeItem === item.category_id ? null : item.title }}
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'NewsComponent',
    data() {
        return {
            items: [],
            categoryItems: [],
            activeItem: null
        };
    },
    created() {
        this.fetchData();
        this.fetchCategory("https://api.mediehuset.net/bakeonline/products");
    },
    watch: {
        activeItem(newValue) {
            if (newValue !== null) {
                console.log(this.activeItem)
            }
        }
    },
    methods: {
        async fetchData() {
            try {
                const response = await fetch('https://api.mediehuset.net/bakeonline/categories');
                const data = await response.json();
                for (let i = data.items.length - 1; i > 0; i--) {
                    let j = Math.floor(Math.random() * (i + 1));
                    [data.items[i], data.items[j]] = [data.items[j], data.items[i]];
                }

                this.items = data.items;
                console.log(data.items)
            } catch (error) {
                console.error(error);
            }
        },
        async fetchCategory(category) {
            try {
                const response = await fetch(category);
                const data = await response.json();

                this.categoryItems = data.items;
                console.log(data)
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>

<style scoped>
.grid-container {
    margin: auto;
    display: grid;
    grid-template-columns: auto auto auto auto;
    width: 80%;
    gap: 1vw;
}
</style>