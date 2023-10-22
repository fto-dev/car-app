import Toaster from "@/utils/toaster";
import React, { createContext, useContext, useEffect, useState } from "react";

const FavoriteContext = createContext();

export const useFavoriteContext = () => {
	const context = useContext(FavoriteContext);
	return context;
};

export const FavoriteProvider = ({ children }) => {
	const [list, setList] = useState([]);

	useEffect(() => {
		sessionStorage.setItem("favorite", JSON.stringify(list));
	}, [list]);

	useEffect(() => {
		const sessionList = JSON.parse(sessionStorage.getItem("favorite"));
		setList(sessionList);
	}, []);

	const addFavorite = (item) => {
		const updatedList = [...list, item];
		setList(updatedList);
		Toaster.success(`${item.Id} is added successfully.`);
	};
	const removeFavorite = (id) => {
		const updatedList = list.filter((item, index) => {
			return id != item.Id;
		});
		setList(updatedList);
		Toaster.success(`${id} is removed successfully.`);
	};
	const clearFavorites = () => {
		setList([]);
	};

	const value = { list, addFavorite, removeFavorite, clearFavorites };
	return (
		<FavoriteContext.Provider value={value}>
			{children}
		</FavoriteContext.Provider>
	);
};
