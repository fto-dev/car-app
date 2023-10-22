"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from "@/components/header";

import Mainpage from "@/components/home";
import Favorites from "@/components/favorites";

export default function Home() {
	return (
		<main className={styles.main}>
			<Router>
				<Header Link={Link} />
				<Routes>
					<Route
						path="/"
						element={<Mainpage />}
					/>
					<Route
						path="favorites"
						element={<Favorites />}
					/>
				</Routes>
			</Router>
		</main>
	);
}
