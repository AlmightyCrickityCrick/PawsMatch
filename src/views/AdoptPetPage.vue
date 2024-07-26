<template>
    <Filter @filter="filterPets($event)"/>
</template>

<script>
    import Filter from '../components/Filter.vue';
    export default {
        components: {
            Filter,
        },
        computed: {
            currentList() {
                if(this.currentFilter != null)
                    return this.currentFilter; 
            }
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