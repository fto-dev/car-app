"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import Header from "@/components/header";

import Mainpage from "@/components/home";
import Favorites from "@/components/favorites";
import { FavoriteProvider } from "@/context/favoriteContext";

import dynamic from "next/dynamic";

const ToastContainer = dynamic(() =>
	import("react-toastify").then((toastify) => toastify.ToastContainer)
);

export default function Home() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const offCanvasToggle = () => {
		if (!show) {
			handleShow();
		} else {
			handleClose();
		}
	};

	return (
		<main className={styles.main}>
			<FavoriteProvider>
				<ToastContainer />
				<Router>
					<Header
						Link={Link}
						offCanvasToggle={offCanvasToggle}
					/>
					<Routes>
						<Route
							path="/"
							element={
								<Mainpage
									offCanvasShow={show}
									handleClose={handleClose}
								/>
							}
						/>
						<Route
							path="favorites"
							element={<Favorites />}
						/>
					</Routes>
				</Router>
			</FavoriteProvider>
		</main>
	);
}
