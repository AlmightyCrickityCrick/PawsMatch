<template>
    <HeroSection/>
    <FamilySection/>
    <StatSection/>
    <AdoptSection/>
</template>

<script>
    import HeroSection from '../components/HeroSection.vue';
    import StatSection from '../components/StatSection.vue';
    import FamilySection from '../components/FamilySection.vue';
    import AdoptSection from '../components/AdoptSection.vue';
    export default {
        components: {
            HeroSection, StatSection,FamilySection,AdoptSection,
        },
    }
</script>

<style scoped>

</style>