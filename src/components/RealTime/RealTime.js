import React from 'react';
import { Dropdown } from 'react-bootstrap';
import Icofont from 'react-icofont';
import styles from './RealTime.module.css';

const RealTime = (props) => {
	let estacaoToggle = props.estacoes.map((estacao, index) => {
		return props.selectedEstacao !== estacao.id ? (
			<Dropdown.Item
				className={styles.dropdownItem}
				onClick={() => {
					props.toggleEstacao(estacao.id);
				}}
			>
				{estacao.cidade}/{estacao.estado}
			</Dropdown.Item>
		) : null;
	});

	return (
		<div className={styles.container}>
			<div onClick={props.clicked} className={styles.containerClima}>
				<Icofont
					className={styles.icon}
					icon={props.weatherIcon}
				></Icofont>
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
				<Dropdown>
					<Dropdown.Toggle
						className={styles.estacaoName}
						variant='success'
						id='dropdown-basic'
					>
						<div className={styles.buttonContent}>
							<div>
								<Icofont
									className={styles.iconEstacao}
									icon='google-map'
								/>
							</div>
							<h1 className={styles.estacao}>
								{props.estacoes[props.selectedEstacao].cidade}/
								{props.estacoes[props.selectedEstacao].estado}
							</h1>
						</div>
					</Dropdown.Toggle>
					<div className={styles.dropdownMenu}>
						<Dropdown.Menu>{estacaoToggle}</Dropdown.Menu>
					</div>
				</Dropdown>
			</div>
		</div>
	);
};

export default RealTime;
