import Head from "next/head";

import Navbar from "@/components/navbar/Navbar";
import HeroSection from "@/components/hero-section/HeroSection";

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
