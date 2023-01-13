<template>
    <div class="NewsLetter-Main-Container">

        <div>
            <div>
                <h3>Tilmeld dig vores nyhedsbrev</h3>
                <p>Der er mange tilgængelige udgaver af Lorem ipsum, men de fleste udgaver</p>
            </div>
            <div class="Email-Input-Container">
                <div class="Icon-Container ">
                    <font-awesome-icon class="Icon" icon="fa-regular fa-envelope" />

                </div>
                <input v-model="email" placeholder="indtast din email..." type="email">
                <button @click="submitEmail">TILMELD</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: ""
        }
    },
    methods: {
        submitEmail() {
            console.log(this.email);
            const data = { email: this.email };
            fetch('https://api.mediehuset.net/bakeonline/newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
}

</script>
<style scoped>
.NewsLetter-Main-Container {
    margin-top: 7vw;
    width: 100%;
    height: 19vw;
    background-image: url(@/assets/Images/newsletterbg.jpg);
    background-size: 100%;
    background-position: right;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-align-items: center;
}

h3,
p {
    width: 40vw;
    text-align: left;
}

h3 {
    padding-bottom: 0.1vw;
}

p {
    padding-bottom: 2vw;
}


.Email-Input-Container {
    width: 40vw;
    height: 4vh;
    margin: auto;
    background-color: rgb(196, 212, 233);
    display: flex;
}

input {
    width: 80%;
    border: none;
    padding-left: 1vw;
    font-size: 0.8vw;
}

.Icon-Container {
    position: relative;
    width: 2%;
    padding: 1vw;
}

.Icon {
    position: absolute;
    font-size: 1vw;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    color: white;
}

button {
    width: 18%;
    border: none;
    color: white;
    background-color: rgb(79, 90, 100);
}
</style>