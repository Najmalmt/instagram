import React from "react";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import useUserProfileStore from "../store/userProfileStore";
import { toast } from "react-toastify";

const useGetUserProfileByUsername = (username) => {
	const [isLoading, setIsLoading] = useState(true);
	const { userProfile, setUserProfile } = useUserProfileStore();

	useEffect(() => {
		const getUserProfile = async () => {
			setIsLoading(true);
			try {
				const q = query(
					collection(firestore, "users"),
					where("username", "==", username)
				);
				const querySnapshot = await getDocs(q);

				if (querySnapshot.empty) return setUserProfile(null);

				let userDoc;
				querySnapshot.forEach((doc) => {
					userDoc = doc.data();
				});

				setUserProfile(userDoc);
				console.log(userDoc);
			} catch (error) {
				toast.error("Error", error.message, "error");
			} finally {
				setIsLoading(false);
			}
		};

		getUserProfile();
	}, [setUserProfile, username]);

	return { isLoading, userProfile };
};

export default useGetUserProfileByUsername;
