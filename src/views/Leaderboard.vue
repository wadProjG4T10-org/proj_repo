<template>
    <body class="background">
        <h1>Leaderboard</h1>
        <div id="resultsContainer" class="container-fluid"></div>
    </body>
</template>

<script>
import { collection, query, getDocs, getFirestore, orderBy } from "firebase/firestore";

export default {
    beforeCreate() {
        if (window.localStorage.getItem("userInformation") === null) {
            this.$router.push('/login');
        }
    },
    data() {
        return {
            results: `<div class="overallTable container"><div class="row"><div class="rank col">Rank</div><div class="username col">Username</div><div class="pointsEarned col">Points Earned</div></div>`
        }
    },
    created(){
        var count = 0;
        const db = getFirestore();
        const q = query(collection(db, "users"), orderBy("score", "desc"));

        getDocs(q).then((snapshot) => {
            snapshot.forEach((doc) => {
                count ++;
                this.results += `<div class="indivRows row"><div class="col">${count}</div><div class="col">${doc.data().name}</div><div class="col">${doc.data().score}</div></div>`
                // console.log(doc.id, "=>", doc.data());
            })
            this.results += `</div>`;
            document.getElementById('resultsContainer').innerHTML = this.results;
        })
    },
    name: 'Leaderboard',

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
@font-face {
	font-family: myThirdFont;
	src: url('../fonts/ArchitectsDaughter-Regular.ttf');
}
@font-face {
	font-family: myFourthFont;
	src: url('../fonts/RoadRage-Regular.ttf');
}

.background {
	background-image: linear-gradient(to bottom right, #dec2e2, #87affe,#f06ef579);
}

h1 {
    font-family: myFirstFont;
    padding-top:50px;
    padding-bottom:50px;
}

.rank, .username, .pointsEarned {
    font-family: myThirdFont;
    padding:30px;
    font-size:25px;
    font-weight: bold;
    padding-left:30px;
    padding-right:30px;
    /* border:1px black solid; */
}

.overallTable {
    justify-content: center;
    text-align: center;
    align-content: center;
    height:60vh;
    overflow-y:auto;
}
.overallTable::-webkit-scrollbar {
    background-color:transparent;
}
.overallTable::-webkit-scrollbar-thumb {
    border:1px solid black;
    border-radius:20px;
}

.indivRows {
    font-size:30px;
    font-family: mySecondFont;
}

#resultsContainer {
    background-color:rgba(255, 192, 203, 0.29);
    border-radius: 40px;
    padding:40px;
    padding-top:10px;
    /* width:40%; */
    border:1px black solid;
    box-shadow: 10px 10px rgba(128, 128, 128, 0.249);
}

</style>