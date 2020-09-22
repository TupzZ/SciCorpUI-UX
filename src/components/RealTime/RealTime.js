import React from 'react';
import Icofont from 'react-icofont';
import styles from './RealTime.module.css';

const RealTime = (props) => {
	return (
		<div className={styles.container}>
			<div className={styles.containerClima}>
				<Icofont className={styles.icon} icon='sun'></Icofont>
				<h1 className={styles.climaData}>26ºC Limpo</h1>
			</div>
			<div className={styles.containerUmidade}>
				<Icofont className={styles.icon} icon='water-drop'></Icofont>
				<h1 className={styles.umidadeData}>80%</h1>
			</div>
			<div className={styles.containerVento}>
				<Icofont className={styles.iconVento} icon='wind'></Icofont>
				<h1 className={styles.ventoData}>20km/h</h1>
			</div>
			<div className={styles.containerEstacao}>
				<a href='/estacao?:id' className={styles.estacaoName}>
					<Icofont className={styles.iconEstacao} icon='google-map' />
					<h1>São Paulo/SP</h1>
				</a>
			</div>
		</div>
	);
};

export default RealTime;
