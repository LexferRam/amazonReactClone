import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC-qhY1mKORCWuX5zoQDvJERHyFDMDWS1g",
    authDomain: "clone-f0b59.firebaseapp.com",
    databaseURL: "https://clone-f0b59.firebaseio.com",
    projectId: "clone-f0b59",
    storageBucket: "clone-f0b59.appspot.com",
    messagingSenderId: "814504377709",
    appId: "1:814504377709:web:cc9a2aa78a1f7c8e38ae64",
    measurementId: "G-ZY9FYY2VHM"
}) ;

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};

//copiar el bloque de codigo en la consola de firebase e instalar: npm i firebase