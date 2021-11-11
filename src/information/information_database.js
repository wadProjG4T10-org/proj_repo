
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import { getDatabase, ref, child, get, onValue} from "https://www.gstatic.com/firebasejs/9.2.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBEHGh-l4Tl7P2ysQgtfD1pV79Zp6dySwU",
    authDomain: "wad2realtime.firebaseapp.com",
    databaseURL: "https://wad2realtime-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "wad2realtime",
    storageBucket: "wad2realtime.appspot.com",
    messagingSenderId: "517809538208",
    appId: "1:517809538208:web:d3f88245d34c767033b5c5",
    measurementId: "G-F1MW65RKME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dbRef = ref(db);

<template> 
    <div>
        <button btn-text="hello"></button>
    </div>
</template>


export default({
    name:"information_database",
    data(){
        return {
            diabetes:"",
            alzheimers:"",
            depression:"",
        }
    },

    created(){
            get(child(dbRef, "diabetes")).then((snapshot) => {
            if (snapshot.exists()) {
                this.diabetes = snapshot.val();
            } else {
                console.log("No data available");
            }
            })
            .catch((error) => {
            console.error(error);
    
        })

    }});

