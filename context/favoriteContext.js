import Toaster from "@/utils/toaster";
import ConfirmModal from '@/utils/confirm';
import React, { createContext, useContext, useEffect, useState } from "react";


import {
	setFavoritesSessionStorage,
	getFavoritesSessionStorage,
} from "@/utils/storage";

const FavoriteContext = createContext(null);

export const useFavoriteContext = () => {
	const context = useContext(FavoriteContext);
	if (context === null) {
		throw new Error("FavoriteContext must be surrounded by FavoriteProvider.");
		return;
	}

	return context;
};

const defaultList = [];
export const FavoriteProvider = ({ children, values }) => {
	const [list, setList] = useState(defaultList);
	const [offCanvasToggle, setOffCanvasToggle] = useState(false);

	useEffect(() => {
		const sessionList = getFavoritesSessionStorage();
		sessionList && setList(sessionList);
	}, []);

	const addFavorite = (item) => {
		const updatedList = [...list, item];
		setList(updatedList);
		setFavoritesSessionStorage(updatedList);

		Toaster.success(`ID: ${item.Id} is added successfully.`);
	};
	const removeFavorite = (id) => {
		const updatedList = list.filter((item, index) => id != item.Id);
		setList(updatedList);
		setFavoritesSessionStorage(updatedList);
		Toaster.success(`ID: ${id} is removed successfully.`);
	};
	const clearFavorites = (e) => {
		
		setList(defaultList);
		setFavoritesSessionStorage(defaultList);
	};

	const isFavorite = (id) => {
		const index = list.findIndex((item) => item.Id == id);
		return index > -1;
	};

	const value = {
		list,
		addFavorite,
		removeFavorite,
		clearFavorites,
		offCanvasToggle,
		setOffCanvasToggle: () => {
			setOffCanvasToggle(!offCanvasToggle);
		},
		setOffCanvasValue: (value) => {
			setOffCanvasToggle(value);
		},
		isFavorite,
		...values,
	};
	return (
		<FavoriteContext.Provider value={value}>
			{children}
		</FavoriteContext.Provider>
	);
};
