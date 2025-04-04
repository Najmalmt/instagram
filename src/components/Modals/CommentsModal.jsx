"use client";

import { useEffect, useRef, useState } from "react";
import Comment from "../Comment/Comment";
import usePostComment from "../../hooks/usePostComment";
import { Smile, X, MoreHorizontal } from "lucide-react";
import useGetUserProfileById from "@/hooks/useGetUserProfileById";
import avatar from "../../../public/assets/avatar2.png";
import Link from "next/link";

const CommentsModal = ({ isOpen, onClose, post }) => {
	const { handlePostComment } = usePostComment();
	const { userProfile } = useGetUserProfileById(post.createdBy);
	const [comment, setComment] = useState("");
	const modalRef = useRef(null);
	const commentsContainerRef = useRef(null);

	const handleSubmitComment = async (e) => {
		e.preventDefault();
		await handlePostComment(post.id, comment);
		setComment("");
	};

	const handleModalClick = (e) => {
		if (modalRef.current && !modalRef.current.contains(e.target)) {
			onClose();
		}
	};

	useEffect(() => {
		const scrollToBottom = () => {
			commentsContainerRef.current.scrollTop =
				commentsContainerRef.current.scrollHeight;
		};
		if (isOpen) {
			setTimeout(() => {
				scrollToBottom();
			}, 100);
		}
	}, [isOpen, post.comments.length]);

	return (
		isOpen && (
			<div
				className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
				onClick={handleModalClick}
			>
				<div
					ref={modalRef}
					className="bg-black rounded-xl w-[90vw] max-w-4xl h-[90vh] flex flex-col xs:flex-row relative"
				>
					{/* Post Image */}
					<div className="w-full xs:w-[55%] bg-black flex items-center justify-center">
						<img
							src={post.imageURL}
							alt="Post content"
							className="w-full h-full max-h-[40vh] xs:max-h-full object-contain"
						/>
					</div>

					{/* Comments Section */}
					<div className="flex-1 flex flex-col">
						{/* Header */}
						<div className="p-4 border-b border-gray-500">
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-3">
									{userProfile ? (
										<Link href={`/${userProfile.username}`}>
											<img
												src={userProfile.profilePicURL || avatar.src}
												alt={`${userProfile.username}'s profile`}
												className="h-8 w-8 rounded-full object-cover"
											/>
										</Link>
									) : (
										<div className="h-8 w-8 rounded-full bg-gray-800 animate-pulse" />
									)}
									<span className="font-semibold">{userProfile?.username}</span>
								</div>
								<button onClick={onClose}>
									<MoreHorizontal className="h-5 w-5" />
								</button>
							</div>
						</div>

						{/* Comments List */}
						<div
							className="flex-1 overflow-y-auto p-4 max-h-[40vh] xs:max-h-full"
							ref={commentsContainerRef}
						>
							{post.comments.map((comment, idx) => (
								<Comment key={idx} comment={comment} />
							))}
						</div>

						{/* Add Comment */}
						<form
							onSubmit={handleSubmitComment}
							className="border-t border-gray-500 p-4 flex items-center"
						>
							<Smile className="h-6 w-6 mr-2" />
							<input
								type="text"
								placeholder="Add a comment..."
								className="flex-1 outline-none bg-black text-sm"
								value={comment}
								onChange={(e) => setComment(e.target.value)}
							/>
							<button
								type="submit"
								disabled={!comment.trim()}
								className={`text-sm font-semibold ${
									comment.trim() ? "text-blue-500" : "text-blue-200"
								}`}
							>
								Post
							</button>
						</form>
					</div>

					{/* Close Button */}
					<button
						onClick={onClose}
						className="absolute top-0 -right-10 text-white z-50"
					>
						<X className="h-6 w-6" />
					</button>
				</div>
			</div>
		)
	);
};

export default CommentsModal;