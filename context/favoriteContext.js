import Toaster from "@/utils/toaster";
import React, { createContext, useContext, useEffect, useState } from "react";
import { setSessionStorage, getSessionStorage } from "@/utils/storage";

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
		debugger;
		console.log(list);
		setSessionStorage(list);

		const sessionList = getSessionStorage();
		console.log(sessionList);

		debugger;
	}, [list]);

	useEffect(() => {
		const sessionList = getSessionStorage();
		debugger;
		setList(sessionList);
	}, []);

	const addFavorite = (item) => {
		const updatedList = [...list, item];
		console.log(list);
		debugger;
		setList(updatedList);

		Toaster.success(`${item.Id} is added successfully.`);
	};
	const removeFavorite = (id) => {
		const updatedList = list.filter((item, index) => id != item.Id);
		setList(updatedList);
		Toaster.success(`${id} is removed successfully.`);
	};
	const clearFavorites = () => {
		setList(defaultList);
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
