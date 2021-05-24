import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Widgets from "./components/Widgets/Widgets";
import WidgetsMobile from "./components/Widgets/WidgetsMobile";
import Login from "./components/Login/Login";
import "./app.scss";
import { useStateValue } from "./StateProvider";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import { db } from "./firebase";
import firebase from "firebase";

function App() {
	const [{ user, profileAuth }, dispatch] = useStateValue();
	const [profile, setProfile] = useState("");
	const [checked, setChecked] = useState(0);

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (user && checked <= 2) {
			db.collection("profile")
				.orderBy("timestamp", "desc")
				.onSnapshot((snapshot) => {
					setProfile(
						snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
					);
				});
		}

		if (profile && user && checked <= 2) {
			let searchUser = profile.filter((user) => {
				return user.email === user.id;
			});
			// console.log("searchUser", searchUser);
			if (searchUser.length === 0) {
				db.collection("profile").add({
					timestamp: firebase.firestore.FieldValue.serverTimestamp(),
					profilePic: user.photoURL ? user.photoURL : "",
					username: user.displayName ? user.displayName : "",
					id: user.email,
				});
				dispatch({
					type: "SET_PROFILE",
					user: profile,
				});
			}
		}
		if (checked <= 2) {
			setChecked((e) => (e = e + 1));
		}
		// console.log("profileAuth", profileAuth);
	}, [profile]);

	// console.log(profile);
	return (
		<Router>
			<Switch>
				<Route path="/profile">
					<Profile />
				</Route>

				<Route path="/feed">
					<div className="app">
						{!user ? (
							<Login />
						) : (
							<>
								<Header />
								<div className="app-body">
									<WidgetsMobile />
								</div>
							</>
						)}
					</div>
				</Route>
				<Route path="/">
					<div className="app">
						{!user ? (
							<Login />
						) : (
							<>
								<Header />
								<div className="app-body">
									<Widgets />
									<Main />
									<Sidebar />
								</div>
							</>
						)}
					</div>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
