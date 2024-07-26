<template>
    <div class="gallery-item">
        <img :src='image_link' alt="Pet Picture">
        <RouterLink :to="link">{{name}} {{ surname }}</RouterLink>
    </div>
</template>

<script>
    import { RouterLink } from 'vue-router';
    export default {
        props: {
            id: "",
            name: "",
            surname: "",
            image_link: ""
        },

        components:{
            RouterLink
        },
        computed: {
            link() {
                return "/pet/" + this.id 
            }
        },
    }
</script>

<style scoped>
.gallery-item {
    background-color: #E0E0E0;
    border-radius: 10px;
    width: 243px;
    height: 323px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    position: relative;
    margin: 20px;
    text-align: center;

}

.gallery-item img {
height: 225px;
width: 100%;
gap: 0px;
border-radius: 7px;
object-fit: cover;
margin-bottom: 20px;

}
</style>