// import React from "react";
// import "./login.scss";
// import { auth, googleProvider } from "./firebase";
// import { actionTypes } from "./reducer";
// import { useStateValue } from "./StateProvider";

// const Login = () => {
// 	const [state, dispach] = useStateValue();
// 	const handleSignIn = () => {
// 		auth
// 			.signInWithPopup(googleProvider)
// 			.then((result) => {
// 				dispach({
// 					type: actionTypes.SET_USER,
// 					user: result.user,
// 				});
// 			})

// 			.catch((error) => {
// 				// // Handle Errors here.
// 				// var errorCode = error.code;
// 				// var errorMessage = error.message;
// 				// // The email of the user's account used.
// 				// var email = error.email;
// 				// // The firebase.auth.AuthCredential type that was used.
// 				// var credential = error.credential;
// 				// // ...
// 			});
// 	};

// 	return (
// 		<div className="login">
// 			<button type="submit" onClick={handleSignIn}>
// 				Log in
// 			</button>
// 		</div>
// 	);
// };

// export default Login;
