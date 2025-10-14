import { httpClient } from "@/utils/api";

export const login = (userModel) => {
	return httpClient.post("api/authentication", userModel);
};
