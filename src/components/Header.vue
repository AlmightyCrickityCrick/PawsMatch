
<template>
    <div :class="isCursorToggled ? 'active' : 'inactive'"  class="header">
        <a href="#">
            <img src="../../public/Logo_text.png" alt="logo" id="header_logo">

        </a>

        <nav>
            <ul>
                <li>
                    <div class="toggle-outline"
                    @click="cursorToggle"
                    >
                        <div class="toggle"
                        :class="this.newCursorIsToggled ? 'active' : 'inactive'">
                        </div>
                    </div>
                </li>
                <li>
                    <RouterLink to="/" >Home</RouterLink>
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
        },

        props: {
            isCursorToggled: {
                default: true
            },
        },
        data() {
            return {
                newCursorIsToggled: true
            }
        },
        methods: {
            cursorToggle() {
                this.newCursorIsToggled = !this.newCursorIsToggled
                if(this.newCursorIsToggled) {
                    this.$emit('cursorIsToggled')
                }
                if(!this.newCursorIsToggled) {
                    this.$emit('cursorNotToggled')
                }
            }
        },
    }  
</script>

<style scoped>

.active li a:hover, img:hover{
    cursor: none;
}
.inactive li a:hover, img:hover{
    cursor: pointer;
}

    .toggle-outline {
        width: 40px;
        height: 20px;
        outline: 2.5px solid #c55850c1;
        border-radius: 10px;
        padding: 2.2px;
        margin-bottom: 2px;
        margin-right: 10px;
    }
    .inactive .toggle-outline:hover{
        cursor: pointer;
    }
    .active .toggle-outline:hover{
        cursor: pointer !important;
    }
    .toggle {
        width: 10px;
        height: 10px;
        border-radius: 200px;
        padding: 7.5px;
    }
    .toggle.inactive:hover{
        cursor: pointer;
    }
    .toggle.active:hover{
        cursor: pointer !important;
    }
    .toggle.active {
        transition-duration: 0.6s;
        transition-timing-function: cubic-bezier( 0.6, 0.04, 0.77, 0.99 );
        background-color: #C55850;
        margin: 0 0 0 1px;
    }
    .toggle.inactive {
        transition-duration: 0.6s;
        transition-timing-function: cubic-bezier( 0.6, 0.04, 0.77, 0.99 );
        background-color: #817474;
        margin: 0 0 0 20px;
    }


    *{
        box-sizing: border-box;
    }

    ul {
        margin: 0px;
        padding: 0px;
        list-style: none;
    }


    .header {
        padding-right: 40px;
        margin: 0;
        width: 100%;
        height: 70px;
        display: block;
        background-color: white;
        position: fixed;
        align-items: center;
        box-shadow: 0 0 100px #00150514;
        z-index: 3;
    }

    .header a {
        line-height: 0px;
        float: left;
        display: block;
        margin: 0 10px 0 5px;
    }

    .header img {
        height: 70px;
        padding: 10px 10px 10px 20px;
        margin-left: -3px;
        transition-duration: 0.6s;
        transition-timing-function: cubic-bezier(0.4, 0.06, 0.14, 1);
    }
    .header img:hover {
        box-shadow: 0 4px 8px 0 rgba(157, 161, 170, 0.076), 0 6px 20px 0 rgba(138, 125, 155, 0.234);
        transition-duration: 0.3s;
        transition-timing-function: cubic-bezier(0.4, 0.06, 0.14, 1);
    }


    .header nav {
        float: right;padding-top: 5px;
    }
    ul {
        padding: 14px 20px;
    }
    .header ul li {
        display: inline-block;
        margin-left: 2rem;
    }

    .header ul li a {
        text-decoration: none;
        color: #000000;
        font-size: 18pt;
        font-family: "Merriweather", serif;
        font-weight: 400;
        font-style: normal;
        padding: 15px 0;
        transition-duration: 0.6s;
        transition-timing-function: cubic-bezier(0.4, 0.06, 0.14, 1);
    }

    .header ul li a:hover {
        color: rgb(170, 20, 20);
        text-shadow: 0 4px 10px rgba(157, 161, 170, 0.157), 0 6px 20px rgba(138, 125, 155, 0.546);
        transition-duration: 0.3s;
        transition-timing-function: cubic-bezier(0.4, 0.06, 0.14, 1);
    }
</style>
