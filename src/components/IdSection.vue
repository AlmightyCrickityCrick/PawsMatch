<template>
    <div class="dog-info">
        <div class="container d-flex">
            <div>
                <img src="../../public/Logo.svg" alt="Dog Picture">
            </div>
            <div>
                <p><strong>Name: </strong>{{ name }}</p>
                <p><strong>Surname: </strong>{{ surname }}</p>
                <p><strong>Vârstă: </strong>{{ age }}</p>
                <p><strong>Vaccin: </strong>{{ vaccin }}</p>
                <p class="width1"><strong>Biografie: </strong><br/>{{ bio }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: '',
                surname: '',
                type: 0,
                age: 2,
                image_link: '',
                vaccine: true,
                bio: '',
            }
        },
        mounted () {
            ;
        },
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Kalam:wght@300;400;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Lora:ital,wght@0,400..700;1,400..700&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Noto+Serif:ital,wght@0,100..900;1,100..900&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Rakkas&display=swap');

    * {
        font-family: "Merriweather", sans-serif;
    }

    .container {
        width: 100%;
        max-width: 525px;
        margin: 20px auto;
        padding: 20px;
        background: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border-radius: 15px;
        font-size: 18px;
        text-align: justify;
    }

    .d-flex {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 20px;
    }

    .dog-info img {
        border-radius: 10px;
        width: 100%;
        height: auto;
    }

    .dog-info h2,
    .dog-info p {
        margin: 5px 0;
        line-height: 20px;
    }

    .dog-info p strong {
        color: #aa0000;
    }

    .width1 {
        width: 100%;
    }


</style>