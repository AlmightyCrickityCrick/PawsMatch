<template>
    <div>
        <section class="section section-work-data">
    <div class="container grid grid-three-column">
        <div>
            <h2 class="counter-numbers">200+</h2>
            <p>Animals adopted</p>
        </div>
        <div>
            <h2 class="counter-numbers">150+</h2>
            <p>Happy clients</p>
        </div>
        <div> 
            <h2 class="counter-numbers">16+</h2>
            <p>Animals still looking for a owner</p>
        </div>
    </div> 
    </section>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
.section-work-data {
    background-color: rgb(230, 228, 228);
    text-align: center;
}

.counter-numbers {
    font-size: 2.5rem;
}

.grid-three-column {
	text-align: center;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
}

body {
  font-family: "Lora", serif;
  font-optical-sizing: auto;
  font-weight: weight;
  font-style: normal;
}

.grid-three-column p{
	font-size: 1.3rem;
}
</style>