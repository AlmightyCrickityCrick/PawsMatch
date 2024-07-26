<template>
    <div class="form-section">
        <h2 class="color-p">Chestionar</h2>
        <h2 class="color-g">Informații generale</h2>
        <div class="form">
            <div class="box grid">
                <label for="nume">Nume:</label>
                <input type="text" id="nume" name="nume" v-model="name" required/>
            </div>

            <div class="box grid">
                <label for="prenume">Prenume:</label>
                <input type="text" id="prenume" name="prenume" v-model="surname" required/>
            </div>

            <div class="box grid">
                <label for="telefon">Nr. de telefon:</label>
                <input type="tel" id="telefon" name="telefon" v-model="phone" required/>
            </div>

            <h2 class="color-g">Experiențe și preferințe</h2>

            <div class="box grid">
                <label for="locatie">Unde locuiți?</label>
                <select name="locatie" v-model="house_type" required>
                    <option value="apartament">Apartament</option>
                    <option value="casa pe pamant">Casa pe pământ</option>
                </select>
            </div>

            <div class="box">
                <div class="radio-group ">
                    <label>Ați mai avut animale de companie? Câte?</label>
                    <div class="d-flex">
                        <label><input type="radio" name="animale" value="Nu" v-model="pets"> Nu</label>
                        <label><input type="radio" name="animale" value="1" v-model="pets"> 1</label>
                        <label><input type="radio" name="animale" value="2" v-model="pets"> 2</label>
                        <label><input type="radio" name="animale" value="3+" v-model="pets"> 3+</label>
                    </div>
                </div>
            </div>

            <div class="box">
                <div class="radio-group">
                    <label>Sunteți conștient/ă de costurile viitoare necesare?</label>
                    <div class="d-flex">
                        <label><input type="radio" name="costuri" value="true" v-model="cost_agreement"> Da</label>
                        <label><input type="radio" name="costuri" value="false" v-model="cost_agreement"> Nu</label>
                    </div>
                </div>
            </div>

            <div class="box">
                <div class="radio-group">
                    <label>Câte ore pe zi sunteți acasă?</label>
                    <div class="d-flex">
                        <label><input type="radio" name="ore" value="3-4" v-model="free_hours"> 3-4</label>
                        <label><input type="radio" name="ore" value="5-7" v-model="free_hours"> 5-7</label>
                        <label><input type="radio" name="ore" value="7-9" v-model="free_hours"> 7-9</label>
                        <label><input type="radio" name="ore" value="12+" v-model="free_hours"> 12+</label>
                    </div>
                </div>
            </div>

            <button type="submit" class="submit-btn" @click="submitFormHandler">
                Aplică!
            </button>
        </div>
    </div>
</template>

<script>
    import {useToast} from 'vue-toast-notification';
    import 'vue-toast-notification/dist/theme-sugar.css';
    import { myaxios } from '../axios';
    export default {
        data() {
            return {
                name: '',
                surname: '',
                phone: '',
                house_type: "apartament",
                pets: "Nu",
                cost_agreement: false,
                free_hours: "3-4",
            }
        },
        computed: {
            id() {
                return this.$route.params.id;
            }
        },
        methods: {
            submitFormHandler() {
                const newForm = {
                    name: this.name,
                    surname: this.surname,
                    phone: this.phone,
                    house_type: this.house_type,
                    pets: this.pets,
                    cost_agreement: this.cost_agreement,
                    free_hours: this.free_hours,
                }
                
                if(this.name == '' || this.surname == '' || this.phone == '' || this.house_type == ''){
                    const $toast = useToast();
                    $toast.warning('There is some missing information!');
                    return;
                }
                
                if(this.cost_agreement == false){
                    const $toast = useToast();
                    $toast.error('You must agree with the cost!');
                    return;
                }

                this.name = '';
                this.surname = '';
                this.phone = '';
                this.house_type = "apartament";
                this.pets = "Nu";
                this.cost_agreement = false;
                this.free_hours = "3-4"; 

                myaxios.post(`/pet/${this.id}/adopt`,newForm).then(
                    (data) => {
                        console.log(data);
                    }
                )
            }
        },
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');
    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    *{
        box-sizing: border-box;
    }

    label, input, select {
        font-size: 18px;
    }

    .grid label, .grid input, .grid select {
        width: 50%;
    }

    .form-section {
        padding: 20px;
    }

    .form-section h2 {
        margin: 15px 0 5px;
        text-align: center;
    }

    .form {
        display: flex;
        flex-direction: column;
        margin: 0 20%;
    }

    input[type="text"],
    input[type="tel"],
    select {
        padding: 2px 3px;
        border: 1px solid #383838;
        border-radius: 7px;
    }

    select {
        color: black;
    }

    .radio-group input {
        margin-right: 10px;
    }

    .submit-btn {
        align-items: center;
        color: rgb(53, 77, 50);
        border: 1px solid rgb(53, 77, 50);
        padding: 10px 75px;
        border-radius: 15px;
        font-size: 25px;
        text-align: center;
        margin: 35px auto 0;
        font-family: "Lora",sans-serif;
        font-weight: 700;
        box-shadow: 4px 4px rgb(186, 186, 186);
        background-color: #f2f2f2;
    }

    .submit-btn:hover {
        color: white;
        background: rgb(53, 77, 50);
    }

    .submit-btn:active {
        color: white;
        background: rgb(53, 77, 50);
        box-shadow: 0 0;
        top: 4px;
        left: 4px;
    }

    .color-p {
        color: rgb(52, 16, 58);
        font-size: 40px;
        font-family: "Lora", sans-serif;
    }
    .color-g {
        color: rgb(53, 77, 50);
        font-family: "Merriweather", sans-serif;
    }
    .box {
        display: flex;
        padding: 2px 5px;
        border-radius: 15px;
        background-color: rgb(224, 224, 224);
        margin: 5px 0;
        align-items: center;
        align-content: center;
        font-family: "Nunito", serif;
    }
    .d-flex {
        display: flex;
    }
    .box:before{
        content: '';
        background:url('../../public/calligraphy-heart-with-paw-print.png');
        display: inline-block;
        height: 45px;
        width: 45px;
        background-size: cover;
        margin: 0 15px;
        padding: 0%;
    }
</style>