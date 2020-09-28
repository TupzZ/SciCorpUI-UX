import React from 'react';
import { Dropdown } from 'react-bootstrap';
import LineChart from '../LineChart/LineChart';
import Icofont from 'react-icofont';
import styles from './Hiperlocal.module.css';
import uv from '../../assets/images/uv-extreme.png';
import BarChart from '../BarChart/BarChart';

const Hiperlocal = (props) => {
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

	const climaData = (
		<div className={styles.contentContainer}>
			<div className={styles.dataContainer}>
				<div className={styles.dataColumn}>
					<div className={styles.dataDiv}>
						<span className={styles.dataTitle}>Temperatura</span>
						<span className={styles.data}>
							<Icofont
								icon='thermometer'
								className={styles.tempIcon}
							/>
							{props.estacoes[props.selectedEstacao].temp}ºC
						</span>
					</div>
					<div className={styles.dataDiv}>
						<span className={styles.dataTitle}>Vento</span>
						<span className={styles.data}>
							<Icofont
								icon='long-arrow-down'
								className={styles.windIcon}
							/>
							{
								props.estacoes[props.selectedEstacao]
									.windDirection
							}{' '}
							- {props.estacoes[props.selectedEstacao].velWind}
							km/h
						</span>
					</div>
					<div className={styles.dataDiv}>
						<span className={styles.dataTitle}>Umidade</span>
						<span className={styles.data}>
							<Icofont
								icon='water-drop'
								className={styles.umityIcon}
							/>
							{props.estacoes[props.selectedEstacao].umity}%
						</span>
					</div>
					<div className={styles.dataDiv}>
						<span className={styles.dataTitle}>Chuva</span>
						<span className={styles.data}>
							<Icofont icon='rainy' className={styles.rainIcon} />
							{props.estacoes[props.selectedEstacao].rain}mm
						</span>
					</div>
					<div className={styles.dataDiv}>
						<span className={styles.dataTitle}>Radiação Solar</span>
						<span className={styles.data}>
							<Icofont
								icon='sun'
								className={styles.radiationIcon}
							/>
							{props.estacoes[props.selectedEstacao].radiation}{' '}
							W/m²
						</span>
					</div>
					<div className={styles.dataDiv}>
						<span className={styles.dataTitle}>Índice UV</span>
						<span className={styles.data}>
							<img
								src={uv}
								alt='UV icon'
								className={styles.uvIcon}
							/>
							{props.estacoes[props.selectedEstacao].uv}
						</span>
					</div>
				</div>
			</div>
		</div>
	);

	const resume = (
		<div className={styles.contentContainer}>
			<div className={styles.dayResume}>
				<div className={styles.resume}>
					<img
						onClick={props.clicked}
						src={require('../../assets/icons/' +
							props.weatherIcon +
							'.png')}
						alt='Weather Icon'
						className={styles.resumeImg}
					></img>
					<span className={styles.resumeName}>Madrugada</span>
				</div>
				<div className={styles.resume}>
					<img
						onClick={props.clicked}
						src={require('../../assets/icons/' +
							props.weatherIcon +
							'.png')}
						alt='Weather Icon'
						className={styles.resumeImg}
					></img>
					<span className={styles.resumeName}>Manhã</span>
				</div>
				<div className={styles.resume}>
					<img
						onClick={props.clicked}
						src={require('../../assets/icons/' +
							props.weatherIcon +
							'.png')}
						alt='Weather Icon'
						className={styles.resumeImg}
					></img>
					<span className={styles.resumeName}>Tarde</span>
				</div>
				<div className={styles.resume}>
					<img
						onClick={props.clicked}
						src={require('../../assets/icons/' +
							props.weatherIcon +
							'.png')}
						alt='Weather Icon'
						className={styles.resumeImg}
					></img>
					<span className={styles.resumeName}>Noite</span>
				</div>
			</div>
		</div>
	);

	const resumePrevisao = (data, metric, titles, icons) => {
		return (
			<div className={styles.contentContainer}>
				<div className={styles.previsaoContainer}>
					<div className={styles.previsao}>
						<span className={styles.previsaoData}>
							{icons.firstValue ? (
								<Icofont
									icon={icons.firstValue}
									className={styles.minIcon}
								/>
							) : null}
							{data.firstValue}
							{metric.firstValue}
						</span>
						<span className={styles.previsaoName}>
							{titles.firstValue}
						</span>
					</div>
					<div className={styles.previsao}>
						<span className={styles.previsaoData}>
							{icons.secondValue ? (
								<Icofont
									icon={icons.secondValue}
									className={styles.maxIcon}
								/>
							) : null}
							{data.secondValue}
							{metric.secondValue}
						</span>
						<span className={styles.previsaoName}>
							{titles.secondValue}
						</span>
					</div>
				</div>
			</div>
		);
	};

	const header = (title) => {
		return (
			<div className={styles.hiperlocalHeader}>
				<div className={styles.container}>
					<div className={styles.containerTitle}>
						<span className={styles.title}>{title}</span>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className={styles.containerAll}>
			<div className={styles.estacao}>
				<Dropdown>
					<Dropdown.Toggle
						className={styles.estacaoSerie}
						variant='success'
						id='dropdown-basic'
					>
						<span className={styles.hiperlocalEstacao}>
							{props.estacoes[props.selectedEstacao].cidade}/
							{props.estacoes[props.selectedEstacao].estado}
							<Icofont icon='caret-down' />
						</span>
					</Dropdown.Toggle>
					<div className={styles.dropdownMenu}>
						<Dropdown.Menu>{estacaoToggle}</Dropdown.Menu>
					</div>
				</Dropdown>
			</div>
			<div className={styles.hiperlocalContainer}>
				{header('Clima atual na estação')}
				{resume}
				{climaData}
			</div>
			<div className={styles.hiperlocalContainer}>
				{header('Previsão do tempo na estação')}
				{resumePrevisao(
					{ firstValue: 15, secondValue: 30 },
					{ firstValue: 'ºC', secondValue: 'ºC' },
					{ firstValue: 'Mínima', secondValue: 'Máxima' },
					{
						firstValue: 'long-arrow-down',
						secondValue: 'long-arrow-up',
					}
				)}
				<LineChart title='Previsão de temperatura (em ºC)' />
				{resumePrevisao(
					{
						firstValue: props.estacoes[props.selectedEstacao].rain,
						secondValue: 90,
					},
					{ firstValue: 'mm', secondValue: '%' },
					{
						firstValue: 'Volume de chuva',
						secondValue: 'Probabilidade',
					},
					{
						firstValue: 'water-drop',
						secondValue: false,
					}
				)}
				<BarChart title='Previsão de chuva (em mm)' />
			</div>
		</div>
	);
};

export default Hiperlocal;
