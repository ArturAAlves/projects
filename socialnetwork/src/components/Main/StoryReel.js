import React, { useEffect, useState } from "react";
import "./storyreel.scss";
import Story from "./Story";
import person1 from "./img/austin.jpg";
import person2 from "./img/hanna.jpg";
import person3 from "./img/jacob.jpg";
import person4 from "./img/rodrigo.jpg";
import background1 from "./img/background1.jpg";
import background2 from "./img/background2.jpg";
import background3 from "./img/background3.jpg";
import background4 from "./img/background4.jpg";

import { useStateValue } from "../../StateProvider";
import AddStory from "./AddStory";
import firebase from "firebase";
import { db, storage } from "../../firebase";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import SendIcon from "@material-ui/icons/Send";
import { Avatar, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const StoryReel = () => {
	// eslint-disable-next-line no-unused-vars
	const [{ user }, dispach] = useStateValue();
	const [storyPopUp, setStoryPopUp] = useState(false);
	const [messageInput, setMessageInput] = useState("");
	const [imageToUpload, setImageToUpload] = useState("");
	const [imageLink, setImageLink] = useState("");
	// eslint-disable-next-line no-unused-vars
	const [progress, setProgress] = useState(0);
	const [stories, setStories] = useState("");

	const handleStoryPopUp = (e) => {
		e.preventDefault();
		// setStoryPopUp((e) => (e = !e));
	};

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
			db.collection("stories").add({
				message: messageInput,
				timestamp: firebase.firestore.FieldValue.serverTimestamp(),
				profilePic: user.photoURL,
				username: user.displayName,
				image: imageLink,
				id: user.email,
			});
			cleanUp();
			setStoryPopUp((e) => (e = !e));
		}
	};

	useEffect(() => {
		if (imageToUpload) {
			const uploadTask = storage
				.ref(`stories/${imageToUpload.name}`)
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
						.ref("stories")
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

	useEffect(() => {
		if (user) {
			db.collection("stories")
				.orderBy("timestamp", "desc")
				.onSnapshot((snapshot) => {
					setStories(
						snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
					);
				});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="storyreel">
			<button onClick={handleStoryPopUp}>
				<AddStory
					className="storyreel-button"
					id="14"
					tittle="Add Story"
					img={background1}
					profileImg={user.photoURL}
				/>
			</button>
			<Story
				id="144"
				message="Sup team?"
				image="https://airows.com/.image/t_share/MTMxODIwNzM0MTMyNzExMzk0/screen-shot-2015-07-24-at-92535-ampng.png"
				profilePic={person1}
			/>
			<Story id="444" message="Hey!" image={background2} profilePic={person2} />
			<Story
				id="1444"
				message="Like it?"
				image={background3}
				profilePic={person3}
			/>
			<Story
				id="144"
				message="Nice!"
				image={background4}
				profilePic={person4}
			/>

			{stories
				? stories.map((story) => (
						<Story
							id={story.id}
							message={story.data.message}
							image={story.data.image}
							profile={story.data.profilePic}
						/>
				  ))
				: ""}

			{storyPopUp ? (
				<div className="storyPopUp">
					<div className="storyPopUpSender">
						<IconButton className="close-button" onClick={handleStoryPopUp}>
							<CloseIcon />
						</IconButton>
						<div className="storyPopUpSender-top">
							<Avatar src={user.photoURL} alt="zuk" />
							<h4>{user.displayName}</h4>
						</div>
						<div className="storyPopUpSender-divider"></div>
						<div className="storyPopUpSender-bottom">
							<form onSubmit={handleSubmit}>
								{imageLink ? (
									<div className="storyPopUpSender-image-preview">
										<div className="storyPopUpSender-divider-sm"></div>

										<img src={imageLink} alt="alt" />
									</div>
								) : (
									""
								)}
								<div className="storyPopUpSender-interface-box">
									<input
										type="text"
										placeholder="what's on your mind?"
										onChange={(e) => inputChange(e)}
										value={messageInput}
									/>
									<input
										type="file"
										onChange={onFileChange}
										id="upload"
										hidden
									/>
									<label for="upload" className="storyPopUpSender-uploadButton">
										{/* {imageToUpload ? imageToUpload.name : ""} */}
										<PhotoLibraryIcon />
									</label>
									<button type="submit" className="storyPopUpSender-submit">
										<SendIcon />
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default StoryReel;
