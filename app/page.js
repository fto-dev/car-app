import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
	return (
		<main className={styles.main}>
			<div>
				<Image
					src="/coming-soon.png"
					alt="Vercel Logo"
					width={400}
					height={400}
					priority
				/>
			</div>
		</main>
	);
}
