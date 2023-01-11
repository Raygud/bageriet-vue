<template>
  <nav class="CenteredNav">
    <ul class="FlexedUl">
      <li><a href="/" title="Forside">FORSIDE</a></li>
      <li><a href="/about" title="Om vores Produkter">PRODUKTER</a></li>
      <h3 class="CenterLogo"><a href="/services" title="Hjem">bageriet</a></h3>
      <li><a href="/blog" title="Kontakt os">KONTAKT</a></li>
      <li><a href="/contact" title="Login">LOGIN</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'CustomNavbar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family: Lobster;
  src: url('~@/assets/Fonts/Lobster.otf');
}

.CenteredNav {
  position: absolute;
  padding-top: 1vw;
  padding-bottom: 2vw;
  width: 100%;
  height: 6vh;
  display: flex;
  justify-content: center;
  z-index: 99;
  /* background-image: url(@/assets/Images/slide1.jpg); */
}

.FlexedUl {
  display: flex;
  justify-content: space-evenly;
  width: 50vw;
}

li {
  font-size: 1vw;
  color: rgb(255, 255, 255);
  line-height: 4vw;
}

.CenterLogo {

  font-size: 5vw;
  font-weight: 100;
  margin-left: 0.5vw;
  margin-right: 0.5vw;
  color: rgb(255, 255, 255);
  font-family: Lobster;
  line-height: 3vw;
}
</style>
