<template>
    <div>
        <img :src="Image" alt="">
            <p>{{ Description }}</p>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    },
    props: {
        Image: {
            type: String,
            required: true
        },
        Description: {
            type: String,
            required: true
        }
    },
}
</script>

<style scoped>

div{
    margin: auto;
    width: 65%;
    height: 100%;
    min-height: 23vw;
}

img {
      float: left;
      margin: 15px;
      aspect-ratio: 1/1;
      object-fit: cover;
      width: 25%;
    }
  
    p {
      text-align: justify;
      font-size: 1.2vw;
    }
</style>