import React from 'react';
import Icofont from 'react-icofont';
import styles from './Frame.module.css';

const Frame = (props) => {
	return (
		<div className={styles.container}>
			<div className={styles.frame}>
				<h1 className={styles.frameTitle}>Hiperlocal</h1>
				<div className={styles.dataContainer}>
					<div className={styles.data}>
						<h1 className={styles.dataTitle}>Temperatura</h1>
						<Icofont className={styles.dataIcon} icon='sun-alt' />
						<h2 className={styles.dataValue}>26ºC</h2>
					</div>
					<div className={styles.divider}></div>
					<div className={styles.data}>
						<h1 className={styles.dataTitle}>Umidade</h1>
						<Icofont
							className={styles.dataIcon}
							icon='water-drop'
						/>
						<h2 className={styles.dataValue}>80%</h2>
					</div>
					<div className={styles.divider}></div>
					<div className={styles.data}>
						<h1 className={styles.dataTitle}>
							Velocidade do vento
						</h1>
						<Icofont className={styles.dataIcon} icon='wind' />
						<h2 className={styles.dataValue}>20km/h</h2>
					</div>
				</div>
				<div className={styles.link}>
					<a className={styles.moreInformation} href='/'>
						CLIQUE PARA MAIS INFORMAÇÕES
					</a>
				</div>
			</div>
		</div>
	);
};

export default Frame;
