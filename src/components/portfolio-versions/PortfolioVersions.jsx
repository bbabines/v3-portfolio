import styles from "./PortfolioVersions.module.css";
// import PortfolioData from "./portfolio-data.jsx";
import { default as portfolios } from "./portfolio-data.jsx";

export const VersionOne = () => {
	// console.log(PortfolioData);
	console.log(portfolios);
	return (
		<div className={styles.container}>
			<p>{portfolios.title}</p>
			<p>Test</p>
		</div>
	);
};
