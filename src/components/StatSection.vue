<template>
    <section class="section-work-data">
        <h2 class="title">Statistica</h2>
        <div class="container grid-three-column">
            <div>
                <img src="https://img.freepik.com/free-vector/hand-drawn-illustration-people-with-pets_23-2148980838.jpg?t=st=1722023171~exp=1722026771~hmac=82d3f11572da9e6b7449ef4b594ec561045bf4036291e3d62271ad710c118714&w=740"/>
                <h2 class="counter-numbers">200+</h2>
                <p>Animals adopted</p>
            </div>
            <div>
                <img src="https://img.freepik.com/free-vector/hand-drawn-man-with-cute-dog_23-2148975447.jpg?t=st=1722023064~exp=1722026664~hmac=eb6cc9670a4e4b1d61c25a42f6ec47da03121ac57ef3dd2ca6ee52aa06d8a59c&w=740"/>
                <h2 class="counter-numbers">150+</h2>
                <p>Happy clients</p>
            </div>
            <div> 
                <img src="https://img.freepik.com/free-vector/adopt-pet-concept_23-2148523582.jpg?t=st=1722022912~exp=1722026512~hmac=9129fa2d4ae9c481d7403634b48bd83b5d95e5b74778fbf675568a64edc1c46a&w=740"/>
                <h2 class="counter-numbers">16+</h2>
                <p>Animals still looking for a owner</p>
            </div>
        </div> 
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
    @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');

    .title {
        font-size: 64px;
        font-family: "Lora", serif;
        font-optical-sizing: auto;
        font-weight: weight;
        font-style: normal;
        color: rgb(52, 16, 58);
    }

    .section-work-data {
        background-color: rgb(230, 228, 228);
        text-align: center;
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
        font-family: "Nunito", sans-serif;
        padding: 5vh 10vw 10vh;
    }

    .counter-numbers {
        font-size: 2.5rem;
        font-family: "Merriweather", sans-serif;
        padding: 0%;
        margin: 0%;
    }

    .grid-three-column {
        text-align: center;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    .grid-three-column p{
        font-size: 1.3rem;
        padding: 0%;
        margin: 0%;
    }

    img {
        width: auto;
        height: 150px;
        border-radius: 50%;
        padding: 0%;
        margin: 0%;
    }

</style>