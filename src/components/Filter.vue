<template>
    <div class="mid">
        <div class="el" id="c" @click="getPets">Câini</div>
        <div class="el" id="p" @click="getPets">Pisici</div>
        <div class="el" id="i" @click="getPets">Iepuri</div>
        <div class="el" id="r" @click="getPets">Raton</div>
        <div class="el" id="h" @click="getPets">Hamster</div>
    </div>
</template>

<script>
    export default {
        emits: ['filter'],
        methods: {
            getPets(event) {
                switch(event.target.id){
                    case 'c': this.$emit('filter',{id: 0});break;
                    case 'p': this.$emit('filter',{id: 1});break;
                    case 'i': this.$emit('filter',{id: 2});break;
                    case 'r': this.$emit('filter',{id: 3});break;
                    case 'h': this.$emit('filter',{id: 4});break;
                }; 
            }
        },
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
        cursor: pointer;
    }

</style>