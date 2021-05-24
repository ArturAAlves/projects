// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
import "firebase/firebase";
import "firebase/auth";

// const firebaseKey = process.env.REACT_APP_API_KEY;

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
	appId: process.env.REACT_APP_FIREBASE_APPID,
	measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT,
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleProvider, storage, db, firebase as default };
// // export default db;

// gs://socialnetwork-e14ac.appspot.com/

// function setPersistenceNone() {
// 	// [START auth_set_persistence_none]
// 	firebase
// 		.auth()
// 		.setPersistence(firebase.auth.Auth.Persistence.NONE)
// 		.then(() => {
// 			var provider = new firebase.auth.GoogleAuthProvider();
// 			// In memory persistence will be applied to the signed in Google user
// 			// even though the persistence was set to 'none' and a page redirect
// 			// occurred.
// 			return firebase.auth().signInWithRedirect(provider);
// 		})
// 		.catch((error) => {
// 			// Handle Errors here.
// 			var errorCode = error.code;
// 			var errorMessage = error.message;
// 		});
// 	// [END auth_set_persistence_none]
// }
