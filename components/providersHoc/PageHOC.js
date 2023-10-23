import React from "react";
import { FavoriteProvider } from "@/context/favoriteContext";

import Header from "@/components/header";

import dynamic from "next/dynamic";
const ToastContainer = dynamic(() =>
	import("react-toastify").then((toastify) => toastify.ToastContainer)
);

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

/* Custom Styles  */
import "@/app/globals.css";

const PageHOC = (Component, displayName = "PageHOC") => {
	const MyComponent = () => {
		return (
			<FavoriteProvider>
				<ToastContainer />
				<Header />
				<Component />
			</FavoriteProvider>
		);
	};

	MyComponent.displayName = displayName;
	return <MyComponent />;
};

export default PageHOC;
