<template>
    <section class="familia-noastra">
        <h2>Familia noastră</h2>
        <div class="echipa">
            <FamilyMember v-for="member in this.familyMemberList" 
                :function="member.function"
                :name="member.name"
                :img="member.img"
                :key="member.name"
            />
        </div>
    </section>
</template>

<script>
    import FamilyMember from './FamilyMember.vue';
    export default {
        components: {
            FamilyMember,
        },
        data() {
            return {
                familyMemberList: [
                    {
                        function: 'Frontend static',
                        name: 'Cernat Doina',
                        img: '../../public/Lina',
                    },
                    {
                        function: 'Frontend static',
                        name: 'Petreanu Andreea',
                        img: '../../public/Andreea P.jpg',
                    },
                    {
                        function: 'Frontend static',
                        name: 'Vieru Felicia',
                        img: '../../public/Lina',
                    },
                    {
                        function: 'Frontend static',
                        name: 'Gîdîlică Arina',
                        img: '../../public/Arina G.jpg',
                    },
                    {
                        function: 'Frontend dinamic',
                        name: 'Pidghirnîi Vlada',
                        img: '../../public/vlada.jpg',
                    },
                    {
                        function: 'Frontend dinamic',
                        name: 'Drelea Valeria',
                        img: '../../public/Lina',
                    },
                    {
                        function: 'Frontend dinamic',
                        name: 'Danu Anastasia',
                        img: '../../public/Anastasia.jpg',
                    },
                    {
                        function: 'Mentoră',
                        name: 'Scripca Lina',
                        img: "../../public/Lina.jpg",
                    },
                ]
            }
        },
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');
    .echipa {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        justify-items: center;
        padding: 0 10%;
    }
    .familia-noastra {
        text-align: center;
        padding: 0 20px 100px;
    }

    .familia-noastra h2 {
        font-size: 64px;
        padding: 50px;
        margin-bottom: 20px;
        font-family: "Lora", serif;
        font-optical-sizing: auto;
        font-weight: weight;
        font-style: normal;
        color: rgba(52, 16, 58, 1);
    }
</style>