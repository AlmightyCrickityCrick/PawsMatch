
<template>
    <div class="header">
        <a href="#">
            <img src="../../public/Logo_text.png" alt="logo" id="header_logo">

        </a>

        <nav>
            <ul>
                <li>
                    <RouterLink to="/">Home</RouterLink>
                </li>
                <li>
                    <RouterLink to="/adopt">Adopt</RouterLink>
                </li>
                <li>
                    <RouterLink to="/">About</RouterLink>
                </li>

            </ul>
        </nav>
    </div>
</template>

<script> 
import {RouterLink} from "vue-router"
    export default {
        components:{
            RouterLink
        }
}  
</script>

<style scoped>
    *{
        box-sizing: border-box;
    }

    ul {
        margin: 0px;
        padding: 0px;
        list-style: none;
    }


    .header {
        padding: 10px 20px;
        width: 100%;
        height: 60px;
        display: block;
        background-color: white;
    }

    .header a {
        line-height: 0px;
        float: left;
        display: block;
    }

    .header img {
        height: 2.6rem;
    }

    .header nav {
        float: right;padding-top: 5px;
    }

    .header ul li {
        display: inline-block;
        margin-left: 2rem;
    }

    .header ul li a {
        text-decoration: none;
        color: #000000;
        font-size: 18pt;
        transition: color 0.3s ease;
        font-family: "Merriweather", serif;
        font-weight: 400;
        font-style: normal;
    }

    .header ul li a:hover {
        color: rgb(170, 20, 20);
    }
</style>
