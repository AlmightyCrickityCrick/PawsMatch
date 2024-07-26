<template>
    <div class="dog-info">
        <div class="container d-flex">
            <div>
                <img :src='pet.image_link' alt="Pet Picture">
            </div>
            <div class="text">
                <p><strong>Name: </strong>{{ pet.name }}</p>
                <p><strong>Surname: </strong>{{ pet.surname }}</p>
                <p><strong>Vârstă: </strong>{{ pet.age }} ani</p>
                <p><strong>Vaccin: </strong>
                    <span v-if="pet.vaccine==false">Nu</span>
                    <span v-else>Da</span>
                </p>
                <p class="width1"><strong>Biografie: </strong><br/>{{ pet.bio }}</p>
            </div>
        </div>
    </div>
</template>

<script>    
    import { myaxios } from '../axios';
    export default {
        data() {
            return {
                name: '',
                surname: '',
                type: 0,
                age: 0,
                image_link: '',
                vaccine: true,
                bio: '',
                pet: {},
            }
        },
        computed: {
            id() {
                return this.$route.params.id; 
            }
        },
        methods: {            
            getPets() {
                myaxios.get(`/pet/${this.id}`).then(
                    (data) => {
                        this.pet = data.data;
                        console.log(this.pet);
                    },
                );
            },
        },
        mounted () {
            this.getPets();
        },
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');
    * {
        font-family: "Merriweather", sans-serif;
    }

    .text {
        margin-left: -10px;
    }
    .container {
        width: 1050px;
        height: min-content;
        margin: 20px auto;
        padding: 20px;
        background-color: rgb(224, 224, 224);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border-radius: 15px;
        font-size: 18px;
        text-align: left;
    }

    .d-flex {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 20px;
    }
    .dog-info h2,
    .dog-info p {
        margin: 5px 0;
        line-height: 28px;
    }

    .dog-info p strong {
        color: #752222;
    }

    .width1 {
        width: 100%;
    }

    img {
        margin: 3px 10px 3px 10px;
        width: 500px;
        height: 470px;
        border-radius: 7px;
        object-fit: cover;
        outline: 4px solid black;
    }
</style>