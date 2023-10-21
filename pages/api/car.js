import {
	getJsonData,
	findIndex,
	updateData,
	addData,
	removeItem,
} from "@/utils/index.js";

const Put = async (req, res) => {
	if (!Object.keys(req.body).includes("Id")) {
		console.log("undefined id");
		res
			.status(500)
			.json({ message: "Undefined Id number. Error storing data" });
		return;
	}

	const selectedIndex = await findIndex(req.body.Id);

	updateData(selectedIndex, req.body)
		.then(() => {
			res
				.status(200)
				.json({ message: "Data stored successfully", data: req.body });
		})
		.catch(() => {
			res.status(500).json({ message: "Error storing data" });
		});
};

const Post = (req, res) => {
	addData(req.body)
		.then(() => {
			res.status(200).json({ message: "Data stored successfully" });
		})
		.catch(() => {
			res.status(500).json({ message: "Error storing data" });
		});
};

const Delete = (Id, res) => {
	console.log("delete");
	removeItem(Id)
		.then(() => {
			res.status(200).json({ message: "Data stored successfully" });
		})
		.catch(() => {
			res.status(500).json({ message: "Error storing data" });
		});
};
export default async function handler(req, res) {
	try {
		if (req.method === "GET") {
			const objectData = await getJsonData();
			res.status(200).json(objectData);
		} else if (req.method === "PUT") {
			Put(req, res);
		} else if (req.method === "POST") {
			Post(req, res);
		} else if (req.method === "DELETE") {
			Delete(req.body.Id, res);
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error storing data" });
	}
}
