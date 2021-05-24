import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [hiddenPw, sethiddenPw] = useState(true);
	const handleSubmit = async (e) => {
		e.preventDefault();
		const authObject = {
			"Project-ID": process.env.REACT_APP_API_KEY,
			"User-Name": username,
			"User-Secret": password,
		};
		try {
			await axios.get("https://api.chatengine.io/chats", {
				headers: authObject,
			});
			localStorage.setItem("username", username);
			localStorage.setItem("password", password);
			window.location.reload();
		} catch (error) {
			setError("Ooops, Dados Incorretos");
		}
	};

	return (
		<div className="wrapper">
			<div className="form">
				<h1 className="title">Chat Application</h1>
				<form onSubmit={handleSubmit}>
					<input
						className="input"
						type="text"
						value={username}
						onChange={(e) =>
							setUsername((currentSt) => (currentSt = e.target.value))
						}
						placeholder="Ruan Pepe "
					/>
					<input
						className="input"
						type={hiddenPw ? "password" : "text"}
						onChange={(e) =>
							setPassword((currentSt) => (currentSt = e.target.value))
						}
						value={password}
						//  [...password].map((e) => e).join("")
					/>
					<button
						className="button-eye"
						type="button"
						onClick={() => sethiddenPw((currentST) => (currentST = !hiddenPw))}>
						👁‍🗨
					</button>
					<div align="center">
						<button type="submit" className="button">
							<span>Start Chatting</span>
						</button>
					</div>
					<h2 align="center">{error}</h2>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
