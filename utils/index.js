import fsPromises from "fs/promises";
import path from "path";

const dataFilePath = path.join(process.cwd(), "/json/userData.json");

export async function getJsonData() {
	const jsonData = await fsPromises.readFile(dataFilePath);
	const objectData = JSON.parse(jsonData);
	return objectData;
}

export async function findIndex(id) {
	const getLocalJsonData = await getJsonData();

	const selectedIndex = getLocalJsonData.findIndex((item) => item.Id == id);
	return selectedIndex;
}

export async function getLastId() {
	const getLocalJsonData = await getJsonData();
	return getLocalJsonData.length;
}

export async function addItem(bodyModel) {
	const getLocalJsonData = await getJsonData();
	const Id = await getLastId();
	const newData = { ...bodyModel, Id };
	// @todo: refactor const newLocalJsonData =
	getLocalJsonData.push(newData);

	return new Promise((resolve, reject) => {
		writeFile(getLocalJsonData)
			.then(() => {
				resolve(bodyModel);
			})
			.catch(() => {
				reject("File write unsuccesfull, Error storing data.");
			});
	});
}

export async function updateItem(index, bodyModel) {
	const getLocalJsonData = await getJsonData();
	getLocalJsonData[index] = bodyModel;

	return new Promise((resolve, reject) => {
		writeFile(getLocalJsonData)
			.then(() => {
				resolve(bodyModel);
			})
			.catch(() => {
				reject("File write unsuccesfull, Error storing data.");
			});
	});
}

export async function removeItem(Id) {
	const getLocalJsonData = await getJsonData();
	const index = await findIndex(Id);

	if (index > -1) {
		getLocalJsonData.splice(index, 1);
	}

	return new Promise((resolve, reject) => {
		if (index == -1) return resolve(`${Id} index number couldn't find.`);
		writeFile(getLocalJsonData)
			.then(() => {
				resolve(`${index} index number item is removed`);
			})
			.catch(() => {
				reject("File write unsuccessful, Error storing data.");
			});
	});
}

export async function writeFile(data) {
	try {
		const updatedData = JSON.stringify(data);
		await fsPromises.writeFile(dataFilePath, updatedData);

		return Promise.resolve();
	} catch (error) {
		console.error(error);
		return Promise.reject();
	}
}
