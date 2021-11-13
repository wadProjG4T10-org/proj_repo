<template>
<html>
	<body>
        <main class="container-fluid">
			<header class="container">
				<div class="col" id="header_text">
					<h1>INFORMATION</h1>
					<p>
						click to find out more information regarding each illness!
					</p>
				</div>
			</header>


			<div class="container-fluid">
				<div class="row">
					<div class="col-lg-3 col-2 col-md-4 navi"><input type='button' class="button" id="leftButton" v-on:click="leftclick()"></div>

						<div class="col-lg-6 col-8 col-md-4 container-fluid">
							<div class="section container-fluid" id="section">

									<div class="product col" @mouseover="hover_a = true" @mouseleave="hover_a = false">
										<picture>
											<img class="productImg" src="../assets/alzheimers.png" alt= "alzheimers">
											<input type="button" class="modal_button open" v-on:click="open('mc_alzheimers')" value="Click for more" v-if="hover_a">
										</picture>
											<div class="modal_container" id="mc_alzheimers">
												<div class="modal_text container-fluid">
													<h1>Alzheimers</h1>
													
													<div class="row">
														<div class="col-lg-3 col-sm-12 col-12 modal_inner">
															<h3>Description: </h3>
														</div>
														<div class="col-lg-9 col-sm-12 col-12">
															<div class="modal_inner_text">{{alzheimers.Description}}</div>
														</div>
													</div>
													
													<div class="row">
														<div class="col-lg-3 col-sm-12 col-12 modal_inner">
														<h3>Local Stats:</h3>
														</div>
														<div class="col-lg-9 col-sm-12 col-12">
															<div class="modal_inner_text">{{alzheimers.LocalStats}}</div>
														</div>
													</div>

													<div class="row">
														<div class="col-lg-3 col-sm-12 col-12 modal_inner">
														<h3>Prevention:</h3> 
														</div>
														<div class="col-lg-9 col-sm-12 col-12">
															<div class="modal_inner_text">{{alzheimers.Prevention}}</div>
														</div>
													</div>

													<div class="row">
														<div class="col-lg-3 col-sm-12 col-12 modal_inner">
														<h3>Symptom Details:</h3>
														</div>
														<div class="col-lg-9 col-sm-12 col-12">
															<div class="modal_inner_text">{{alzheimers.SymptomDetails}}</div>
														</div>
													</div>

													<div class="row">
														<div class="col-lg-3 col-sm-12 col-12 modal_inner">
														<h3>What To Do: </h3>
														</div>
														<div class="col-lg-9 col-sm-12 col-12">
															<div class="modal_inner_text">{{alzheimers.WhatToDo}}</div>
														</div>
													</div>
													<input type="button" class="modal_button" v-on:click="close('mc_alzheimers')" value="close">
												</div>
											</div>
									</div>


									<div class="product col" @mouseover="hover_d = true" @mouseleave="hover_d = false">
										<picture>
											<img class="productImg" src="../assets/diabetes.png" alt= "diabetes">
											<input type="button" class="modal_button open" v-on:click="open('mc_diabetes')" value="Click for more" v-if="hover_d">
										</picture>
											<div class="modal_container" id="mc_diabetes">
												<div class="modal_text container-fluid">
													<h1>Diabetes</h1>
													
													<div class="row">
														<div class="col-lg-3 col-sm-12 col-12 modal_inner">
															<h3>Description: </h3>
														</div>
														<div class="col-lg-9 col-sm-12 col-12">
															<div class="modal_inner_text">{{diabetes.Description}}</div>
														</div>
													</div>
													
													<div class="row">
														<div class="col-lg-3 col-sm-12 col-12 modal_inner">
														<h3>Local Stats:</h3>
														</div>
														<div class="col-lg-9 col-sm-12 col-12">
															<div class="modal_inner_text">{{diabetes.LocalStats}}</div>
														</div>
													</div>

													<div class="row">
														<div class="col-lg-3 col-sm-12 col-12 modal_inner">
														<h3>Prevention:</h3> 
														</div>
														<div class="col-lg-9 col-sm-12 col-12">
															<div class="modal_inner_text">{{diabetes.Prevention}}</div>
														</div>
													</div>

													<div class="row">
														<div class="col-lg-3 col-sm-12 col-12 modal_inner">
														<h3>Symptom Details:</h3>
														</div>
														<div class="col-lg-9 col-sm-12 col-12">
															<div class="modal_inner_text">{{diabetes.SymptomDetails}}</div>
														</div>
													</div>

													<div class="row">
														<div class="col-lg-3 col-sm-12 col-12 modal_inner">
														<h3>What To Do: </h3>
														</div>
														<div class="col-lg-9 col-sm-12 col-12">
															<div class="modal_inner_text">{{diabetes.WhatToDo}}</div>
														</div>
													</div>
													<input type="button" class="modal_button" v-on:click="close('mc_diabetes')" value="close">
												</div>
											</div>
									</div>

									<div class="product col" @mouseover="hover_de = true" @mouseleave="hover_de = false">
										<picture>
											<img class="productImg" src="../assets/depression.png" alt= "depression">
											<input type="button" class="modal_button open" v-on:click="open('mc_depression')" value="Click for more" v-if="hover_de">
										</picture>
											<div class="modal_container" id="mc_depression">
												<div class="modal_text container-fluid">
													<h1>Depression</h1>
													
													<div class="row">
														<div class="col-lg-3 col-sm-12 col-12 modal_inner">
															<h3>Description: </h3>
														</div>
														<div class="col-lg-9 col-sm-12 col-12">
															<div class="modal_inner_text">{{depression.Description}}</div>
														</div>
													</div>
													
													<div class="row">
														<div class="col-lg-3 col-sm-12 col-12 modal_inner">
														<h3>Local Stats:</h3>
														</div>
														<div class="col-lg-9 col-sm-12 col-12">
															<div class="modal_inner_text">{{depression.LocalStats}}</div>
														</div>
													</div>

													<div class="row">
														<div class="col-lg-3 col-sm-12 col-12 modal_inner">
														<h3>Methods To Cope:</h3> 
														</div>
														<div class="col-lg-9 col-sm-12 col-12">
															<div class="modal_inner_text">{{depression.MethodsToCope}}</div>
														</div>
													</div>

													<div class="row">
														<div class="col-lg-3 col-sm-12 col-12 modal_inner">
														<h3>Symptoms:</h3>
														</div>
														<div class="col-lg-9 col-sm-12 col-12">
															<div class="modal_inner_text">{{depression.Symptoms}}</div>
														</div>
													</div>

													<div class="row">
														<div class="col-lg-3 col-sm-12 col-12 modal_inner">
														<h3>What To Do: </h3>
														</div>
														<div class="col-lg-9 col-sm-12 col-12">
															<div class="modal_inner_text">{{depression.WhatToDo}}</div>
														</div>
													</div>
													<input type="button" class="modal_button" v-on:click="close('mc_depression')" value="close">
												</div>
											</div>
									</div>
							</div>
						</div> 
					<div class="col-lg-3 col-2 col-md-4 navi"><input type='button' class="button container col" id="rightButton" v-on:click="rightclick()"></div>
				</div>
			</div>
        </main>
	</body>
</html>

</template>

<script>
import { doc, getDoc, getFirestore } from "firebase/firestore";

export default {
name: "Information",
beforeCreate() {
	if (window.localStorage.getItem("userInformation") === null) {
		this.$router.push('/login');
	}
},
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

		alzheimers:[],
		diabetes:[],
		depression:[],
	}

},
methods: {
	open(current_id){
		const modal_container = document.getElementById(current_id);
		modal_container.classList.add('show');

		// console.log("open");
		const db = getFirestore();
		if(current_id === "mc_alzheimers"){
			var alzhRef = doc(db, "informationDashboard", 'Alzheimers Disease')
			getDoc(alzhRef).then((snapshot) => {
				// console.log(snapshot.data());
				this.alzheimers = snapshot.data();
			})
		}
		else if (current_id === "mc_diabetes"){
			var diabetesRef = doc(db, "informationDashboard", 'Diabetes')
			getDoc(diabetesRef).then((snapshot) => {
				// console.log(snapshot.data());
				this.diabetes = snapshot.data();
			})
		}
		else {
			var depressionRef = doc(db, "informationDashboard", 'Depression')
			getDoc(depressionRef).then((snapshot) => {
				// console.log(snapshot.data());
				this.depression = snapshot.data();
			})
		}
	},
	close(current_id){
		const modal_container = document.getElementById(current_id);
		modal_container.classList.remove('show');

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
@font-face {
	font-family: myFirstFont;
	src: url('../fonts/PressStart2P-Regular.ttf');
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
	font-size:7vw;
	font-family:mySecondFont;
}

.modal_inner h3{ 
	font-weight: bold;
}
.section{
	/* background: purple; */
	display: flex;
	align-items: center;
	padding-left:0%;
	overflow-x: auto;
	scroll-behavior: smooth; 
	position: relative;
	height:100%;
	width:100%;
}

.section::-webkit-scrollbar {
	display:none;
}

picture {
	display:flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	position: relative;
}

.product {
	/* background-color:chocolate; */
	justify-content: center;
	text-align: center;
	align-items: center;
	padding: 10%;
	transition: 0.5s;
}
.product:hover {
	margin-left: 60px;
    margin-right:60px;
} 

.productImg{
	align-self: center;
	width: 250px;
	/* background-color:orange; */
	/* height: 300px; */
    /* margin-top: 20px; */
    margin-left: 40px;
    margin-right: 40px;
    margin-bottom:20px;
	z-index:0;
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
    z-index: 990;
	pointer-events: auto;
	opacity:1;
}


.modal_text {
	padding-top:40px;
	padding-bottom:40px;
	border-radius:20px;
	background-image: linear-gradient(to bottom right, #d1cef2, #9cadce,#d4afb9);
	overflow:auto;
	max-width:90vw;
	max-height:80vh;
	margin-top:10vh;
	z-index:991;
}

.modal_text h1{
	font-weight: bold;
	font-size:90px;
    font-family: mySecondFont; 
}

.modal_inner{
	display:flex;
	align-content: center;
	text-align: center;
	justify-content: center;
	padding-top:4%;
	font-weight:bold;
}

.modal_inner h3{
	font-weight: bold;
}

.modal_text::-webkit-scrollbar {
	width: 20px;
	background-color:transparent;
	border-radius:20px;
	position:relative;
}


.modal_text::-webkit-scrollbar-thumb {
	border-radius:20px;
	/* background: linear-gradient(to bottom, rgba(86, 86, 147, 0.619), rgb(222, 199, 222)); */
	border:1px solid grey;
	background:transparent;
}


.modal_inner_text {
	background-color:rgba(216, 191, 216, 0.475);
	border-radius: 20px;
	padding: 20px;
	margin:20px;
}


.modal_button {
	transition: 0.3s;
	background: rgba(255, 255, 255, 0.728);
	border-radius:20px;
	border-style: solid;
	box-sizing: border-box;
	color: #212121;
	font-family: mySecondFont;
	font-weight: bold;
	font-size: 20px;
	padding: 7px 20px;
	transform: translateZ(0) scale(1);
	transition: transform .2s;
	user-select: none;
	-webkit-user-select: none;
	touch-action: manipulation;
	margin:40px;
}

.modal_button:hover, .modal_button:active{
	background-color:#d4afb9;
	border:#cd9ba8;
	color:white;
	transform: scale(1.3);
}



#rightButton{
	position:absolute;
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
	background-image: url('../assets/left.png');
	background-repeat:  no-repeat;
	border: none;
	background-color: Transparent;
	background-size:100px;
	width:104px;
	height:100px;
}

.navi {
	justify-content: center;
	display:flex;
	align-content: center;
	align-items: center;
	text-align: center;
}
.button:active, .button:hover{
	transform: scale(1.1);
	outline:none;
	box-shadow: none;
} 



</style>