<template>
    <h1>Leaderboard</h1>
    <div id="test" class="container"></div>
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
            results: `<table><tr><th>Rank</th><th>Username</th><th>Points Earned</th></tr>`
        }
    },
    created(){
        var count = 0;
        const db = getFirestore();
        const q = query(collection(db, "users"), orderBy("score", "desc"));

        getDocs(q).then((snapshot) => {
            snapshot.forEach((doc) => {
                count ++;
                this.results += `<tr><td>${count}</td><td>${doc.data().name}</td><td>${doc.data().score}</td></tr>`
                console.log(doc.id, "=>", doc.data());
            })
            this.results += `</table>`;
            document.getElementById('test').innerHTML = this.results;
        })
    },
    name: 'Leaderboard',

}
</script>

<style>

</style>