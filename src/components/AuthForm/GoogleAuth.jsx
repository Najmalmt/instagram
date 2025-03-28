"use client";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, firestore } from "../../firebase/firebase";
import useAuthStore from "../../store/authStore";
import { doc, getDoc, setDoc } from "firebase/firestore";
import Image from "next/image";
import { useRouter } from "next/navigation"; // ✅ Import Next.js router
import avatar from "../../../public/assets/avatar3.png";

const GoogleAuth = ({ prefix }) => {
	const loginUser = useAuthStore((state) => state.login);
	const router = useRouter(); // ✅ Initialize router

	const handleGoogleAuth = async () => {
		try {
			const provider = new GoogleAuthProvider();
			provider.setCustomParameters({ prompt: "select_account" }); // ✅ Forces email selection

			const result = await signInWithPopup(auth, provider);
			if (!result.user) return;

			const userRef = doc(firestore, "users", result.user.uid);
			const userSnap = await getDoc(userRef);

			let userDoc;
			if (userSnap.exists()) {
				// ✅ User already exists
				userDoc = userSnap.data();
			} else {
				// ✅ New user signup
				userDoc = {
					uid: result.user.uid,
					email: result.user.email,
					username: result.user.email.split("@")[0],
					fullName: result.user.displayName,
					bio: "",
					profilePicURL: result.user.photoURL,
					alt: {avatar},
					followers: [],
					following: [],
					posts: [],
					createdAt: Date.now(),
				};
				await setDoc(userRef, userDoc);
			}

			// ✅ Store user info and redirect
			localStorage.setItem("user-info", JSON.stringify(userDoc));
			loginUser(userDoc);
			router.push("/");
		} catch (error) {
			console.error("Google Auth Error:", error.message);
		}
	};

	return (
		<button
			onClick={handleGoogleAuth}
			className="w-full flex items-center justify-center gap-2 text-[#0095F6] font-semibold text-sm hover:text-[#1877F2] transition-colors"
		>
			<Image
				src="/assets/google.png"
				alt="Google"
				width={25}
				height={25}
				className="object-contain"
			/>
			{prefix} with Google
		</button>
	);
};

export default GoogleAuth;
