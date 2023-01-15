<template>
    <div>
        <h2>Ingredienser</h2>
        <ol>
            <li v-for="item in Ingredients" :key="item.id">{{ item.amount+" "+ item.unit_abbr + " "+item.ingredient_title}}</li>
        </ol>
        

    </div>
</template>

<script>
export default {
    props: {
        Ingredients: {
            type: Object,
            required: true
        }
    },
    setup () {
        

        return {}
    }
}
</script>

<style scoped>

ol{
    width: 25vw;
}

li{
    height: 3vw;
    background-color: rgb(238, 238, 238);
    margin-bottom: 0.5vw;
    line-height: 3vw;
}

</style>