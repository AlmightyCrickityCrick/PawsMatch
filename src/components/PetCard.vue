<template>
    <div class="pet">
        <div class="gallery-item">
            <RouterLink :to="link">
            <img :src='image_link' alt="Pet Picture">
            {{name}} {{ surname }}</RouterLink>
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
*:hover {
        cursor: none;
}
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
        transition-duration: 0.3s;
    }

    .gallery-item:hover {
        background-color: #bcbcbc;
        border-radius: 14px;
        transition-timing-function: cubic-bezier(0.4, 0.06, 0.14, 1);
        transition-duration: 0.3s;
        box-shadow: 0 4px 8px 0 rgba(157, 161, 170, 0.078), 0 6px 20px 0 rgba(138, 125, 155, 0.309);
    }

    .gallery-item img {
        width: 100%;
        height: 225px;
        gap: 0px;
        border-radius: 7px;
        object-fit: cover;
        margin-bottom: 20px;
    }

    a {
        text-decoration: none;
        color: black;
    }
</style>