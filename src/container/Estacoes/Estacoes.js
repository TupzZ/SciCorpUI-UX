import React, { Component, Fragment } from 'react';
import Container from '../../components/Container/Container';
import Mapa from '../../components/Mapa/Mapa';
import Status from '../../components/Status/Status';
import RealTime from '../../components/RealTime/RealTime';
import styles from './Estacoes.module.css';

class Estacoes extends Component {
	state = {
		weatherIcons: [
			'sun',
			'clouds',
			'wet',
			'fog',
			'haze',
			'full-moon',
			'hail',
			'night',
			'party-cloud',
			'rain-cloud',
			'rain',
			'storm',
			'stormy',
			'tornado',
			'torrential',
			'windy',
		],
		estacoes: [
			{
				id: 0,
				cidade: 'São Paulo',
				estado: 'SP',
				lat: -23.56918,
				lng: -46.6918237,
				numSerie: 25055,
				statusExterno: 'Online',
				statusInterno: 'Online',
				autoVer: '27/09/2020 - 13:45:54',
			},
			{
				id: 1,
				cidade: 'Cuiabá',
				estado: 'MT',
				lat: -15.6142309,
				lng: -56.1118468,
				numSerie: 25056,
				statusExterno: 'Online',
				statusInterno: 'Online',
				autoVer: '27/09/2020 - 13:45:54',
			},
			{
				id: 2,
				cidade: 'Campo Grande',
				estado: 'MS',
				lat: -20.480925,
				lng: -54.7055738,
				numSerie: 25057,
				statusExterno: 'Online',
				statusInterno: 'Online',
				autoVer: '27/09/2020 - 13:45:54',
			},
		],
		pages: [
			{
				name: 'Tempo Real',
				slug: 'tempo-real',
				data: [
					{ dataName: 'Temperatura', value: 26, metric: 'ºC' },
					{ dataName: 'Umidade', value: 80, metric: '%' },
					{
						dataName: 'Velocidade do Vento',
						value: 20,
						metric: 'km/h',
					},
				],
			},
			{
				name: 'Estações',
				slug: 'estacoes',
				data: [
					{
						dataName: 'Local',
						value: 'Estação',
						metric: false,
					},
					{
						dataName: 'Número de série',
						value: 252045,
						metric: false,
					},
					{
						dataName: 'Status da estação',
						value: 'Online',
						metric: false,
					},
				],
			},
			{
				name: 'Dados históricos',
				slug: 'dados-historicos',
				data: [
					{
						dataName: 'Temperatura média',
						value: 24.7,
						metric: 'ºC',
					},
					{ dataName: 'Umidade média', value: 82.4, metric: '%' },
					{
						dataName: 'Velocidade do Vento média',
						value: 14.6,
						metric: 'km/h',
					},
				],
			},
		],
		selectedEstacao: 0,
		selectedWeather: 0,
		tableOrder: true,
		defaultCenter: {},
	};

	orderSerie = (a, b) => {
		return this.state.tableOrder
			? a.numSerie - b.numSerie
			: b.numSerie - a.numSerie;
	};

	toggleOrder = () => {
		this.setState({ tableOrder: !this.state.tableOrder });
	};

	toggleSelectedEstacao = (index) => {
		this.setState({ selectedEstacao: index });

		this.selectedEstacao();
	};

	toggleWeatherIcon = () => {
		this.setState({
			selectedWeather: Math.floor(
				Math.random() * this.state.weatherIcons.length
			),
		});
	};

	selectedEstacao = () => {
		this.setState({
			defaultCenter: {
				lat: this.state.estacoes[this.state.selectedEstacao].lat,
				lng: this.state.estacoes[this.state.selectedEstacao].lng,
			},
		});
	};

	componentDidMount() {
		this.selectedEstacao();
		this.state.estacoes.sort(this.orderSerie);
	}

	render() {
		return (
			<Fragment>
				<RealTime
					selectedEstacao={this.state.selectedEstacao}
					toggleEstacao={this.toggleSelectedEstacao}
					estacoes={this.state.estacoes}
					clicked={this.toggleWeatherIcon}
					weatherIcon={
						this.state.weatherIcons[this.state.selectedWeather]
					}
				/>
				<div className={styles.container}>
					<Container title='Mapa das estações' height='65vh'>
						<Mapa defaultCenter={this.state.defaultCenter} />
					</Container>
					<Container title='Situação das estações'>
						<Status
							selectedOrder={this.state.tableOrder}
							toggleOrder={this.toggleOrder}
							estacoes={this.state.estacoes.sort(this.orderSerie)}
						/>
					</Container>
				</div>
			</Fragment>
		);
	}
}

export default Estacoes;
