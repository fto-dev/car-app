"use client";
import Image from "next/image";
import styles from "./page.module.css";

import Mainpage from "@/components/home";

export default function Home() {
	return (
		<main className={styles.main}>
			<Mainpage />
		</main>
	);
}
