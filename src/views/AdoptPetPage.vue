<template>
    <Filter @filter="filterPets($event)"/>
    <div>
        <PetList :filter="currentFilter"/>
    </div>
</template>

<script>
    import Filter from '../components/Filter.vue';
    import PetList from '../components/PetList.vue';
    export default {
        components: {
            Filter,  PetList,
        },
        data() {
            return {
                currentFilter: null,
            }
        },
        methods: {
            filterPets(event) {
                this.currentFilter = event.id;
            }
        },

    }
</script>

<style scoped>

</style>