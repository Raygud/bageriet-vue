<template>
    <div class="grid-container">

        <div class="grid-item" v-for="(item, index) in items.splice(0, 7)" :key="item.id">
            <img :src="images[index + 1]" alt="">
            <h2 :title="item.title">{{ item.teaser.substring(0, 19) }}{{ item.title.length < 20 ? " " : "..." }}</h2>
                    <p>{{ item.teaser.substring(0, 85) }}<a href="">
                            {{ item.teaser.length < 85 ? " " : "... " }} </a>
                    </p>
                    <button>SE MERE</button>
        </div>

    </div>
</template>

<script>
export default {
    name: 'NewsComponent',
    data() {
        return {
            items: [],
            images: [
                require('@/assets/Images/brød/1.png'),
                require('@/assets/Images/brød/2.png'),
                require('@/assets/Images/brød/3.png'),
                require('@/assets/Images/brød/4.png'),
                require('@/assets/Images/brød/5.png'),
                require('@/assets/Images/brød/6.png'),
                require('@/assets/Images/brød/7.png'),
                require('@/assets/Images/brød/8.png'),

            ],
        };
    },
    created() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            try {
                const response = await fetch('https://api.mediehuset.net/bakeonline/products');
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

.grid-item {
    padding: 20px;
    font-size: 30px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

img {
    width: 100%;
    height: 50%;
}

h2 {
    font-size: 1.3vw;
    margin-bottom: 3vw;
}

p {
    font-size: 1.1vw;
    margin-bottom: 3vw;
}

button {
    width: 100%;
    height: 4vh;
    background-color: white;
    border-color: rgb(181, 181, 238);
}
</style>