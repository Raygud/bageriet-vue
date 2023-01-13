<template>
    <div class="Product-Search-Main-Container">
        <div class="Product-Menu">
            <ol v-for="item in items" :key="item.id">
                <li @click="activeItem = item.id">{{ item.title }}</li>
            </ol>
        </div>

        <div class="grid-container">

            <div class="grid-item" v-for="item in filteredItems" :key="item.id">

                <img :src="item.image.fullpath" alt="">
                <h3 :title="item.title">{{ item.title.substring(0, 30) }}...</h3>
                <p>{{ item.teaser.substring(0, 175) }}
                    <a href="">
                        {{ item.teaser.length < 175 ? " " : "... Read more" }} </a>
                </p>
                <button v-on:click="navigateToPage(item.id)">SE MERE</button>

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
    computed: {
        filteredItems() {
            if (this.activeItem != null) {
                return this.categoryItems.filter(item => item.category_id === this.activeItem);
            }
            else {
                return this.categoryItems
            }
        },
    },
    watch: {
        activeItem(newValue) {
            if (newValue !== null) {
                console.log(this.activeItem)
            }
        }
    },
    methods: {
        navigateToPage(id) {
            this.$router.push({
                name: 'Produkt',
                params: { id }
            })
        },
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
.Product-Search-Main-Container {
    width: 50vw;
    margin: auto;
    display: grid;
    grid-template-areas: "GridMenu GridC ";
    margin-top: 5vw;
}

.Product-Menu {
    grid-area: GridMenu;
    width: 0vw;
}


.grid-container {
    margin: auto;
    display: grid;
    grid-template-columns: auto auto auto;
    width: 80%;
    gap: 5vw;
    grid-area: GridC;
}

.grid-item {
    max-width: 10vw;
    min-width: 10vw;
}

h3 {
    margin-top: 1vw;
}

p {
    margin-top: 1vw;
}

img {
    width: 100%;
    min-height: 60%;
    max-height: 60%;

}
</style>