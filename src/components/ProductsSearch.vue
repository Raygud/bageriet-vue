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
                <h3 :title="item.title">{{ item.title.substring(0, 10) }}...</h3>
                <p>{{ item.teaser.substring(0, 40) }}
                    <a href="">
                        {{ item.teaser.length < 40 ? " " : "... Read more" }} </a>
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
    width: 70vw;
    margin: auto;
    display: grid;
    grid-template-areas: "GridMenu GridC ";
    margin-top: 5vw;
}

.Product-Menu {
    grid-area: GridMenu;
    text-align: left;
}


.grid-container {
    margin: auto;
    display: grid;
    grid-template-columns: auto auto auto auto;
    width: 80%;
}

.grid-item {
    padding: 20px;
    font-size: 30px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 90%;
    gap: 0.5vw;
}

img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
}

h3 {
    margin-top: 0.2vw;
    font-size: 1vw;
}

p {
    font-size: 1vw;
    margin-top: 0.2vw;
}


button{
    width: 100%;
    height: 4vh;
    background-color: white;
    border-color: rgb(181, 181, 238);
}
</style>