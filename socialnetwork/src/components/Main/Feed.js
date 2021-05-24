import React, { useEffect, useState } from "react";
import "./feed.scss";
import Post from "./Post";
import { db } from "../../firebase";
import { useStateValue } from "../../StateProvider";

const Feed = () => {
	// eslint-disable-next-line no-unused-vars
	const [{ user }, dispach] = useStateValue();
	const [posts, setPosts] = useState(null);

	useEffect(() => {
		if (user) {
			db.collection("posts")
				.orderBy("timestamp", "desc")
				.onSnapshot((snapshot) => {
					setPosts(
						snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
					);
				});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div className="feed">
			{posts
				? posts.map((post) => (
						<Post
							key={post.id}
							email={post.data.id}
							username={post.data.username}
							timestamp={post.data.timestamp}
							message={post.data.message}
							image={post.data.image}
							profilePic={post.data.profilePic}
							id={post.id}
							likes={post.data.likes}
						/>
				  ))
				: ""}
		</div>
	);
};

export default Feed;
