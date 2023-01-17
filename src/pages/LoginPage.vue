<template>
    <div>
      <form @submit.prevent="login">
        <label>
          Email:
          <input type="username" v-model="username" required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" v-model="password" required />
        </label>
        <br />
        <button type="submit">Login</button>
        <br />
        <div v-if="error" class="error">
          {{ error }}
        </div>
      </form>
    </div>
  </template>

<script>


export default {
  
    setup () {
        

        return {}
    },
    methods: {
  login() {
    fetch('https://api.mediehuset.net/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: this.username,
        password: this.password
      })
    })
    .then(response => response.json())
    .then(data => {
        sessionStorage.setItem("Token", data.access_token);        
    })
    .catch(error => console.error(error))
  }
}

}


</script>

<style scoped>

div{
    min-height: 75vh;
}

</style>