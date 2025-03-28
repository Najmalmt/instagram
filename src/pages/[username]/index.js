"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import { MoreHorizontal, Settings } from "lucide-react";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileTabs from "../../components/Profile/ProfileTabs";
import ProfilePosts from "../../components/Profile/ProfilePosts";
import useGetUserProfileByUsername from "../../hooks/useGetUserProfileByUsername";
import PageLayouts from "@/Layouts/PageLayouts";

export default function ProfilePage() {
	const router = useRouter();
	const { username } = router.query;
	const { isLoading, userProfile } = useGetUserProfileByUsername(username);

	// State to manage the selected tab
	const [activeTab, setActiveTab] = useState("posts");

	if (!isLoading && !userProfile) {
		return (
			<div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
				<p className="text-2xl mb-4">User Not Found</p>
				<button
					onClick={() => router.push("/")}
					className="text-blue-500 hover:text-blue-400"
				>
					Go home
				</button>
			</div>
		);
	}

	return (
		<PageLayouts>
			<div className="min-h-screen bg-black text-white">
				<div className="max-w-4xl mx-auto px-4 py-8">
					{/* Profile Content */}
					{!isLoading && userProfile && <ProfileHeader user={userProfile} />}
					{isLoading && <ProfileHeaderSkeleton />}

					<div className="mt-8 border-t border-gray-800 h-screen">
						<ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />
						<ProfilePosts activeTab={activeTab} />
					</div>
				</div>
			</div>
		</PageLayouts>
	);
}

function ProfileHeaderSkeleton() {
	return (
		<div className="flex gap-8 items-start animate-pulse">
			<div className="w-20 h-20 bg-gray-800 rounded-full"></div>
			<div className="flex-1">
				<div className="h-4 bg-gray-800 rounded w-1/4 mb-4"></div>
				<div className="h-4 bg-gray-800 rounded w-1/3"></div>
			</div>
		</div>
	);
}




// "use client";

// import React, { useEffect, useState } from "react";
// import PageLayouts from "@/Layouts/PageLayouts";
// import { BellRing, Heart, MessageCircle, UserPlus } from "lucide-react";

// const notificationsData = [
// 	{
// 		id: 1,
// 		user: "User1",
// 		action: "liked your post",
// 		icon: <Heart className="h-5 w-5 text-red-500" />,
// 	},
// 	{
// 		id: 2,
// 		user: "User2",
// 		action: "started following you",
// 		icon: <UserPlus className="h-5 w-5 text-blue-500" />,
// 	},
// 	{
// 		id: 3,
// 		user: "User3",
// 		action: "commented on your photo",
// 		icon: <MessageCircle className="h-5 w-5 text-green-500" />,
// 	},
// 	{
// 		id: 4,
// 		user: "User4",
// 		action: "mentioned you in a comment",
// 		icon: <BellRing className="h-5 w-5 text-yellow-500" />,
// 	},
// ];

// export default function NotificationsPage() {
// 	const [notifications, setNotifications] = useState([]);
// 	const [loading, setLoading] = useState(true);

// 	useEffect(() => {
// 		// Simulating an API call
// 		setTimeout(() => {
// 			setNotifications(notificationsData);
// 			setLoading(false);
// 		}, 1500);
// 	}, []);

// 	return (
// 		<PageLayouts>
// 			<div className="min-h-screen bg-black text-white">
// 				<div className="max-w-4xl mx-auto px-4 py-8">
// 					<h1 className="text-2xl font-bold mb-6 border-b border-gray-800 pb-3">
// 						Notifications
// 					</h1>

// 					{loading ? (
// 						<div className="text-center py-6 text-gray-400 animate-pulse">
// 							Loading notifications...
// 						</div>
// 					) : notifications.length > 0 ? (
// 						<ul className="space-y-4">
// 							{notifications.map((notification) => (
// 								<li
// 									key={notification.id}
// 									className="flex items-center gap-4 p-4 bg-gray-900 border border-gray-800 rounded-lg shadow-sm transition duration-300 hover:bg-gray-800"
// 								>
// 									<div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-700">
// 										{notification.icon}
// 									</div>
// 									<div>
// 										<p className="text-gray-300">
// 											<span className="font-semibold text-white">{notification.user}</span>{" "}
// 											{notification.action}
// 										</p>
// 										<p className="text-xs text-gray-500">Just now</p>
// 									</div>
// 								</li>
// 							))}
// 						</ul>
// 					) : (
// 						<div className="text-center py-6 text-gray-400">
// 							No new notifications.
// 						</div>
// 					)}
// 				</div>
// 			</div>
// 		</PageLayouts>
// 	);
// }



// "use client";

// import { useState } from "react";
// import { useRouter } from "next/router";
// import { MoreHorizontal, Settings } from "lucide-react";
// import ProfileHeader from "../../components/Profile/ProfileHeader";
// import ProfileTabs from "../../components/Profile/ProfileTabs";
// import ProfilePosts from "../../components/Profile/ProfilePosts";
// import useGetUserProfileByUsername from "../../hooks/useGetUserProfileByUsername";
// import PageLayouts from "@/Layouts/PageLayouts";

// export default function ProfilePage() {
// 	const router = useRouter();
// 	const { username } = router.query;
// 	const { isLoading, userProfile } = useGetUserProfileByUsername(username);

// 	const [activeTab, setActiveTab] = useState("posts");

// 	if (!isLoading && !userProfile) {
// 		return (
// 			<div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center">
// 				<h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
// 				<p className="text-lg text-gray-400 mb-6">This profile page is under construction.</p>
// 				<button
// 					onClick={() => router.push("/")}
// 					className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg transition"
// 				>
// 					Back to Home
// 				</button>
// 			</div>
// 		);
// 	}

// 	return (
// 		<PageLayouts>
// 			<div className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center">
// 				<h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
// 				<p className="text-lg text-gray-400 mb-6">This profile page is under construction.</p>
// 				<button
// 					onClick={() => router.push("/")}
// 					className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg transition"
// 				>
// 					Back to Home
// 				</button>
// 			</div>
// 		</PageLayouts>
// 	);
// }






// "use client";

// import { useState } from "react";
// import { useRouter } from "next/router";
// import { MoreHorizontal, Settings } from "lucide-react";
// import ProfileHeader from "../../components/Profile/ProfileHeader";
// import ProfileTabs from "../../components/Profile/ProfileTabs";
// import ProfilePosts from "../../components/Profile/ProfilePosts";
// import useGetUserProfileByUsername from "../../hooks/useGetUserProfileByUsername";
// import PageLayouts from "@/Layouts/PageLayouts";

// export default function ProfilePage() {
// 	const router = useRouter();
// 	const { username } = router.query;
// 	const { isLoading, userProfile } = useGetUserProfileByUsername(username);

// 	// State to manage the selected tab
// 	const [activeTab, setActiveTab] = useState("posts");

// 	if (!isLoading && !userProfile) {
// 		return (
// 			<div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center">
// 				<h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
// 				<p className="text-lg mb-6 text-gray-400">This profile is not available yet. Stay tuned!</p>
// 				<button
// 					onClick={() => router.push("/")}
// 					className="px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md"
// 				>
// 					Back to Home
// 				</button>
// 			</div>
// 		);
// 	}

// 	return (
// 		<PageLayouts>
// 			<div className="min-h-screen bg-black text-white">
// 				<div className="max-w-4xl mx-auto px-4 py-8">
// 					{/* Profile Content */}
// 					{!isLoading && userProfile && <ProfileHeader user={userProfile} />}
// 					{isLoading && <ProfileHeaderSkeleton />}

// 					<div className="mt-8 border-t border-gray-800 h-screen">
// 						<ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />
// 						<ProfilePosts activeTab={activeTab} />
// 					</div>
// 				</div>
// 			</div>
// 		</PageLayouts>
// 	);
// }

// function ProfileHeaderSkeleton() {
// 	return (
// 		<div className="flex gap-8 items-start animate-pulse">
// 			<div className="w-20 h-20 bg-gray-800 rounded-full"></div>
// 			<div className="flex-1">
// 				<div className="h-4 bg-gray-800 rounded w-1/4 mb-4"></div>
// 				<div className="h-4 bg-gray-800 rounded w-1/3"></div>
// 			</div>
// 		</div>
// 	);
// }
