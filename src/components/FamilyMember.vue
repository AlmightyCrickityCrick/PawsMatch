<template>
    <div class="membru">
        <img :src="this.img" alt="Member Photo"/>
        <h3>{{function}}</h3>
        <p>{{name}}</p>
    </div>
</template>

<script>
    export default {
        props: {
            function: String,
            name: String,
            img: String,
        },
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');

    .membru {
        text-align: center;
        padding-bottom: 30px;
    }

    .membru img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        object-fit: cover;
    }

    .membru h3 {
        color: #354D32;
        font-size: 23px;
        margin: 5px 0 5px;
        font-family: "Nunito", sans-serif;
        font-optical-sizing: auto;
        font-weight: weight;
        font-style: normal;
    }

    .membru p {
        font-size: 20px;
        font-family: "Nunito", sans-serif;
        font-optical-sizing: auto;
        font-weight: weight;
        font-style: normal;
        margin-top: 5px;
        margin-bottom: 5px;
    }
</style>