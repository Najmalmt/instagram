"use client";

import useGetUserProfileById from "../../hooks/useGetUserProfileById";
import { timeAgo } from "../../utils/timeAgo";
import Link from "next/link";
import CommentSkelton from "./CommentSkeleton";
import avatar from "../../../public/assets/avatar2.png";

const Comment = ({ comment }) => {
	// Check if comment is null or undefined
	if (!comment) {
		return <p className="text-gray-500">Comment not available</p>;
	}

	// Fetch user profile data
	const { userProfile, isLoading } = useGetUserProfileById(comment.createdBy);

	// Show loading skeleton while fetching user profile
	if (isLoading) return <CommentSkelton />;

	// Check if userProfile is null
	if (!userProfile) {
		return (
			<div className="flex gap-4 mb-2">
				<img src={avatar.src} alt="Anonymous" className="w-10 h-10 rounded-full" />
				<div className="flex flex-col">
					<div className="flex gap-2 items-center">
						<span className="font-bold text-sm">Anonymous</span>
						<span className="text-base">{comment.comment || "No comment"}</span>
					</div>
					<span className="text-xs text-gray-500">{timeAgo(comment.createdAt)}</span>
				</div>
			</div>
		);
	}

	// Render the comment
	return (
		<div className="flex gap-4 mb-2">
			<Link href={`/${userProfile?.username || "anonymous"}`}>
				<img
					src={userProfile?.profilePicURL || avatar.src}
					alt={userProfile?.username || "Anonymous"}
					className="w-10 h-10 rounded-full"
				/>
			</Link>
			<div className="flex flex-col">
				<div className="flex gap-2 items-center">
					<Link href={`/${userProfile?.username || "anonymous"}`}>
						<span className="font-bold text-sm">{userProfile?.username || "Anonymous"}</span>
					</Link>
					<span className="text-base">{comment?.comment || "No comment"}</span>
				</div>
				<span className="text-xs text-gray-500">{timeAgo(comment?.createdAt)}</span>
			</div>
		</div>
	);
};

export default Comment;
