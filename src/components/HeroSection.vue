<template>
    <div class="ioi">
        <img src="https://www.pixelstalk.net/wp-content/uploads/2016/03/cute-dog-and-cat-sitting-wallpaper.jpg"
            alt="Pets" style="width:100%;">
        <div class="cen"><p>Fii și tu schimbarea în lumea această! <br>Găsește <b>match-ul</b> tău!</p></div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');

    .ioi img {
        width: 100%;
        height: 85vh;
        object-fit: cover;
        background-color: rgba(0, 0, 0, 0.221);
        border-radius: 0px 0px 26px 26px;
    }

    .cen {
        width: 35%;
        text-align: left;
        position: absolute;
        display: block;
        top: 38%;
        left: 23%;
        transform: translate(-50%, -50%);
        color: rgb(255, 255, 255);/* From https://css.glass */
background: rgba(255, 255, 255, 0.068);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(16.5px);
-webkit-backdrop-filter: blur(16.5px);
        font-family: Merriweather, sans-serif;
        font-weight: 500;
        font-style: light;
        font-size: 30px;
    }

    b {
        color: #f5958e;
    }

</style>