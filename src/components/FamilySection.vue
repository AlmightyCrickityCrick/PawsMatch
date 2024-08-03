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
                        function: 'Frontend Static',
                        name: 'Cernat Doina',
                        img: '/Doina.jpg',
                    },
                    {
                        function: 'Frontend Static',
                        name: 'Petreanu Andreea',
                        img: '/Andreea P.jpg',
                    },
                    {
                        function: 'Frontend Static',
                        name: 'Vieru Felicia',
                        img: '/Felicia.jpg',
                    },
                    {
                        function: 'Frontend Static',
                        name: 'Gîdîlică Arina',
                        img: '/Arina G.jpg',
                    },
                    {
                        function: 'Frontend Dinamic',
                        name: 'Pidghirnîi Vlada',
                        img: '/vlada.jpg',
                    },
                    {
                        function: 'Frontend Dinamic',
                        name: 'Drelea Valeria',
                        img: '/Valeria.jpg',
                    },
                    {
                        function: 'Frontend Dinamic',
                        name: 'Danu Anastasia',
                        img: '/Anastasia.jpg',
                    },
                    {
                        function: 'Mentoră',
                        name: 'Scripca Lina',
                        img: "/Lina.jpg",
                    },
                ]
            }
        },
    }
</script>

<style scoped>
*:hover {
        cursor: none;
}
    @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');
    .echipa {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        justify-items: center;
        padding: 0 20%;
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