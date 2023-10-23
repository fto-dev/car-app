const StorageName = "favorite";

export const setSessionStorage = (value) =>
	sessionStorage.setItem(StorageName, JSON.stringify(value));

export const getSessionStorage = () =>
	JSON.parse(sessionStorage.getItem(StorageName));
