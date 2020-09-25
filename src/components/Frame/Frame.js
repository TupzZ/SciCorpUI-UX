import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import wet from '../../assets/icons/wet.png';
import wind from '../../assets/icons/wind.png';
import thermometer from '../../assets/icons/thermometer.png';
import styles from './Frame.module.css';

const Frame = (props) => {
	const frame = props.pages.map((page, index) => {
		const frameData = page.data.map((data, index) => {
			let icon;

			switch (data.dataName) {
				case 'Temperatura':
					icon = require('../../assets/icons/' +
						props.weatherIcon +
						'.png');
					break;
				case 'Umidade':
					icon = wet;
					break;
				case 'Velocidade do Vento':
					icon = wind;
					break;
				case 'Temperatura média':
					icon = thermometer;
					break;
				case 'Umidade média':
					icon = wet;
					break;
				case 'Velocidade do Vento média':
					icon = wind;
					break;
				default:
					icon = '';
					break;
			}

			return (
				<div className={styles.data} onClick={props.clicked}>
					<h1 className={styles.dataTitle}>{data.dataName}</h1>
					{icon !== '' ? (
						<img
							className={styles.dataIcon}
							src={icon}
							alt='Weather Icon'
						/>
					) : null}
					<h2 className={styles.dataValue}>
						{(data.value === 'Estação'
							? props.estacao
							: data.value) + (data.metric ? data.metric : '')}
					</h2>
				</div>
			);
		});
		return (
			<div key={index} className={styles.container}>
				<div className={styles.frame}>
					<h1 className={styles.frameTitle}>{page.name}</h1>
					<div className={styles.dataContainer}>{frameData}</div>
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
