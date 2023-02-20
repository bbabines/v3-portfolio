import styles from "./PortfolioVersions.module.css";
import portfolioData from "./portfolio-data.js";

export const PortfolioVersions = () => {
	return (
		<div className={styles.container}>
			{portfolioData.map((portfolio) => (
				<div key={portfolio.id}>
					<div className={styles.portfolioContainer}>
						<h6 className={styles.cardTitle}>{portfolio.title}</h6>
						<div className={styles.description}>
							{/**Make Description into a component and/or part of the data.JSON */}
							{/* <p>This is the portfolio description. It goes on and on</p> */}
						</div>
						<div className={styles.imageContainer}>
							<img src={`/${portfolio.image}`} className={styles.cardImage} />
						</div>
						<div className={styles.technology}>{portfolio.technology}</div>
						<p>Date Completed: {portfolio.date}</p>

						<div className={styles.linkContainer}>
							<a
								href={portfolio.github}
								target="_blank"
								className={styles.portfolioLink}
							>
								View Code
							</a>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
