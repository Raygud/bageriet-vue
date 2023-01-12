<template>
  <nav :class="hasBg ? 'NavBackDropActive CenteredNav' : 'NavBackDropDisabled CenteredNav'">
    <ul class="FlexedUl">
      <li><router-link title="Forside" to="/">FORSIDE</router-link></li>
      <li><router-link title="Om vores Produkter" to="/Produkter">PRODUKTER</router-link></li>
      <li>
        <h3 class="CenterLogo"><router-link title="Logo" to="/">bageriet</router-link></h3>
      </li>
      <li><router-link title="Kontakt os" to="/Kontakt">KONTAKT</router-link></li>
      <li><router-link title="Login" to="/Login">LOGIN</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'CustomNavbar',
  data() {
    return {
      hasBg: false
    }
  },
  props: {
    msg: String
  },
  watch: {
    $route(to, from) {
      console.log(to.path)
      console.log(from)
      switch (to.path) {
        case "/":
          this.hasBg = false
          break;

        case "/Produkter":
          console.log("Produkter")
          this.hasBg = true
          break;

        default:
          break;
      }
    }
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
  top: 0;
  padding-top: 1vw;
  padding-bottom: 2vw;
  width: 100%;
  height: 6vh;
  display: flex;
  justify-content: center;
  z-index: 99;
}

.NavBackDropActive {
  background-image: url(@/assets/Images/slide1.jpg);

}

.NavBackDropDisabled {
  position: absolute;

  background-image: none;
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
