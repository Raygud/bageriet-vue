<template>
    <div>
        <input type="text" v-model="name" placeholder="Dit navn..." />
        <input type="email" v-model="email" placeholder="Din e-mail..." />
        <textarea v-model="message" placeholder="Din besked..."></textarea>
        <button @click="sendEmail">Send</button>
    </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
    data() {
        return {
            name: "",
            email: "",
            message: ""
        };
    },
    methods: {
        sendEmail() {
            emailjs.init("uoCz_1i3ygRT8haeQ");
            emailjs.send(process.env.VUE_APP_ServiceId, process.env.VUE_APP_TemplateId, {
                to_email: this.email,
                subject: "Test email",
                message: this.message,
                name: this.name
            })
                .then((response) => {
                    console.log("Email sent successfully", response.status, response.text);
                }, (err) => {
                    console.log("Error sending email", err);
                });
        }
    },
    components: {

    }
}
</script>

<style scoped>
div {
    width: 50vw;
    display: flex;
    flex-direction: column;
    gap: 1vw;
    margin: auto;
}

input {
    height: 2.5vw;
    padding-left: 1vw;
}

textarea {
    height: 10vw;
    padding: 1vw;
    font-size: 0.8vw;
    resize: none;
}

button {
    height: 2.5vw;
    width: 20%;
    align-self: flex-end;
    border: none;
    background-color: rgb(101, 101, 136);
    color: white;
}
</style>