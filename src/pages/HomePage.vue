<template>
    <InfiniteImageSlider />
    <StatmentComponent Title="Vi skaber lækkert brød!"
        Message="Der er mange tilgængelige udgaver af lorme ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilgøjet humor eller tilfældige ord, som på ingen måde ser ægte ud" />
    <NewsComponent />
    <NewsLetter />
    <StatmentComponent Title="Nyeste bagværk"
        Message="Der er mange tilgængelige udgaver af lorme ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilgøjet humor eller tilfældige ord, som på ingen måde ser ægte ud" />
    <LatestedBaked />
</template>

<script>
import InfiniteImageSlider from '../components/InfiniteImageSlider.vue'
import LatestedBaked from '../components/LatestedBaked.vue'
import NewsComponent from "../components/NewsComponent.vue"
import NewsLetter from '../components/NewsLetter.vue'
import StatmentComponent from '../components/StatmentComponent.vue'
export default {
    name: 'HomePage',
    components: {
        InfiniteImageSlider,
        StatmentComponent,
        NewsComponent,
        NewsLetter,
        LatestedBaked
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    color: inherit;
    scroll-behavior: smooth;

}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
