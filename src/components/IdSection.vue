<template>
    <div class="dog-info">
        <div class="container d-flex">
            <div>
                <img :src='pet.image_link' alt="Pet Picture">
            </div>
            <div>
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
                /*myaxios.get(`/pet`).then(
                    (data) => {
                        console.log(data);
                    },
                );*/
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
    @import url('https://fonts.googleapis.com/css2?wght@0,100..900;1,100..900&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Rakkas&display=swap');

    * {
        font-family: "Merriweather", sans-serif;
    }

    .container {
        width: 100%;
        max-width: 525px;
        margin: 20px auto;
        padding: 20px;
        background: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border-radius: 15px;
        font-size: 18px;
        text-align: justify;
    }

    .d-flex {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 20px;
    }

    .dog-info img {
        border-radius: 10px;
        width: 100%;
        height: auto;
    }

    .dog-info h2,
    .dog-info p {
        margin: 5px 0;
        line-height: 20px;
    }

    .dog-info p strong {
        color: #aa0000;
    }

    .width1 {
        width: 100%;
    }


</style>