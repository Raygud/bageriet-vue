<template>



    <div style="height:600px; width:800px">
        <div class="Contact-Information-Component">
            <address> <b>addresse:</b> {{ Address }}</address>
            <!-- need to find out how to use prop in href  -->
            <a href="tel:+1234567890"><b>telefon:</b> {{ PhoneNumber }}</a>
        </div>
        <l-map ref="map" v-model:zoom="zoom" :center="[57.047680, 9.967620]" :options="{ zoomControl: false }">
            <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base"
                name="OpenStreetMap"></l-tile-layer>
        </l-map>
    </div>
</template>
  
<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";


export default {
    props: {
        Address: {
            type: String,
            required: true
        },
        PhoneNumber: {
            type: Number,
            required: true
        },
    },
    components: {
        LMap,
        LTileLayer,
    },
    data() {
        return {
            zoom: 13,
        };
    },
};
</script>
  
<style scoped>
address,
a {
    display: block;
    text-align: left;
    margin-bottom: 1vw;
}
</style>