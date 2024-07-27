<template>
    <div class="footer">
        <div class="grid">
            <div class="icon"> <a href="#"><img src="/inst.png" alt="instagram" id="im1"></a></div>
            <div class="icon"><a href="#"><img
                        src="/tele.png" id="im2"></a></div>
            <div class="icon"> <a href="#"><img
                        src="/face.png" alt="facebook" ></a>
            </div>
            <div class="icon"> <a href="#"><img src="/twitter.png" alt="twitter" id="im4"></a></div>
        </div>
        <div class="ide">PawsMatch 2024 &copy; All rights are reserved.</div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style  scoped>

    .footer {
        margin-top: 57px;
        background-color: rgba(135, 147, 147, 0.692);
        padding: 20px;
        text-align: center;
        height: 60px;
        bottom: 0;
    }

    .grid{
        width: min-content;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 20px;
        margin: auto;
        padding-bottom: 10px;
    }

    .icon {
        display: inline-block;
        box-align: center;
        width: 30px;
    }

    img {
        width: 100%;
    }

    #im1, #im2, #im4 {border-radius: 7px;}
</style>