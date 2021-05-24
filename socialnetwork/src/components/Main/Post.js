import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./post.scss";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import { db } from "../../firebase";
import SendComment from "./SendComment";
import CommentFeed from "./CommentFeed";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { useStateValue } from "../../StateProvider";
// import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
// import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
// import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";

const Post = ({
	image,
	message,
	profilePic,
	timestamp,
	username,
	id,
	email,
	likes,
}) => {
	// eslint-disable-next-line no-unused-vars
	const [{ user }, dispach] = useStateValue();
	const [youLike, setYouLike] = useState([]);
	const [hideConversation, setHideConversation] = useState(false);
	const [comments, setComments] = useState([]);
	const [commentFeed, setCommentFeed] = useState([]);

	const handleDelete = (e) => {
		e.preventDefault();
		db.collection("posts", "desc")
			.doc(id)
			.delete()
			.then(() => {
				console.log("Document successfully deleted!");
			})
			.catch((error) => {
				console.error("Error removing document: ", error);
			});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let testeLike = likes.filter((item) => {
			return item === user.email;
		});

		const postLikes = db.collection("posts").doc(id);
		if (testeLike.length > 0) {
			setYouLike((e) => (e = []));
			let removeLike = likes.filter((item) => {
				return item !== user.email;
			});
			return postLikes.update({
				likes: removeLike,
			});
		} else {
			setYouLike((e) => (e = [testeLike]));
			return postLikes.update({
				likes: [...likes, user.email],
			});
		}
	};

	const handleComment = () => {
		if (commentFeed.length > 0) {
			setHideConversation((e) => (e = !e));
		}
	};

	useEffect(() => {
		if (user) {
			let testeLike = likes.filter((item) => {
				return item === user.email;
			});
			setYouLike((e) => (e = testeLike));
			db.collection("comments")
				.orderBy("timestamp")
				.onSnapshot((snapshot) => {
					setComments(
						snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
					);
				});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (user && comments) {
			let result = comments.filter((item) =>
				id === item.data.responseTo.id ? item : ""
			);
			setCommentFeed(result);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [comments]);

	return (
		<div className="post">
			<div className="post-user">
				<Avatar src={profilePic} alt={username} />
				<div>
					<h4> {username}</h4>
					<p className="post-data">
						{new Date(timestamp?.toDate()).toUTCString()}
					</p>
				</div>
				{user.email === email ? (
					<div className="post-user-delete">
						<button onClick={handleDelete}>
							<DeleteOutlineIcon />
						</button>
					</div>
				) : (
					""
				)}
			</div>
			<div className="post-text">
				<p>{message}</p>
			</div>
			{image ? (
				<div className="post-img">
					<img src={image} alt={message} />
				</div>
			) : (
				""
			)}
			<div className="post-reaction-container">
				<div className="post-reaction-left">
					{likes.length !== 0 ? (
						<div className="post-reaction">
							<p>{likes.length}</p>
							<p className="post-reaction-like">👍</p>
						</div>
					) : (
						""
					)}
					{youLike.length !== 0 ? (
						<p className="post-reaction-youLiked">You liked</p>
					) : (
						""
					)}
				</div>

				<div className="post-reaction-right">
					{commentFeed.length >= 1 ? <p>{commentFeed.length} comments</p> : ""}
				</div>
			</div>
			<div className="post-divider-1"></div>
			<div className="post-actions">
				<button onClick={handleSubmit} className="post-action-like">
					<ThumbUpIcon />
				</button>

				<button className="post-action-comment" onClick={handleComment}>
					<ChatBubbleOutlineIcon />
				</button>
				{/* <div className="post-action-share">
					2:36
					<SendIcon />
				</div> */}
			</div>

			{/* hide without comments */}
			<div className="post-divider-2"></div>
			{!hideConversation ? (
				<div>
					<CommentFeed id={id} />
				</div>
			) : (
				""
			)}

			<SendComment id={id} />
		</div>
	);
};

export default Post;
