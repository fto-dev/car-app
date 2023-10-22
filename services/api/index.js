import { httpClient } from "@/utils/api";

export const getCars = () => {
	return httpClient.get("api/car");
};

export const getCarModel = () => {
	return httpClient.get("api/car-model");
};
