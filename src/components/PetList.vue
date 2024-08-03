<template>
    <div>
        <div class="gallery">
            <PetCard 
            v-for="pet in currentPetList"
            :key="pet.id"
            :id="pet.id"
            :name="pet.name"
            :surname="pet.surname"
            :image_link="pet.image_link"/>
    </div>
    </div>
</template>

<script>
    import {myaxios} from '../axios';
    import PetCard from './PetCard.vue';
    export default {
        props:{
            filter: Number
        },
        data() {
            return {
                petList: [],
            }
        },

        computed: {
            currentPetList() {
                if (this.filter == null) {
                    return this.petList
                } else {
                    return this.petList.filter((pet) => pet.type == this.filter)
                }
                
            }
        },
        components:{
            PetCard
        },
        mounted () {
            myaxios.get('/pet').then(
                (data) => {
                    this.petList = data.data.pets;
                }
            );
        },
    }
</script>

<style scoped>
*:hover {
        cursor: none;
}
    .gallery {
        box-sizing: border-box;
        width: 80%;
        margin: auto;
        display: grid;
        align-items: center;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        font-family: "Nunito", sans-serif;
    }


</style>