import styles from "./PortfolioVersions.module.css";

import portfolioData from "./portfolio-data.js";

export const PortfolioVersions = () => {
	// console.log(portfolioData);
	return (
		<div className={styles.container}>
			{portfolioData.map((portfolio) => (
				<p key={portfolio.id}>{portfolio.title}</p>
			))}
		</div>
	);
};
