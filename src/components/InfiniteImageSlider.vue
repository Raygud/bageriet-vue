<template>
  <div>
    <div class="Image-Slider-Container">
      <div class="Slider" :style="computedStyle">
        <img v-for="image in images" :key="image" :src="image" />
      </div>
      <div class="Image-Slider-Buttons-Container">

        <button
          v-bind:style="{ backgroundColor: position.substring(0, position.length - 2) == positions ? 'rgba(255, 255, 255, 0.99)' : 'rgba(100, 100, 100, 0.2)' }"
          @click="SlideMove($event, `${positions}vw`)" v-for="positions in positionValues" :key="positions"></button>

      </div>
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
      positionValues: [0, -100, -200],

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
    SlideMove(event, value) {
      this.position = value
    }
  }
}


</script>

<style scoped>
.Image-Slider-Container {
  position: relative;
  width: 100%;
  height: 45vw;
  overflow: hidden;
  z-index: 0;
}

.Slider {
  transition: 1000ms ease-in-out;
  position: absolute;
  left: -200vw;
  height: 100%;
  z-index: 100;
  display: flex;
}

img {

  width: 100vw;
}

.Image-Slider-Buttons-Container {
  position: absolute;
  width: 5vw;
  display: flex;
  justify-content: space-evenly;
  z-index: 999;
  bottom: 1vw;
  left: 0;
  right: 0;
  margin: auto;
}

button {
  width: 1vw;
  height: 1vw;
  background-color: white;
  border: none;
  border-radius: 50%;
  transition: 100ms ease-in-out;
}

.currentButton {
  background-color: black;
}
</style>