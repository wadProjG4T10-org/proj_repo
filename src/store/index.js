import { reactive } from 'vue'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore";

// create object to store state and make it reactive
const state = reactive({
    userEmail: "Guganesh",
})


const methods = {
    onLogin() {
        const provider = new GoogleAuthProvider();
    
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
            // The signed-in user info.
            const user = result;
            var userCreation = user.user.metadata.createdAt;
            var userLastLogin = user.user.metadata.lastLoginAt;
            state.userEmail = user.user.email;
    
            const db = getFirestore();
    
            if (userCreation === userLastLogin) {
                setDoc(doc(db, "users", state.userEmail), ({
                score: 0
                }));
            }
    
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
        
                console.log(errorCode);
                console.log(errorMessage);
                console.log(email);
                });
    },
}

    
// we need to export this state object
export default {
    state,
    methods,
}

// now we want this to be available everywhere on our app -> so import
// into root vue component (App.vue) and use provide() to make it available to all of
// App.vue's child components

