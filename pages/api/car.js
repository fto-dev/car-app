import {
	getJsonData,
	findIndex,
	addItem,
	updateItem,
	removeItem,
} from "@/utils/index.js";

const Get = async (req, res) => {
	const objectData = await getJsonData();

	res.status(200).json(objectData);
};

const Post = (req, res) => {
	addItem(req.body)
		.then(() => {
			res.status(200).json({ message: "Data stored successfully" });
		})
		.catch(() => {
			res.status(500).json({ message: "Error storing data" });
		});
};

const Put = async (req, res) => {
	if (!Object.keys(req.body).includes("Id")) {
		console.log("undefined id");
		res
			.status(500)
			.json({ message: "Undefined Id number. Error storing data" });
		return;
	}

	const selectedIndex = await findIndex(req.body.Id);

	if (selectedIndex == -1)
		return res
			.status(200)
			.json({ message: `${req.body.Id} index number couldn't find.` });

	updateItem(selectedIndex, req.body)
		.then(() => {
			res
				.status(200)
				.json({ message: "Data stored successfully", data: req.body });
		})
		.catch(() => {
			res.status(500).json({ message: "Error storing data" });
		});
};

const Delete = (Id, res) => {
	removeItem(Id)
		.then((data) => {
			res.status(200).json({ message: data });
		})
		.catch(() => {
			res.status(500).json({ message: "Error storing data" });
		});
};

export default async function handler(req, res) {
	try {
		if (req.method === "GET") {
			Get(req, res);
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
