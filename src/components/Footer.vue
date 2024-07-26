<template>
    <div>
        <footer>
        <div class="icon"> <a href="#"><img src="inst.png" alt="instagram" id="im1"></a></div>
        <div class="icon"><a href="#"><img
                    src="tele.png" id="im2"></a></div>
        <div class="icon"> <a href="#"><img
                    src="https://freepnglogo.com/images/all_img/1713419247Facebook-Logo-Black.png" alt="facebook" ></a>
        </div>
        <div class="icon"> <a href="#"><img src="twitter.jpg" alt="twitter" id="im4"></a></div>
    </footer>
    <div class="ide">2024 &copy; All rights are reserved.</div>
    
    </div>
</template>

<script>
    export default {
    }
</script>

<style  scoped>
 footer {
    background-color: rgba(135, 147, 147, 0.692);
text-align: center;

}

.icon {
    display: inline-block;
    box-align: center;
    width: 50px;
}

img {
    width: 100%;
}


    #im1, #im2, #im4 {border-radius: 7px;}



.ide {
    text-align: center;
    background-color: rgba(135, 147, 147, 0.692);
}
</style>