<template>
    <footer>
        <a href="#">></a>
        <h3>bageriet</h3>
        <p>Der er mange tilgængelige udgaver af Lorem ipsum, men de fleste udgaver</p>
        <div class="CopyRight-Component">
            <p>Copyright &#169;
                2023 bageriet aps</p>
        </div>
    </footer>
</template>

<script>
export default {
    setup() {


        return {}
    }
}
</script>

<style scoped>
footer {
    position: relative;
    margin-top: 5vw;
    padding-top: 2vw;
    height: 8vw;
    background-color: rgb(41, 39, 39);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.CopyRight-Component {
    background-color: rgb(31, 30, 30);
    height: 2vw;
    line-height: 2vw;
}

a {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 0;
    bottom: 10vw;
    width: 2.5vw;
    height: 2.5vw;
    border-radius: 50%;
    background-color: rgb(248, 244, 244);
    box-shadow: 0 0 0 0.1vw 1vw rgba(0, 0, 0, 0.377);
    color: black;
    text-align: center;
    line-height: 2.5vw;
    transform: rotate(-90deg);
    font-size: 2.5vw;
}
</style>