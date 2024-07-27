<template>
    <div class="page">
        <Filter :id="this.currentFilter" @filter="filterPets($event)"/>
        <div>
            <PetList :filter="currentFilter"/>
        </div>
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
    .page {
        min-height: calc(100vh - 232px);
        margin: 0%;
        padding: 0%;
    }
</style>