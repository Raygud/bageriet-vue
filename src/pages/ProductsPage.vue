<template>
    <div>
        <StatmentComponent Title="Vores elskede bagværk"
            Message="Der er mange tilgængelige udgaver af lorme ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilgøjet humor eller tilfældige ord, som på ingen måde ser ægte ud" />
    </div>

    <ProductsSearch />
</template>

<script>
import ProductsSearch from '@/components/ProductsSearch.vue';
import StatmentComponent from '@/components/StatmentComponent.vue';
export default {
    components: {
        StatmentComponent,
        ProductsSearch
    }
}
</script>

<style scoped>

</style>