// import { useRouter } from "next/router";

// const dashboard = () => {
//   const router = useRouter();

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
//       <h1 className="text-4xl font-bold">🚀 Coming Soon!</h1>
//       <p className="text-gray-400 mt-2">This feature is under development.</p>
//       <button
//         onClick={() => router.push("/")}
//         className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
//       >
//         Go to Home
//       </button>
//     </div>
//   );
// };

// export default dashboard;

// "use client";

// import React from "react";
// import Sidebar from "@/components/Sidebar/Sidebar";
// import { BellRing, Heart, MessageCircle, UserPlus } from "lucide-react";

// const notificationsData = [
// 	{
// 		id: 1,
// 		icon: <Heart className="h-6 w-6 text-red-500" />,
         
// 	},
// 	{
// 		id: 2,
// 		icon: <UserPlus className="h-6 w-6 text-blue-500" />, 
// 	},
// 	{
// 		id: 3,
// 		icon: <MessageCircle className="h-6 w-6 text-green-500" />, 
// 	},
// 	{
// 		id: 4,
// 		icon: <BellRing className="h-6 w-6 text-yellow-500" />, 
// 	},
// ];

// const DashboardComponent = () => {
// 	return (
// 		<div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex">
// 			<Sidebar />
// 			<div className="flex-1 max-w-4xl mx-auto px-6 py-10">
// 				<h1 className="text-3xl font-extrabold mb-6 border-b border-gray-700 pb-4">
// 					Dashboard
// 				</h1>
// 				<ul className="space-y-6">
// 					{notificationsData.map((notification) => (
// 						<li
// 							key={notification.id}
// 							className="flex items-center gap-6 p-5 bg-gray-800 border border-gray-700 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-700"
// 						>
// 							<div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-600 shadow-md">
// 								{notification.icon}
// 							</div>
// 						</li>
// 					))}
// 				</ul>
// 			</div>
// 		</div>
// 	);
// };

// export default DashboardComponent;
"use client";

import React from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import { BellRing, Heart, MessageCircle, UserPlus } from "lucide-react";

const notificationsData = [
	{
		id: 1,
		user: "Alice",
		icon: <Heart className="h-6 w-6 text-red-500" />, 
		message: "liked your post."
	},
	{
		id: 2,
		user: "Bob",
		icon: <UserPlus className="h-6 w-6 text-blue-500" />, 
		message: "started following you."
	},
	{
		id: 3,
		user: "Charlie",
		icon: <MessageCircle className="h-6 w-6 text-green-500" />, 
		message: "commented on your photo."
	},
	{
		id: 4,
		user: "Daisy",
		icon: <BellRing className="h-6 w-6 text-yellow-500" />, 
		message: "mentioned you in a comment."
	},
];

const DashboardComponent = () => {
	return (
		<div className="min-h-screen bg-black text-white flex">
			<Sidebar />
			<div className="flex-1 max-w-4xl mx-auto px-6 py-10">
				<h1 className="text-2xl font-extrabold mb-6 border-b border-gray-700 pb-4">
					notifications
				</h1>
				<ul className="space-y-6">
					{notificationsData.map((notification) => (
						<li
							key={notification.id}
							className="flex items-center gap-6 p-2 bg-gray-800 border border-gray-700 rounded-lg shadow-xm transition-transform transform hover:scale-105 hover:bg-gray-700"
						>
							<div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-600 shadow-md">
								{notification.icon}
							</div>
							<p className="text-xm text-gray-300">
								<span className="font-semibold text-white">{notification.user}</span> {notification.message}
							</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default DashboardComponent;
