// export const timeAgo = (timestamp) => {
// 	const now = Date.now();
// 	const secondsAgo = Math.floor((now - timestamp) / 1000);

// 	if (secondsAgo < 60) {
// 		return `${secondsAgo}s ago`;
// 	} else if (secondsAgo < 3600) {
// 		const minutesAgo = Math.floor(secondsAgo / 60);
// 		return `${minutesAgo}m ago`;
// 	} else if (secondsAgo < 86400) {
// 		const hoursAgo = Math.floor(secondsAgo / 3600);
// 		return `${hoursAgo}h ago`;
// 	} else if (secondsAgo < 604800) {
// 		const daysAgo = Math.floor(secondsAgo / 86400);
// 		return `${daysAgo}d ago`;
// 	} else {
// 		const weeksAgo = Math.floor(secondsAgo / 604800); // 7 days in seconds
// 		return `${weeksAgo}w ago`;
// 	}
// };
export const timeAgo = (timestamp) => {
	const now = Date.now();
	const secondsAgo = Math.floor((now - timestamp) / 1000);

	if (secondsAgo < 60) {
		return `${secondsAgo} second ago`;
	} else if (secondsAgo < 3600) {
		const minutesAgo = Math.floor(secondsAgo / 60);
		return `${minutesAgo} minutes ago`;
	} else if (secondsAgo < 86400) {
		const hoursAgo = Math.floor(secondsAgo / 3600);
		return `${hoursAgo} hours ago`;
	} else if (secondsAgo < 604800) {
		const daysAgo = Math.floor(secondsAgo / 86400);
		return `${daysAgo} day ago`;
	} else if (secondsAgo < 2592000) { // 30 days in seconds
		const weeksAgo = Math.floor(secondsAgo / 604800);
		return `${weeksAgo} week ago`;
	} else if (secondsAgo < 31536000) { // 12 months in seconds
		const monthsAgo = Math.floor(secondsAgo / 2592000);
		return `${monthsAgo} months ago`;
	} else {
		const yearsAgo = Math.floor(secondsAgo / 31536000);
		return `${yearsAgo} year ago`;
	}
};
