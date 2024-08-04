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
        width: 120px;
        height: 120px;
        border-radius: 50%;
        object-fit: cover;
        transition-duration: 0.6s;
        transition-timing-function: cubic-bezier(0.4, 0.06, 0.14, 1);
    }

    .membru img:hover {
        box-shadow: 0 4px 8px 0 rgba(157, 161, 170, 0.076), 0 6px 20px 0 rgba(138, 125, 155, 0.234);
        transition-duration: 0.3s;
        transition-timing-function: cubic-bezier(0.4, 0.06, 0.14, 1);
    }

    .membru h3 {
        color: #354D32;
        font-size: 23px;
        margin: 5px 0 0px;
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
        margin-top: 0px;
        margin-bottom: 5px;
    }
</style>