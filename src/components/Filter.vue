<template>
    <div class="mid">
        <div class="el">Câini</div>
        <div class="el">Pisici</div>
        <div class="el">Iepuri</div>
        <div class="el">Raton</div>
        <div class="el">Hamster</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');

    *{
        box-sizing: border-box;
    }

    .mid {
        margin: 10px auto 0;
        padding: 10px 50px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        background-color:rgb(201, 201, 201) ;
        justify-content: center;
        border-radius: 15px;
        width: 80%;
        align-items: center;
        text-align: center;
    }

    .el:hover {
        text-decoration: underline 1px wavy #752222;
    }

</style>