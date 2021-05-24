import React, { useState } from "react";
import "./login.scss";
import { auth, googleProvider } from "../../firebase";
import { useStateValue } from "../../StateProvider";
// eslint-disable-next-line no-unused-vars
import { Link, useHistory } from "react-router-dom";
import google from "./img/googlesigin.png";

const Login = () => {
	// const history = useHistory();
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setpassword] = useState("");
	// eslint-disable-next-line no-unused-vars
	const [state, dispatch] = useStateValue();

	const signIn = (e) => {
		e.preventDefault();
		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				dispatch({
					type: "SET_USER",
					user: auth.user,
				});
				if (auth) {
					history.push("/");
				}
			})
			.catch((error) => alert(error.message));
	};

	const register = (e) => {
		e.preventDefault();
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				dispatch({
					type: "SET_USER",
					user: auth.user,
				});
				if (auth) {
					history.push("/");
				}
			})
			.catch((error) => alert(error.message));
	};

	const handleSignIn = () => {
		auth
			.signInWithPopup(googleProvider)
			.then((result) => {
				// console.log("login", result);
				dispatch({
					type: "SET_USER",
					user: result.user,
				});
			})

			.catch((error) => {
				// // Handle Errors here.
				// var errorCode = error.code;
				// var errorMessage = error.message;
				// // The email of the user's account used.
				// var email = error.email;
				// // The firebase.auth.AuthCredential type that was used.
				// var credential = error.credential;
				// // ...
			});
	};

	// console.log(email, password)

	return (
		<div className="login">
			<div className="login-form">
				<h1>Sign-In</h1>
				{/* <form className="login-form-container">
					<h5>Email</h5>
					<input
						type="text"
						placeholder="Enter your Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						disabled
					/>
					<h5>password</h5>
					<input
						type="password"
						placeholder="password"
						value={password}
						onChange={(e) => setpassword(e.target.value)}
						disabled
					/>
					<button type="button" onClick={signIn} disabled>
						Sign In
					</button>
				</form> */}
			</div>
			<div className="login-bar"></div>
			<div className="login-google">
				<button type="submit" onClick={handleSignIn} className="google-submit">
					<img src={google} alt="google" className="google-sign-in" />
				</button>
			</div>
			{/* <div className="login-bar">
				<p>New to SocialNetwork?</p>
			</div>
			<div className="login-createAcc">
				<button type="button" onClick={register}>
					Create New Acc
				</button>
			</div> */}
		</div>
	);
};

export default Login;
