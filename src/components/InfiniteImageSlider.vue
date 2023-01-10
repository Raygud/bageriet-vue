<template>
   <div>
    <div class="Image-Slider-Container">
        <div class="Slider" :style="computedStyle">
            <img v-for="image in images" :key="image" :src="image" />
        </div>
    </div>

    <div class="Image-Slider-Buttons-Container" >

        <button @click="changeColor($event, `${positions}vw`)" v-for="positions in positionValues" :key="positions"></button>

    </div>

   </div>
   

</template>

<script>
    export default {
        data() {
            return {
                position: '0vw',
                images: [
        require('@/assets/Images/slide1.jpg'),
        require('@/assets/Images/slide2.jpg'),
        require('@/assets/Images/slide3.jpg')
      ],
                positionValues:[0,-100,-200]
    }
        },
        computed: {
    computedStyle() {
      return {
        left: this.position
      }
    }
  },
  methods: {
    changeColor(event, value) {
      this.position = value
    }
  }
}
    
    
</script>

<style scoped>

.Image-Slider-Container {
    position: relative;
    width: 100vw;
    overflow: hidden;
    z-index: 0;
}

.Slider {
    transition: 1000ms ease-in-out;
    position: relative;
    left: -200vw;
    height: 100%;
    z-index: 100;
    display: flex;
}

img {

width: 100vw;
}

.Image-Slider-Buttons-Container{
    position: absolute;
    background-color: red;
    width: 50vw;
    display: flex;
    justify-content: space-evenly;
}

button{
    width: 1vw;
    height: 1vw;
    background-color: white;
    border: none;
}

</style>