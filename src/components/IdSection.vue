<template>
    <div class="dog-info">
        <div class="container d-flex">
            <img src="" alt="Dog Picture">
            <div>
                <p><strong>Name:</strong> Dog</p>
                <p><strong>Surname:</strong> Dog</p>
                <p><strong>Vârstă:</strong> 3 ani</p>
                <p><strong>Vaccin:</strong> B2, C1, C2</p>
                <p class="width1"><strong>Biografie:</strong> Lorem ipsum isnhafjknaks fnkasjn
                    qoiofnqijnkjasfjniojqfofnadjkfnoifdsjk
                    fnsjkdfnslknewnl1snokfndllknalksnns lakn sadsadadwwwasadasf sf sdf
                    dsfsdfwgergdjbskdjfbskjfoiwwbfjsjbd</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>


.container {
    width: 100%;
    max-width: 500px;
    margin: 20px auto;
    padding: 20px;
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
}

.d-flex {
    display: flex;
}

.dog-info {
    display: flex;
    padding: 20px;
    border-bottom: 2px solid #eee;
}

.dog-info img {
    border-radius: 8px;
    margin-right: 20px;
    max-width: 150px;
    height: auto;
}

.dog-info div {
    flex: 1;
}

.dog-info h2,
.dog-info p {
    margin: 5px 0;
}

.dog-info h2 {
    color: #444;
}

.dog-info p strong {
    color: #aa0000;
}

.dog-info p {
    font-size: 14px;
}

.width1 {
    width: 80%;
}


</style>