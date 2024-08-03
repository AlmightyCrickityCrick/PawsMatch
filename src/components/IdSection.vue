<template>
    <div class="pet-info">
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
*:hover {
        cursor: none;
}
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');
    * {
        font-family: "Merriweather", sans-serif;
    }

    .pet-info {
        margin-bottom: 60px;
    }

    .container {
        width: 55%;
        margin: 20px auto;
        padding: 20px;
        background-color: rgb(224, 224, 224);
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.33);
        border-radius: 15px;
        font-size: 18px;
        text-align: left;
    }

    .d-flex {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 70px;
    }
    h2, p {
        margin: 5px 0;
        line-height: 28px;
        text-align: justify;
    }

    strong {
        color: #752222;
    }

    .width1 {
        width: 100%;
    }

    img {
        margin: 3px 10px;
        max-width: 470px;
        width: 100%;
        height: 25vw;
        max-height: 500px;
        border-radius: 7px;
        object-fit: cover;
        outline: 2px solid black;
    }
    .text {
        padding: 10px;
        margin-left: -20px;
    }
    
</style>