<template>
    <Filter/>
    <div>
        <PetList />
    </div>
</template>

<script>
    import Filter from '../components/Filter.vue';
import PetList from '@/components/PetList.vue';
    export default {
        components: {
            Filter,  PetList

        },

    }
</script>

<style lang="scss" scoped>

</style>