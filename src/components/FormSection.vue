<template>
    
    <div class="form-section container">
        <h2 class="color-p">Chestionar</h2>
        <h2 class="color-g">Informatii generale</h2>
        <form>
            <div class="box">
                <label for="nume">Nume:‎ ‎ ‎ ‎ </label>
                <input type="text" id="nume" name="nume">
            </div>
            <div class="top"></div>
            <div class="box">
                <label for="prenume">Prenume:‎ ‎ ‎ ‎</label>
                <input type="text" id="prenume" name="prenume">
            </div>
            <div class="top"></div>
            <div class="box">
                <label for="telefon">Nr. de telefon:‎ ‎ ‎ ‎</label>
                <input type="tel" id="telefon" name="telefon">
            </div>
            <div class="top"></div>
            <h2 class="color-g">Experiente si preferinte</h2>
            <div class="box">
                <label for="locatie">Unde locuiți?</label>
                <input type="text" id="locatie" name="locatie">
            </div>
            <div class="top"></div>
            <div class="box">
                <div class="radio-group ">
                    <label>Ați mai avut animale de companie? Câte?</label>
                    <div class="d-flex">
                        <label><input type="radio" name="animale" value="Nu"> Nu</label>
                        <label><input type="radio" name="animale" value="1"> 1</label>
                        <label><input type="radio" name="animale" value="2"> 2</label>
                        <label><input type="radio" name="animale" value="3+"> 3+</label>
                    </div>
                </div>
            </div>
            <div class="top"></div>
            <div class="box">
                <div class="radio-group">
                    <label>Sunteți conștient/ă de costurile viitoare necesare?</label>
                    <div class="d-flex">
                        <label><input type="radio" name="costuri" value="Nu"> Nu</label>
                        <label><input type="radio" name="costuri" value="Da"> Da</label>
                    </div>
                </div>
                <div class="top"></div>
                <div class="box">
                    <div class="radio-group">
                        <label>Câte ore pe zi sunteți acasă?</label>
                        <div class="d-flex">
                            <label><input type="radio" name="ore" value="3-4"> 3-4</label>
                            <label><input type="radio" name="ore" value="5-7"> 5-7</label>
                            <label><input type="radio" name="ore" value="7-9"> 7-9</label>
                            <label><input type="radio" name="ore" value="12+"> 12+</label>
                        </div>
                    </div>
                </div>
                <div class="d-flex">
                    <button type="submit" class="submit-btn">Aplică!</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.container {
    width: 100%;
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}
.form-section {
    padding: 20px;
}

.form-section h2 {
    margin-top: 0;
    text-align: center;
}

form {
    display: flex;
    flex-direction: column;
}

form input[type="text"],
form input[type="tel"],
form select {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

input {
    height: 5px;
}

form label {
    margin-bottom: 5px;
    color: #333;
}

form .radio-group {
    margin-bottom: 15px;
}

form .radio-group label {
    display: block;
    margin-bottom: 5px;
}

form .radio-group input {
    margin-right: 10px;
}

form .submit-btn {
    align-items: center;
    background: white;
    color: rgb(29, 29, 29);
    border: 1px solid black;
    border: 0;
    padding: 10px;
    border-radius: 5px;
    font-size: 18px;
    text-align: center;
}
.color-p {
  color: #4b0082;
}
.color-g {
    color: rgb(196, 193, 193);
}
.top {
    margin-top: 5px;
    margin-bottom: 5px;
}
.box {
    border: rgb(228, 225, 225) 1px solid;
    padding-top: 20px;
    padding: 5px;
    border-radius: 3px;
    background-color: rgb(228, 225, 225);
}
.d-flex {
    display: flex;
}
</style>