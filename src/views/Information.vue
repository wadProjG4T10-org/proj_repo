<template>
<html>
	<body>
        <main class="container-fluid">
			<header class="container">
				<div class="row" id="header_text">
					<h1>INFORMATION</h1>
					<p>
						click to find out more information regarding each illness!
					</p>
				</div>
			</header>


			<div>
				<input type='button' class="button" id="rightButton" v-on:click="rightclick()">
				<input type='button' class="button" id="leftButton" v-on:click="leftclick()">
			</div>
				<div class="section" id="section">
					<div class="product" @mouseover="hover_a = true" @mouseleave="hover_a = false">
						<picture>
							<img class="productImg" src="../assets/alzheimers.png" alt= "alzheimers">
							<input type="button" class="modal_button open" v-on:click="open('mc_alzheimers')" value="Click for more" v-if="hover_a">

						</picture>
							<div class="modal_container" id="mc_alzheimers">
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
							<img class="productImg" src="../assets/falls.png" alt= "falls">
							<input type="button" class="modal_button open" v-on:click="open('mc_falls')" value="Click for more" v-if="hover_f">
						</picture>
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
							<img class="productImg" src="../assets/diabetes.png" alt= "diabetes">
							<input type="button" class="modal_button open" v-on:click="open('mc_diabetes')" value="Click for more" v-if="hover_d">
						</picture>
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
							<img class="productImg" src="../assets/depression.png" alt= "depression">
							<input type="button" class="modal_button open" v-on:click="open('mc_depression')" value="Click for more" v-if="hover_de">
						</picture>
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
							<img class="productImg" src="../assets/heart.png" alt= "heart">
							<input type="button" class="modal_button open" v-on:click="open('mc_heart')" value="Click for more" v-if="hover_h">
						</picture>
							<div class="modal_container" id="mc_heart">
								<b-card>
										<div class="modal_text">
											<h3>Heart Disease</h3>
											<p>symptoms:</p>
											<input type="button" class="modal_button" v-on:click="close('mc_heart')" value="close">
										</div>
								</b-card>
							</div>
					</div>
				</div>
        </main>
	</body>
</html>

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
		present: false,
	}

},
methods: {
	open(current_id){
		const modal_container = document.getElementById(current_id);
		modal_container.classList.add('show');
		const section = document.getElementById('section');
		section.classList.add('hide');
	},
	close(current_id){
		const modal_container = document.getElementById(current_id);
		modal_container.classList.remove('show');
		const section = document.getElementById('section');
		section.classList.add('hide');
	},
	hovering(){
		const button = document.getElementsByClassName('modal_button');
		button.classList.add('show');
	},
	rightclick(){
		document.getElementById('section').scrollLeft += 200;
	},
	leftclick(){
		document.getElementById('section').scrollLeft -= 200;
	}
	}
}

</script>

<style>
@font-face {
    font-family: mySecondFont;
    src: url('../fonts/IndieFlower-Regular.ttf');
}

html, body {
	margin:0px;
	height:100vh;
}

main{
	font-family: mySecondFont;
	background-image: linear-gradient(to bottom right, #d1cef2, #9cadce,#d4afb9);
	position: relative;
	width:100vw;
	height:100vh;
}

header{		
	display:flex;
	align-content: center;		
	justify-content: center;
	text-align: center;
	color: #554;
	z-index:0;
	font-weight:bold;
	padding-top:40px;
	/* background-color:red; */
}
header h1{
	font-size:100px;
}

.section{
	/* background: purple; */
	display: flex;
	align-items: center;
	overflow-x: auto;
	scroll-behavior: smooth; 
	position: relative;
	height:70%;
	width:100%;
	margin-left:0px;
	margin-right:0px;
	padding-left: 100px;
	padding-right: 100px;
}

.section::-webkit-scrollbar {
	display:none;
}


.product {
	/* background-color:chocolate; */
	margin-top:0px;
	margin-bottom: 0px;
	margin-left:15px;
	margin-right:15px;
	justify-content: center;
	text-align: center;
	align-items: center;
	padding: 40px;
	transition: 0.5s;
}
.product:hover {
	margin-left: 60px;
    margin-right:60px;
} 

.productImg{
	align-self: center;
	width: 250px;
	/* height: 300px; */
    /* margin-top: 20px; */
    margin-left: 40px;
    margin-right: 40px;
    margin-bottom:20px;
	z-index:0;
}
picture {
	display:flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	position: relative;
}

.modal_button.open{
	position: absolute;
	background-color: white;
	border: 1px solid black;
	color: black;
	font-size: 16px;
	padding: 12px 24px;
	border: none;
	cursor: pointer;
	border-radius: 20px;
	font-weight: bold;
	font-family: mySecondFont;
}

.modal_button.open:hover, .modal_button.open:active{
	background-color:#d4afb9;
	color:white;
}

.modal_container {
	position:fixed;
	width:100vw;
	height:100%;
	top:0;
	left:0;
	background-color:rgba(128, 128, 128, 0.598);
	display:flex;
	align-items: center;
	justify-content: center;
    pointer-events: none;
	opacity:0;
}

.modal_container.show {
    z-index: 998;
	pointer-events: auto;
	opacity:1;
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
	z-index: 999;
	padding:90px;
	border-radius: 40px;
}


.modal_text {
	padding:50px;
	border: 1px solid black;
}

.section.hide {
	display: hidden;
}


.modal_button {
	transition: 0.3s;
	background: #fff;
	border-radius:20px;
	border-style: solid;
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

.modal_button:hover, .modal_button.open:active{
	background-color:#d4afb9;
	border:#cd9ba8;
	color:white;
}

.modal_button:not(:disabled):hover {
	transform: scale(1.05);
}

#rightButton{
	position:absolute;
	right:40px;
	top:55%;
	z-index:100;
	background-image: url("../assets/right.png");
	background-repeat:  no-repeat;
	background-color: Transparent;
	border: none;
	background-size:100px;
	width:104px;
	height:100px;
}

#leftButton{
	position:absolute;
	left:40px;
	top:55%;
	z-index:100;
	background-image: url('../assets/left.png');
	background-repeat:  no-repeat;
	border: none;
	background-color: Transparent;
	background-size:100px;
	width:104px;
	height:100px;
}

.button:active, .button:hover{
	transform: scale(1.1);
	outline:none;
	box-shadow: none;
} 


</style>