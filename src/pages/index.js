import Head from "next/head";

import Navbar from "@/components/navbar/Navbar";
import HeroSection from "@/components/hero-section/HeroSection";
import SkillsSection from "@/components/skills-section/SkillsSection";
import ProjectSection from "@/components/project-section/ProjectSection";
import ContactSection from "@/components/contact-section/ContactSection";
import Footer from "@/components/footer/Footer";

export default function Home() {
	return (
		<>
			<Head>
				<title>Brad's Portfolio</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Navbar />
			<HeroSection />
			<SkillsSection />
			<ProjectSection />
			<ContactSection />
			<Footer />
		</>
	);
}
