import {
	getJsonData,
	findIndex,
	addItem,
	updateItem,
	removeItem,
	checkUser,
} from "@/utils/index.js";

export default async function handler(req, res) {
	try {
		if (req.method === "POST") {
			checkUser(req.body)
				.then((response) => {
					console.log(response);
					if (response) {
						res.status(200).json({
							status: true,
							message: "User check success",
							token: process.env.NEXT_APP_BEARER_TOKEN,
						});
					} else {
						res.status(200).json({
							status: false,
							message: "Error, check your credentials",
						});
					}
				})
				.catch(() => {
					res
						.status(500)
						.json({ status: false, message: "Authentication service error." });
				});
		} else {
			console.log("METHOD IS NOT POST");
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Authentication service error." });
	}
}
