<template>
    <div>
        <StatmentComponent Title="Kontakt os"
            Message="Der er mange tilgængelige udgaver af lorme ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilgøjet humor eller tilfældige ord, som på ingen måde ser ægte ud" />
        <div class="Contact-Container">
            <EmailComponent />
            <LeafletComponent Address="Øster uttrupvej 1 9200 aalborg" PhoneNumber="+45 25 26 95 40" />

        </div>
    </div>
</template>

<script>
import StatmentComponent from '@/components/StatmentComponent.vue';
import EmailComponent from '@/components/EmailComponent.vue';
import LeafletComponent from '@/components/LeafletComponent.vue';

export default {
    setup() {
        return {};
    },
    components: { StatmentComponent, EmailComponent, LeafletComponent }
}
</script>

<style scoped>
template {
    min-height: 100vh;
}

.Contact-Container {
    padding-top: 5vw;
    margin: auto;
    display: flex;
    width: 70%;
    height: 23vw;
    overflow: hidden;
    gap: 2vw;
}
</style>