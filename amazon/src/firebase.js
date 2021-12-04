import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDw3roWoFq7D4qp3_R1CGZbGlxpxbR5_2w",
    authDomain: "fir-800ef.firebaseapp.com",
    projectId: "fir-800ef",
    storageBucket: "fir-800ef.appspot.com",
    messagingSenderId: "773272601820",
    appId: "1:773272601820:web:7955bf9ebd7881ed1de019"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };