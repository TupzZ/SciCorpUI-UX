import React, { Fragment } from 'react';
import { Dropdown } from 'react-bootstrap';
import Icofont from 'react-icofont';
import wet from '../../assets/icons/wet.png';
import wind from '../../assets/icons/wind.png';
import styles from './RealTimeBar.module.css';

const RealTimeBar = (props) => {
	const estacaoToggle = props.estacoes.map((estacao, index) => {
		return props.selectedEstacao !== estacao.id ? (
			<Dropdown.Item
				key={index}
				className={styles.dropdownItem}
				onClick={() => {
					props.toggleEstacao(estacao.id);
				}}
			>
				{estacao.cidade}/{estacao.estado}
			</Dropdown.Item>
		) : null;
	});

	const barData = (id) => {
		return props.estacoes.map((estacao, index) => {
			return index === id ? (
				<div className={styles.container} key={index}>
					<div
						onClick={props.clicked}
						className={styles.containerClima}
					>
						<img
							className={styles.icon}
							src={require('../../assets/icons/' +
								props.weatherIcon +
								'.png')}
							alt='Weather Icon'
						/>
						<h1 className={styles.climaData}>
							{estacao.temp}ºC Limpo
						</h1>
					</div>
					<div className={styles.containerUmidade}>
						<img
							className={styles.icon}
							src={wet}
							alt='Umity Icon'
						/>
						<h1 className={styles.umidadeData}>{estacao.umity}%</h1>
					</div>
					<div className={styles.containerVento}>
						<img
							className={styles.icon}
							src={wind}
							alt='Wind Icon'
						/>
						<h1 className={styles.ventoData}>
							{estacao.velWind}km/h
						</h1>
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
										{
											props.estacoes[
												props.selectedEstacao
											].cidade
										}
										/
										{
											props.estacoes[
												props.selectedEstacao
											].estado
										}
									</h1>
								</div>
							</Dropdown.Toggle>
							<div className={styles.dropdownMenu}>
								<Dropdown.Menu>{estacaoToggle}</Dropdown.Menu>
							</div>
						</Dropdown>
					</div>
				</div>
			) : null;
		});
	};

	return <Fragment>{barData(props.selectedEstacao)}</Fragment>;
};

export default RealTimeBar;
