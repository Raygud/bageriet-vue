<template>
    <div class="NewsComponent-Container">

        <div class="News-Item" v-for="item in items.slice(0, 3)" :key="item.id">

            <img :src="item.image" alt="">
            <h3 :title="item.title">{{ item.title.substring(0, 29) }}...</h3>
            <p>{{ item.teaser.substring(0, 175) }}
                <a href="">
                    {{ item.teaser.length < 175 ? " " : "... Read more" }} </a>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'NewsComponent',
    data() {
        return {
            items: [],
        };
    },
    created() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            try {
                const response = await fetch('https://api.mediehuset.net/bakeonline/news');
                const data = await response.json();

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
.NewsComponent-Container {
    display: flex;
    justify-content: space-evenly;
    flex: 1;
    width: 60vw;
    margin: auto;
    margin-top: 3vw;
}

img {
    border-radius: 50%;
    width: 60%;
}

.News-Item {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    flex: 1 1 0;
    align-items: center;
    width: 0;
    width: auto;
}

h3 {
    margin-top: 3vw;
    margin-bottom: 3vw;
}
</style>


