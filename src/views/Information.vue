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

		
            <div class="product">
				<picture>
					<img src="../assets/alzheimers.png" alt= "alzheimers">
				</picture>
				<p><b-button class="open" v-on:click="open('mc_alzheimers')">open</b-button></p>
					<div class="modal_container" id="mc_alzheimers">
						<b-card>
								<p>alzheimers</p>
								<b-button class="class" v-on:click="close('mc_alzheimers')">close</b-button>
						</b-card>
					</div>
            </div>
			
            <div class="product">
				<picture>
					<img src="../assets/falls.png" alt= "falls">
				</picture>
				<!--modal-->
				<p><b-button class="open" v-on:click="open('mc_falls')">open</b-button></p>
					<div class="modal_container" id="mc_falls">
						<b-card>
								<p>falls</p>
								<b-button class="class" v-on:click="close('mc_falls')">close</b-button>
						</b-card>
					</div>
            </div>

            <div class="product">
				<picture>
					<img src="../assets/diabetes.png" alt= "diabetes">
				</picture>
				<!--modal-->
				<p><b-button class="open" v-on:click="open('mc_diabetes')">open</b-button></p>
					<div class="modal_container" id="mc_diabetes">
						<b-card>
								<p>diabetes</p>
								<b-button class="class" v-on:click="close('mc_diabetes')">close</b-button>
						</b-card>
					</div>
            </div>

            <div class="product">
				<picture>
					<img src="../assets/depression.png" alt= "depression">
				</picture>
				<!--modal-->
				<p><b-button class="open" v-on:click="open('mc_depression')">open</b-button></p>
					<div class="modal_container" id="mc_depression">
						<b-card>
								<p>depression</p>
								<b-button class="class" v-on:click="close('mc_depression')">close</b-button>
						</b-card>
					</div>
            </div>

            <div class="product">
				<picture>
					<img src="../assets/heart.png" alt= "heart">
				</picture>
				<!--modal-->
				<p><b-button class="open" v-on:click="open('mc_heart')">open</b-button></p>
					<div class="modal_container" id="mc_heart">
						<b-card>
								<p>heart</p>
								<b-button class="class" v-on:click="close('mc_heart')">close</b-button>
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
		illnesses:{
			heart:{
				name:"heart",
				img:"../assets/heart.png"
			},
			falls:{
				name:"falls",
				img:"../assets/falls.png"
			},
			alzheimers:{
				name:"alzheimers",
				img:"../assets/alzheimers.png"
			},
			diabetes:{
				name:"diabetes",
				img:"../assets/diabetes.png"
			},
			depression:{
				name:"depression",
				img:"../assets/depression.png"
			}
		}

	}

},
methods: {
	open(current_id){
		const modal_container = document.getElementById(current_id);
		console.log(current_id);
		modal_container.classList.add('show');
	},
	close(current_id){
		const modal_container = document.getElementById(current_id);
		modal_container.classList.remove('show');
	}
}
}

</script>

<style>


main{
	width: 100%;
	height: 840px;
	/*background: red;*/
	margin: 10px auto;
	position: relative;
	padding: 5px 0;
    margin-top:40vh;
}
main .text{
	padding: 10px;
	text-align: center;
	/*font-size: 30px;*/
	color: #554;
}
.text h1{
	font-size: 50px;
}
.text p{
	width: 60%;
	padding: 5px;
	margin: auto;
	line-height: 30px;
}
main header{
	width: 98%;
	height: 60px;
	margin: 0 auto;
	/*background: gray;*/
	display: flex;
	align-items: center;
	padding: 20px;
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
}
section::-webkit-scrollbar{
	display:show;
}

.product {
	/* background-color:chocolate; */
	margin: 10px;
	justify-content: center;
	text-align: center;
	transition: 0.5s;
	/* border: 1px solid black; */

}
/* .product:hover {
	-ms-transform: scale(1.4); 
    -webkit-transform: scale(1.4); 
    transform: scale(1.4);
	margin-left: 60px;
    margin-right:60px;
}  */
img{
	width: 300px;
	height: 300px;
    margin-top: 20px;
    margin-left: 40px;
    margin-right: 40px;
    margin-bottom:20px;
}

b-button {
	border:0;
	border-radius: 5px;
	box-shadow: 0 2px 4px rgba(0,0,0,0.2);
	color: black;
	font-weight: bold;
	font-size:14px;
	padding:6px 19px;
	margin: 20px;
	border: 1px solid black;
}

.modal_container {
	position:fixed;
	top:0;
	left:0;
	height: 100%;
	width: 100%;
	background-color:rgba(255, 166, 0, 0.372);
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
	padding:30px;
	text-align: center;
	display:flex;
	align-items: center;
	justify-content: center;
	z-index: 4;
}

.modal_container.show {
	pointer-events: auto;
	opacity:1;
	z-index: 1;
}

</style>