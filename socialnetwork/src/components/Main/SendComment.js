import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import SendIcon from "@material-ui/icons/Send";
import "./sendcomment.scss";
import { db } from "../../firebase";
import firebase from "firebase";
import { useStateValue } from "../../StateProvider";
import "./sendcomment.scss";

const SendComment = (id) => {
	const [messageInput, setMessageInput] = useState("");
	const [{ user }, dispach] = useStateValue();

	const handleChange = (e) => {
		setMessageInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (messageInput !== "" && messageInput !== null) {
			db.collection("comments").add({
				responseTo: id,
				message: messageInput,
				timestamp: firebase.firestore.FieldValue.serverTimestamp(),
				profilePic: user.photoURL,
				username: user.displayName,
				usernameID: user.email,
				image:
					"https://images.newscientist.com/wp-content/uploads/2021/03/04154355/04-march_frog-lungs.jpg",
			});
		}
		setMessageInput("");
	};

	return (
		<div className="post-reply">
			<Avatar
				style={{ margin: "0 0 0 15px" }}
				alt={user.displayName}
				src={user.photoURL}
			/>
			<div className="post-reply-input">
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Write a commenent..."
						value={messageInput}
						onChange={handleChange}
					/>
					<button type="submit" className="messagesender-submit">
						<SendIcon />
					</button>
				</form>
			</div>
		</div>
	);
};

export default SendComment;
