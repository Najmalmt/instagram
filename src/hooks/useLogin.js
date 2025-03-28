import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import useAuthStore from "../store/authStore";
import { toast } from "react-toastify";

const useLogin = () => {
	const [signInWithEmailAndPassword, , loading, error] =
		useSignInWithEmailAndPassword(auth);
	const loginUser = useAuthStore((state) => state.login);

	const login = async (inputs) => {
		if (!inputs.email || !inputs.password) {
			toast.error("Please fill in all the fields");
			return null; // Return null to indicate failure
		}

		try {
			const userCred = await signInWithEmailAndPassword(
				inputs.email,
				inputs.password
			);

			if (userCred) {
				const docRef = doc(firestore, "users", userCred.user.uid);
				const docSnap = await getDoc(docRef);
				localStorage.setItem("user-info", JSON.stringify(docSnap.data()));
				loginUser(docSnap.data());
				return { success: true }; // Return success for frontend handling
			}
		} catch (error) {
			toast.error(error.message);
			return null; // Return null if login fails
		}
	};

	return { loading, error, login };
};

export default useLogin;
