<template>
    <body class="background">
        <h1>Leaderboard</h1>
        <div id="test" class="container"></div>
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
            results: `<table class="overallTable"><tr><th class="rank">Rank</th><th class="username">Username</th><th class="pointsEarned">Points Earned</th></tr>`
        }
    },
    created(){
        var count = 0;
        const db = getFirestore();
        const q = query(collection(db, "users"), orderBy("score", "desc"));

        getDocs(q).then((snapshot) => {
            snapshot.forEach((doc) => {
                count ++;
                this.results += `<tr><td class="count">${count}</td><td class="name">${doc.data().name}</td><td class="score">${doc.data().score}</td></tr>`
                // console.log(doc.id, "=>", doc.data());
            })
            this.results += `</table>`;
            document.getElementById('test').innerHTML = this.results;
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

.background {
	background-image: linear-gradient(to bottom right, #dec2e2, #87affe,#f06ef579);
}

h1 {
    font-family: myFirstFont;
    padding-top:50px;
}

.rank, .username, .pointsEarned {
    font-family: mySecondFont;
    padding:30px;
    font-size:20px;
    /* border:1px black solid; */
}

.count, .name, .score {
    font-family: myThirdFont;
    font-size:20px;
}

.overallTable {
    display:flex;
    justify-content: center;
    text-align: center;
    align-content: center;
    /* background-color:pink; */
}
</style>