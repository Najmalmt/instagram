// "use client";

// import React from "react";
// import Sidebar from "@/components/Sidebar/Sidebar";

// const ComingSoon = () => {
//   return (
//     <div className="min-h-screen bg-black text-white flex">
//       <Sidebar />
//       <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-10">
//         <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
//         <p className="text-lg text-gray-400 max-w-md">
//           We're working on something amazing! Stay tuned for updates.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ComingSoon;


// "use client";

// import React from "react";
// import Sidebar from "@/components/Sidebar/Sidebar";

// const ComingSoon = () => {
// 	return (
// 		<div className="min-h-screen bg-black text-white flex">
// 			<Sidebar />
// 			<div className="flex-1 max-w-4xl mx-auto px-6 py-20 flex flex-col items-center justify-center text-center">
// 				<h1 className="text-4xl font-extrabold mb-4">Coming Soon</h1>
// 				<p className="text-lg text-gray-400 mb-6">
// 					We're working on something amazing. Stay tuned!
// 				</p>
// 				<div className="border border-gray-700 w-1/2 my-4"></div>
// 				<p className="text-sm text-gray-500">Launching Soon...</p>
// 			</div>
// 		</div>
// 	);
// };

// export default ComingSoon;


// "use client";

// import React from "react";
// import Sidebar from "@/components/Sidebar/Sidebar";
// import { LoaderCircle } from "lucide-react";

// const ComingSoon = () => {
// 	return (
// 		<div className="min-h-screen bg-black text-white flex">
// 			<Sidebar />
// 			<div className="flex-1 max-w-4xl mx-auto px-6 py-20 flex flex-col items-center justify-center text-center">
// 				<h1 className="text-5xl font-extrabold mb-6 text-purple-400 animate-pulse">
// 					Coming Soon
// 				</h1>
// 				<p className="text-lg text-gray-300 mb-6 max-w-md">
// 					We're working on something futuristic. Stay tuned for an amazing experience!
// 				</p>
// 				<LoaderCircle className="h-12 w-12 text-purple-400 animate-spin mb-6" />
// 				<div className="border border-gray-700 w-1/2 my-4"></div>
// 				<p className="text-sm text-gray-500 tracking-wider uppercase">
// 					Launching Soon...
// 				</p>
// 			</div>
// 		</div>
// 	);
// };

// export default ComingSoon;

// "use client";

// import React, { useState, useEffect } from "react";
// import Sidebar from "@/components/Sidebar/Sidebar";
// import { LoaderCircle, Rocket } from "lucide-react";

// const ComingSoon = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 1000); // Show loading for 2 seconds
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="min-h-screen bg-black text-white flex">
//       <Sidebar />
//       <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20">
//         {loading ? (
//           <div className="flex flex-col items-center justify-center min-h-screen">
//             <LoaderCircle className="h-16 w-16 text-purple-500 animate-spin mb-4" />
//             <p className="text-lg text-gray-400">Loading...</p>
//           </div>
//         ) : (
//           <div className="animate-fade-in flex flex-col items-center">
//             <Rocket className="h-12 w-12 text-purple-400 mb-4 animate-bounce" />
//             <h1 className="text-5xl font-bold mb-4 text-purple-500 drop-shadow-lg">
//               Coming Soon
//             </h1>
//             <p className="text-lg text-gray-400 max-w-md">
//               We're building something futuristic. Stay tuned!
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ComingSoon;



"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import { LoaderCircle, Rocket } from "lucide-react";

const ComingSoon = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Show loading for 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen h-screen overflow-y-auto bg-black text-white flex">
      <Sidebar />
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20 min-h-screen">
        {loading ? (
          <div className="flex flex-col items-center justify-center min-h-screen w-full">
            <LoaderCircle className="h-12 w-12 text-purple-500 animate-spin mb-4" />
            <p className="text-lg text-gray-400">Loading....</p>
          </div>
        ) : (
          <div className="animate-fade-in flex flex-col items-center w-full">
            <Rocket className="h-12 w-12 text-purple-400 mb-4 animate-bounce" />
            <h1 className="text-3xl font-bold mb-4 text-purple-500 drop-shadow-lg">
              Coming Soon ...
            </h1>
            <p className="text-1xl text-gray-400 max-w-md">
              We're building something futuristic. Stay tuned!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComingSoon;