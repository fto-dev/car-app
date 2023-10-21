import fsPromises from "fs/promises";
import path from "path";

const dataFilePath = path.join(process.cwd(), "/json/userData.json");
export async function getJsonData() {
	const jsonData = await fsPromises.readFile(dataFilePath);
	const objectData = JSON.parse(jsonData);
	return objectData;
}

export async function findIndex(id) {
	const resultData = await getJsonData();

	const selectedIndex = resultData.findIndex((item) => item.Id == id);
	return selectedIndex;
}

export async function getLastId() {
	const resultData = await getJsonData();
	return resultData.length;
}

export async function addData(bodyModel) {
	const resultData = await getJsonData();
	const Id = await getLastId();
	const newData = { ...bodyModel, Id };
	resultData.push(newData);

	return new Promise((resolve, reject) => {
		writeFile(resultData)
			.then(() => {
				resolve(bodyModel);
			})
			.catch(() => {
				reject("File write unsuccesfull, Error storing data.");
			});
	});
}

export async function updateData(index, bodyModel) {
	const resultData = await getJsonData();
	resultData[index] = bodyModel;

	return new Promise((resolve, reject) => {
		writeFile(resultData)
			.then(() => {
				resolve(bodyModel);
			})
			.catch(() => {
				reject("File write unsuccesfull, Error storing data.");
			});
	});
}

export async function removeItem(Id) {
	const index = await findIndex(Id);
	const resultData = await getJsonData();

	resultData.splice(index, 1);

	return new Promise((resolve, reject) => {
		writeFile(resultData)
			.then(() => {
				resolve(`${index} index number item is removed`);
			})
			.catch(() => {
				reject("File write unsuccesfull, Error storing data.");
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
