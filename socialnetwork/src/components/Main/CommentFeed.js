import React, { useEffect, useState } from "react";
import "./commentfeed.scss";
import { db } from "../../firebase";
import { useStateValue } from "../../StateProvider";
import { Avatar } from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const CommentFeed = ({ id }) => {
	const [{ user }, dispach] = useStateValue();
	const [comments, setComments] = useState(null);
	const [commentFeed, setCommentFeed] = useState(null);

	useEffect(() => {
		if (user) {
			db.collection("comments")
				.orderBy("timestamp")
				.onSnapshot((snapshot) => {
					setComments(
						snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
					);
				});
		}
	}, []);

	useEffect(() => {
		if (user && comments) {
			let result = comments.filter((item) =>
				id === item.data.responseTo.id ? item : ""
			);
			setCommentFeed(result);
		}
	}, [comments]);

	const handleDelete = (item) => {
		db.collection("comments")
			.doc(item)
			.delete()
			.then(() => {
				console.log("Document successfully deleted!");
			})
			.catch((error) => {
				console.error("Error removing document: ", error);
			});
	};

	// TAtyDL9kl4FgZ6TjQFCw;
	return (
		<div className="commentFeed">
			{commentFeed
				? commentFeed.map((item) => (
						<div className="comment" key={item.id}>
							<div className="comment-avatar">
								<Avatar src={item.data.profilePic} alt={item.data.username} />
							</div>
							<div className="comment-info">
								<div className="comment-reply">
									<div className="comment-reply-message-container">
										<div className="comment-reply-message-sender">
											<h6>{item.data.username}</h6>
										</div>
										<div className="comment-reply-message">
											<p>{item.data.message}</p>
										</div>
									</div>
								</div>
								<div className="comment-reply-footer">
									{item.data.usernameID === user.email ? (
										<button
											className="delete-comment"
											onClick={() => handleDelete(item.id)}>
											<DeleteOutlineIcon />
										</button>
									) : (
										""
									)}
									<div className="comment-reply-like">
										{/* <span>👍</span> */}
									</div>
									<div className="comment-reply-date">
										<p>
											{new Date(item.data.timestamp?.toDate()).toUTCString()}
										</p>
									</div>
								</div>
							</div>
						</div>
				  ))
				: "jeeeasda"}
		</div>
	);
};

export default CommentFeed;
