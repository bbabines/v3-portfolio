import Head from "next/head";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import styles from "@/styles/Home.module.css";

export default function Home() {
	return (
		<>
			<Head>
				<title>Brad's Portfolio</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<main>
				<div>
					<Navbar />
					<HeroSection />
				</div>
			</main>
		</>
	);
}
