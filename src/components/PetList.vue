<template>
    <div>
        <PetCard 
        v-for="pet in petList"
        :key="pet.id"
        :id="pet.id"
        :name="pet.name"
        :surname="pet.surname"
        :image_link="pet.image_link"/>

    </div>
</template>

<script>
    import {myaxios} from '../axios';
    import PetCard from './PetCard.vue';
    export default {
        data() {
            return {
                petList: [],
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

</style>