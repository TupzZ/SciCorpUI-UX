import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import wet from '../../assets/icons/wet.png';
import wind from '../../assets/icons/wind.png';
import styles from './Frame.module.css';

const Frame = (props) => {
	const frame = props.pages.map((page, index) => {
		return (
			<div key={index} className={styles.container}>
				<div className={styles.frame}>
					<h1 className={styles.frameTitle}>{page.name}</h1>
					<div className={styles.dataContainer}>
						<div className={styles.data} onClick={props.clicked}>
							<h1 className={styles.dataTitle}>TEMPERATURA</h1>
							<img
								className={styles.dataIcon}
								src={require('../../assets/icons/' +
									props.weatherIcon +
									'.png')}
								alt='Weather Icon'
							/>
							<h2 className={styles.dataValue}>26ºC</h2>
						</div>
						<div className={styles.divider}></div>
						<div className={styles.data}>
							<h1 className={styles.dataTitle}>Umidade</h1>
							<img
								className={styles.dataIcon}
								src={wet}
								alt='Umity Icon'
							/>
							<h2 className={styles.dataValue}>80%</h2>
						</div>
						<div className={styles.divider}></div>
						<div className={styles.data}>
							<h1 className={styles.dataTitle}>
								Velocidade do vento
							</h1>{' '}
							<img
								className={styles.dataIcon}
								src={wind}
								alt='Wind Icon'
							/>
							<h2 className={styles.dataValue}>20km/h</h2>
						</div>
					</div>
					<div className={styles.link}>
						<Link
							className={styles.moreInformation}
							to={'/' + page.slug}
						>
							CLIQUE PARA MAIS INFORMAÇÕES
						</Link>
					</div>
				</div>
			</div>
		);
	});
	return <Fragment>{frame}</Fragment>;
};

export default Frame;
