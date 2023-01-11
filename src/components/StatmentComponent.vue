<template>
    <div class="Statement-Container">

        <h2>Vi skaber lækkert brød!</h2>
        <p>Der er mange tilgængelige udgaver af lorme ipsum, men de fleste udgaver har gennemgået forandringer, når

            nogen har tilgøjet humor eller tilfældige ord, som på ingen måde ser ægte ud
        </p>
    </div>

</template>

<script>
export default {
    setup() {


        return {}
    }
}
</script>

<style scoped>
@font-face {
    font-family: Lobster;
    src: url('~@/assets/Fonts/Lobster.otf');
}

.Statement-Container {
    width: 45vw;
    margin: auto;
    margin-top: 3vw;
}

h2 {
    margin-bottom: 3vw;
    font-family: Lobster;
    font-size: 2vw;
    font-weight: 100;
}
</style>