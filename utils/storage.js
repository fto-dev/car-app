const FavoriteStorageName = "favorite";
const TokenStorageStorageName = "token";

export const setTokenSessionStorage = (value) =>
	sessionStorage.setItem(TokenStorageStorageName, JSON.stringify(value));

export const getTokenSessionStorage = () =>
	JSON.parse(sessionStorage.getItem(TokenStorageStorageName));

export const setFavoritesSessionStorage = (value) =>
	sessionStorage.setItem(FavoriteStorageName, JSON.stringify(value));

export const getFavoritesSessionStorage = () =>
	JSON.parse(sessionStorage.getItem(FavoriteStorageName));
