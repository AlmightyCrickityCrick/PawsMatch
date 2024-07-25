<template>
    <div class="dog-info">
        <div class="container d-flex">
            <img src="dogg.jpg" alt="Dog Picture">
            <div>
                <h2>Name: <strong>Dog</strong></h2>
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

<style lang="scss" scoped>

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