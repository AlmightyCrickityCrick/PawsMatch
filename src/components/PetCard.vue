<template>
    <div class="pet">
        <div class="gallery-item">
            <img :src='image_link' alt="Pet Picture">
            <RouterLink :to="link">{{name}} {{ surname }}</RouterLink>
        </div>
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
    .pet {
        padding: 10px;
    }

    .gallery-item {
        background-color: #E0E0E0;
        border-radius: 10px;
        width: auto;
        height: 275px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        text-align: center;
    }

    .gallery-item img {
        width: 100%;
        height: 225px;
        gap: 0px;
        border-radius: 7px;
        object-fit: cover;
        margin-bottom: 20px;
    }

    RouterLink {
        text-decoration: none;
    }
</style>