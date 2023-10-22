import {
	getJsonData,
	findIndex,
	addItem,
	updateItem,
	removeItem,
} from "@/utils/index.js";

const Get = async (req, res) => {
	const model = [
		{
			name: "Name",
			value: "Name",
		},
		{
			name: "Miles Per Gallon",
			value: "Miles_per_Gallon",
		},
		{
			name: "Cylinders",
			value: "Cylinders",
		},
		{
			name: "Displacement",
			value: "Displacement",
		},
		{
			name: "Horsepower",
			value: "Horsepower",
		},
		{
			name: "Weight In Lbs",
			value: "Weight_in_lbs",
		},
		{
			name: "Acceleration",
			value: "Acceleration",
		},
		{
			name: "Year",
			value: "Year",
		},
		{
			name: "Origin",
			value: "Origin",
		},
	];

	res.status(200).json(model);
};

export default async function handler(req, res) {
	try {
		Get(req, res);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Error can't get car model." });
	}
}
