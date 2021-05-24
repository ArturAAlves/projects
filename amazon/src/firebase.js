// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseKey = process.env.REACT_APP_API_KEY

const firebaseConfig = {
    apiKey: firebaseKey,
    authDomain: "fir-3f7f9.firebaseapp.com",
    projectId: "fir-3f7f9",
    storageBucket: "fir-3f7f9.appspot.com",
    messagingSenderId: "1022643196152",
    appId: "1:1022643196152:web:81f9d924fe819521c32b0d",
    measurementId: "G-K8G6S1XX3F"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth }