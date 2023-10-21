import fsPromises from "fs/promises";
import path from "path";

const dataFilePath = path.join(process.cwd(), "json/userData.json");

export default async function handler(req, res) {
	if (req.method === "GET") {
		const jsonData = await fsPromises.readFile(dataFilePath);
		const objectData = JSON.parse(jsonData);

		res.status(200).json(objectData);
	} else if (req.method === "POST") {
		try {
			const jsonData = await fsPromises.readFile(dataFilePath);
			const objectData = JSON.parse(jsonData);

			const newData = {
				...req.body,
			};

			objectData.push(newData);

			const updatedData = JSON.stringify(objectData);
			await fsPromises.writeFile(dataFilePath, updatedData);

			res.status(200).json({ message: "Data stored successfully" });
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: "Error storing data" });
		}
	}
}
