"use client";

import { useState } from "react";
import UseSignUpWithEmailAndPassword from "../../hooks/UseSignUpWithEmailAndPassword";
import { LoaderCircle, Eye, EyeOff } from "lucide-react";

const Signup = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		email: "",
		password: "",
	});
	const [showPassword, setShowPassword] = useState(false);
	const { loading, error, signup } = UseSignUpWithEmailAndPassword();
	const [errors, setErrors] = useState({});

	const validateInputs = () => {
		let newErrors = {};

		if (!inputs.email.includes("@")) newErrors.email = "Invalid email format";
		if (!inputs.username.trim()) newErrors.username = "Username is required";
		if (!inputs.fullName.trim()) newErrors.fullName = "Full Name is required";
		if (inputs.password.length < 6)
			newErrors.password = "Password must be at least 6 characters";

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSignup = () => {
		if (validateInputs()) {
			signup(inputs);
		}
	};

	return (
		<div className="space-y-4">
			<div>
				<input
					type="email"
					placeholder="Email"
					className="w-full px-4 py-3 bg-[#121212] border border-gray-800 rounded-lg text-sm focus:outline-none focus:border-gray-600"
					value={inputs.email}
					onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
				/>
				{errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
			</div>

			<div>
				<input
					type="text"
					placeholder="Username"
					className="w-full px-4 py-3 bg-[#121212] border border-gray-800 rounded-lg text-sm focus:outline-none focus:border-gray-600"
					value={inputs.username}
					onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
				/>
				{errors.username && (
					<p className="text-red-500 text-xs mt-1">{errors.username}</p>
				)}
			</div>

			<div>
				<input
					type="text"
					placeholder="Full Name"
					className="w-full px-4 py-3 bg-[#121212] border border-gray-800 rounded-lg text-sm focus:outline-none focus:border-gray-600"
					value={inputs.fullName}
					onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
				/>
				{errors.fullName && (
					<p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
				)}
			</div>

			<div className="relative">
				<input
					type={showPassword ? "text" : "password"}
					placeholder="Password"
					className="w-full px-4 py-3 bg-[#121212] border border-gray-800 rounded-lg text-sm focus:outline-none focus:border-gray-600"
					value={inputs.password}
					onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
				/>
				<button
					type="button"
					className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
					onClick={() => setShowPassword(!showPassword)}
				>
					{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
				</button>
				{errors.password && (
					<p className="text-red-500 text-xs mt-1">{errors.password}</p>
				)}
			</div>

			{error && (
				<div className="bg-red-500 text-white text-sm p-3 rounded-lg">
					{error.message || "An error occurred"}
				</div>
			)}

			<button
				onClick={handleSignup}
				disabled={loading}
				className="w-full bg-blue-500 text-white rounded-lg py-3 text-sm font-semibold hover:bg-blue-600 disabled:opacity-50 flex justify-center items-center"
			>
				{loading ? <LoaderCircle className="animate-spin" size={20} /> : "Sign up"}
			</button>
		</div>
	);
};

export default Signup;
