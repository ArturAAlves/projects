import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./messagesender.scss";
import { useStateValue } from "../../StateProvider";
import firebase from "firebase";
import { db, storage } from "../../firebase";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import SendIcon from "@material-ui/icons/Send";

const MessageSender = (props) => {
	// eslint-disable-next-line no-unused-vars
	const [{ user }, dispach] = useStateValue();
	const [messageInput, setMessageInput] = useState("");
	const [imageToUpload, setImageToUpload] = useState("");
	const [imageLink, setImageLink] = useState("");
	// eslint-disable-next-line no-unused-vars
	const [progress, setProgress] = useState(0);

	const inputChange = (e) => {
		setMessageInput(e.target.value);
	};

	const onFileChange = (e) => {
		if (e.target.files[0]) {
			setImageToUpload(e.target.files[0]);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (messageInput !== "" && messageInput !== null) {
			db.collection("posts").add({
				message: messageInput,
				timestamp: firebase.firestore.FieldValue.serverTimestamp(),
				profilePic: user.photoURL,
				username: user.displayName,
				image: imageLink,
				id: user.email,
				likes: [],
			});
			cleanUp();
		}
	};

	useEffect(() => {
		if (imageToUpload) {
			const uploadTask = storage
				.ref(`images/${imageToUpload.name}`)
				.put(imageToUpload);
			uploadTask.on(
				"state_changed",
				(snapshot) => {
					const progress = Math.round(
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100
					);
					setProgress(progress);
				},
				(error) => {
					console.log(error);
				},
				() => {
					storage
						.ref("images")
						.child(imageToUpload.name)
						.getDownloadURL()
						.then((url) => {
							setImageLink(url);
						});
				}
			);
		}
	}, [imageToUpload]);

	const cleanUp = () => {
		setImageLink((e) => (e = ""));
		setMessageInput((e) => (e = ""));
		setImageToUpload((e) => (e = null));
	};

	return (
		<div className="messagesender">
			<div className="messagesender-top">
				<Avatar src={user.photoURL} alt="zuk" />
				<h4>{user.displayName}</h4>
			</div>

			<div className="messagesender-divider"></div>
			<div className="messagesender-bottom">
				<form onSubmit={handleSubmit}>
					<div className="messagesender-interface-box">
						<input
							type="text"
							placeholder="What are you thinking?"
							onChange={(e) => inputChange(e)}
							value={messageInput}
						/>
						<input type="file" onChange={onFileChange} id="upload" hidden />
						<label for="upload" className="messagesender-uploadButton">
							{/* {imageToUpload ? imageToUpload.name : ""} */}
							<PhotoLibraryIcon />
						</label>
						<button type="submit" className="messagesender-submit">
							<SendIcon />
						</button>
					</div>
					{imageLink ? (
						<div className="messagesender-image-preview">
							<div className="messagesender-divider-sm"></div>

							<img src={imageLink} alt="alt" />
						</div>
					) : (
						""
					)}
				</form>
			</div>
		</div>
	);
};

export default MessageSender;
