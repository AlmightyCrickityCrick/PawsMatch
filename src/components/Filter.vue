<template>
    <div class="mid">
        <div :class="this.id == null ? 'active' :''" class="el" id="x" @click="getPets">All</div>
        <div :class="this.id == 0 ? 'active' :''" class="el" id="c" @click="getPets">Câini</div>
        <div :class="this.id == 1 ? 'active' :''" class="el" id="p" @click="getPets">Pisici</div>
        <div :class="this.id == 2 ? 'active' :''" class="el" id="i" @click="getPets">Iepuri</div>
        <div :class="this.id == 3 ? 'active' :''" class="el" id="r" @click="getPets">Raton</div>
        <div :class="this.id == 4 ? 'active' :''" class="el" id="h" @click="getPets">Hamster</div>
    </div>
</template>

<script>
    export default {
        emits: ['filter'],
        data() {
            return {
                id: null,
            }
        },
        methods: {
            getPets(event) {
                switch(event.target.id){
                    case 'x': this.id=null;this.$emit('filter',{id: null});console.log("Nul");break;
                    case 'c': this.id=0;this.$emit('filter',{id: 0});break;
                    case 'p': this.id=1;this.$emit('filter',{id: 1});break;
                    case 'i': this.id=2;this.$emit('filter',{id: 2});break;
                    case 'r': this.id=3;this.$emit('filter',{id: 3});break;
                    case 'h': this.id=4;this.$emit('filter',{id: 4});break;
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

    .pad {
        padding-top: 80px;
    }

    .active {
        font-weight: 700;
        color: #a04039;
    }

    .mid {
        font-family: Nunito, sans-serif;
        font-size: 17pt;
        margin: 10px auto;
        padding: 0 50px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        background-color: #E0E0E0 ;
        justify-content: center;
        border-radius: 15px;
        width: 80%;
        align-items: center;
        text-align: center;
    }

    .el {
        color: rgb(60, 60, 60);
        transition-duration: 0.6s;
        transition-timing-function: cubic-bezier(0.4, 0.06, 0.14, 1);
        padding: 10px 0;
        border-radius: 10px;
    }

    .el:hover {
        color: #C4554D;
        cursor: pointer;
        transition-duration: 0.3s;
        transition-timing-function: cubic-bezier(0.4, 0.06, 0.14, 1);
        background-color:rgba(159, 159, 159, 0.167) ;
        border-radius: 4px;
        font-weight: 600;
        box-shadow: 0 4px 8px 0 rgba(157, 161, 170, 0.076), 0 6px 20px 0 rgba(138, 125, 155, 0.234);
    }
    .active:hover {
        font-weight: 700;
    }

</style>