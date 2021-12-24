import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

// const firebaseConfig = {
//     apiKey: "AIzaSyDw3roWoFq7D4qp3_R1CGZbGlxpxbR5_2w",
//     authDomain: "fir-800ef.firebaseapp.com",
//     projectId: "fir-800ef",
//     storageBucket: "fir-800ef.appspot.com",
//     messagingSenderId: "773272601820",
//     appId: "1:773272601820:web:7955bf9ebd7881ed1de019"
// };
const firebaseConfig = {
    apiKey: "AIzaSyCagYAV0V2rD1KDgBQrWp_0rC42i5S7vII",
    authDomain: "fir-4fa20.firebaseapp.com",
    projectId: "fir-4fa20",
    storageBucket: "fir-4fa20.appspot.com",
    messagingSenderId: "215464735698",
    appId: "1:215464735698:web:3ff3b5e8f02aed49890e0b",
    measurementId: "G-Y82CL95KK6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };