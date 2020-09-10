import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB5Za2n2P15GZlSc1aL9hLcasbXmn1hgLk",
    authDomain: "clone-fa8df.firebaseapp.com",
    databaseURL: "https://clone-fa8df.firebaseio.com",
    projectId: "clone-fa8df",
    storageBucket: "clone-fa8df.appspot.com",
    messagingSenderId: "864488382660",
    appId: "1:864488382660:web:379a9a94d5a8dd3051e991",
    measurementId: "G-Z2PBE2JVBY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };