<template>
    <div class="container">
        <div class="emblema">
            <RouterLink to="/adopt"><img src="../../public/Logo_adopt.svg" alt="Emblema"></RouterLink>
        </div>
        <div class="text">
            <p class="mesaj1">Fii <span class="rosu">schimbarea</span> de <span class="rosu">astăzi!</span></p>
            <p class="mesaj2">Make a <span class="paws">Paws</span><span class="match">Match!</span></p>
        </div>
    </div>
</template>

<script>
import {RouterLink} from "vue-router"
    export default {
        components:{
            RouterLink
        }
    }
</script>

<style scoped>
*:hover {
        cursor: none;
}
    /* Stiluri pentru containerul principal */
    .container {
        text-align: center;
    }

    /* Stiluri pentru emblema */
    .emblema img {
        max-width: 100%;
        margin-bottom: 20px;
        width: 400px;
        height: 325px;
        z-index: 1;
        padding: 100px 0 50px;
        transition-duration: 1s;
        transition-timing-function: cubic-bezier(0.4, 0.06, 0.14, 1);
    }

    .emblema img:hover {
        margin: 0;
        width: 425px;
        height: 345px;
        padding: 100px 0 50px;
        filter: saturate(1.3);
        transition-duration: 0.4s;
        transition-timing-function: cubic-bezier(0.4, 0.06, 0.14, 1);
    }
    /* Stiluri pentru textul principal */
    .text {
        margin-top: -70px;
        margin-bottom: 100px;
        font-size: 18px;
        z-index: -1;
    }

    /* Stiluri pentru mesaj1 */
    .mesaj1 {
        font-size: 30px;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    .rosu {
        color: #b31b25;
    }

    .mesaj1{
            font-family: "Nunito", sans-serif;
            font-optical-sizing: auto;
            font-weight: weight;
            font-style: normal;
    }

    /* Stiluri pentru mesaj2 */
    .mesaj2 {
        font-size: 60px;
        font-weight: bold;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    .paws {
        color:#6B2626 ;

    }

    .match {
        color: #D93131;
    }

    .mesaj2{
        font-family: "Merriweather", serif;
        font-weight: 400;
        font-style: normal;
    }
</style>