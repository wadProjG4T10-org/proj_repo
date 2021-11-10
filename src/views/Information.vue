<template>

        <main>
		<div class="text">
			<h1>Information</h1>
			<p>
                click to find out more
			</p>
		</div>
		<header>
		</header>

		<section>

		
            <div class="product" @mouseover="hover_a = true" @mouseleave="hover_a = false">
				<picture>
					<img src="../assets/alzheimers.png" alt= "alzheimers">
				</picture>
					<input type="button" class="modal_button" v-on:click="open('mc_alzheimers')" value="Click for more" v-if="hover_a">
					<div class=" modal_container" id="mc_alzheimers">
						<b-card>
								<div class="modal_text">
									<h3>Alzheimers</h3>
									<p>symptoms:</p>
									<input type="button" class="modal_button" v-on:click="close('mc_alzheimers')" value="close">
								</div>
						</b-card>
					</div>
            </div>
			
            <div class="product" @mouseover="hover_f = true" @mouseleave="hover_f = false">
				<picture>
					<img src="../assets/falls.png" alt= "falls">
				</picture>
				<!--modal-->
				<input type="button" class="modal_button" v-on:click="open('mc_falls')" value="Click for more" v-if="hover_f">
					<div class="modal_container" id="mc_falls">
						<b-card>
								<div class="modal_text">
									<h3>Falls</h3>
									<p>symptoms:</p>
									<input type="button" class="modal_button" v-on:click="close('mc_falls')" value="close">
								</div>
						</b-card>
					</div>
            </div>

            <div class="product" @mouseover="hover_d = true" @mouseleave="hover_d = false">
				<picture>
					<img src="../assets/diabetes.png" alt= "diabetes">
				</picture>
				<!--modal-->
				<input type="button" class="modal_button" v-on:click="open('mc_diabetes')" value="Click for more" v-if="hover_d">
					<div class="modal_container" id="mc_diabetes">
						<b-card>
								<div class="modal_text">
									<h3>Diabetes</h3>
									<p>symptoms:</p>
									<input type="button" class="modal_button" v-on:click="close('mc_diabetes')" value="close">
								</div>
						</b-card>
					</div>
            </div>

            <div class="product" @mouseover="hover_de = true" @mouseleave="hover_de = false">
				<picture>
					<img src="../assets/depression.png" alt= "depression">
				</picture>
				<!--modal-->
				<input type="button" class="modal_button" v-on:click="open('mc_depression')" value="Click for more" v-if="hover_de">
					<div class="modal_container" id="mc_depression">
						<b-card>
								<div class="modal_text">
									<h3>Depression</h3>
									<p>symptoms:</p>
									<input type="button" class="modal_button" v-on:click="close('mc_depression')" value="close">
								</div>
						</b-card>
					</div>
            </div>

            <div class="product" @mouseover="hover_h = true" @mouseleave="hover_h = false">
				<picture>
					<img src="../assets/heart.png" alt= "heart">
				</picture>
				<!--modal-->
				<input type="button" class="modal_button" v-on:click="open('mc_heart')" value="Click for more" v-if="hover_h">
				<!-- <p><b-button class="modal_button" v-on:click="open('mc_heart')" variant="outline-dark" squared>open</b-button></p> -->
					<div class="modal_container" id="mc_heart">
						<b-card>
								<div class="modal_text">
									<h3>Heart Disease</h3>
									<p>symptoms:</p>
									<input type="button" class="modal_button" v-on:click="close('mc_heart')" value="close">
								</div>
								<!-- <b-button class="modal_button" v-on:click="close('mc_heart')" variant="outline-dark" squared>close</b-button> -->
						</b-card>
					</div>
            </div>

		</section>
        </main>


</template>

<script>

export default {
name: "Information",
components: {
},
data() {
	return{
		hover_d: false,
		hover_de: false,
		hover_f: false,
		hover_h: false,
		hover_a: false,
	}

},
methods: {
	open(current_id){
		const modal_container = document.getElementById(current_id);
		modal_container.classList.add('show');
	},
	close(current_id){
		const modal_container = document.getElementById(current_id);
		modal_container.classList.remove('show');
	},
	hovering(){
		const button = document.getElementsByClassName('modal_button');
		button.classList.add('show');
	}
	}
}

</script>

<style>


main{
	width: 100%;
	height: 840px;
	/* background: red; */
	margin: 10px auto;
	position: relative;
	padding: 5px 0;
    margin-top:40vh;
}
main .text{					/* click to find out more */
	padding: 10px;
	text-align: center;
	/* font-size: 30px; */
	color: #554;
}
.text h1{					/* information */
	font-size: 50px;
}

main header{
	width: 98%;
	/* background: gray; */
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 2px solid #ddd;
}
/* header p span{
	font-size: 40px;
	margin: 0 5px;
	cursor: pointer;
	color: #555;
		width: 30px;
	height: 30px;
	display: inline-block;
	line-height: 19px;
	text-align: center;
	border-radius: 3px;
}
header p span:hover{
	background: #222;
	color: white;
} */

section{
	width: 98%;
	height: 600px;
	/*background: red;*/
	margin: auto;
	display: flex;
	align-items: center;
	overflow-x: auto;
	overflow-y:hidden;
}
section::-webkit-scrollbar{
	display:show;
}

.product {
	/* background-color:chocolate; */
	margin-top:0px;
	margin-bottom: 0px;
	margin-left:15px;
	margin-right:15px;
	justify-content: center;
	text-align: center;
	transition: 0.5s;
	/* border: 1px solid black; */

}
.product:hover {
	-ms-transform: scale(1.1); 
    -webkit-transform: scale(1.1); 
    transform: scale(1.1);
	margin-left: 60px;
    margin-right:60px;
} 


img{
	width: 300px;
	height: 300px;
    margin-top: 20px;
    margin-left: 40px;
    margin-right: 40px;
    margin-bottom:20px;
}


.modal_container {
	position:absolute;
	width:100%;
	height:100%;
	top:0;
	left:0;
	background-color: rgba(211, 211, 211, 0.461);
	display:flex;
	align-items: center;
	justify-content: center;
    pointer-events: none;
	opacity:0;
}

.modal {
    margin-top:60vh;
	background-color:black;
	width: 600px;
	max-width:100%;
	text-align: center;
	display:flex;
	align-items: center;
	justify-content: center;
	z-index: 4;
	padding:90px;
	border-radius: 40px;
}

.modal_text {
	padding:50px;
	border: 1px solid black;
}

.modal_container.show {
	pointer-events: auto;
	opacity:1;
	z-index: 1;
}
/* CSS */
.modal_button {
	transition: 0.3s;
	background: #fff;
	border-radius: .375rem;
	border-style: solid;
	border-width: .125rem;
	box-sizing: border-box;
	color: #212121;
	font-family: Circular,Helvetica,sans-serif;
	font-size: 15px;
	padding: 7px 20px;
	transform: translateZ(0) scale(1);
	transition: transform .2s;
	user-select: none;
	-webkit-user-select: none;
	touch-action: manipulation;
}

.modal_button:not(:disabled):hover {
	transform: scale(1.05);
}



</style>