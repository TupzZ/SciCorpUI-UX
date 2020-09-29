import React, { Component, Fragment } from 'react';
import Container from '../../components/Container/Container';
import Mapa from '../../components/Mapa/Mapa';
import Status from '../../components/Status/Status';
import RealTimeBar from '../../components/RealTimeBar/RealTimeBar';
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
				statusInterno: 'Offline',
				autoVer: '27/09/2020 - 13:45:54',
				temp: 26,
				umity: 60,
				velWind: 15,
				windDirection: 'S',
				rain: 5,
				probRain: 90,
				radiation: 240,
				uv: 5,
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
				autoVer: '25/09/2020 - 17:40:04',
				temp: 32,
				umity: 40,
				velWind: 10,
				windDirection: 'S',
				rain: 0,
				probRain: 0,
				radiation: 400,
				uv: 8,
			},
			{
				id: 2,
				cidade: 'Campo Grande',
				estado: 'MS',
				lat: -20.480925,
				lng: -54.7055738,
				numSerie: 25057,
				statusExterno: 'Offline',
				statusInterno: 'Online',
				autoVer: '26/09/2020 - 03:17:32',
				temp: 36,
				umity: 15,
				velWind: 5,
				windDirection: 'S',
				rain: 2,
				probRain: 42,
				radiation: 450,
				uv: 8,
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

	estacoesStatus = (estacoes) => {
		return [...estacoes];
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
		this.estacoesStatus(this.state.estacoes).sort(this.orderSerie);
	}

	render() {
		return (
			<Fragment>
				<RealTimeBar
					selectedEstacao={this.state.selectedEstacao}
					toggleEstacao={this.toggleSelectedEstacao}
					estacoes={this.state.estacoes}
					clicked={this.toggleWeatherIcon}
					weatherIcon={
						this.state.weatherIcons[this.state.selectedWeather]
					}
				/>
				<div className={styles.container}>
					<Container title='Mapa das estações'>
						<Mapa
							defaultCenter={this.state.defaultCenter}
							estacoes={this.state.estacoes}
							clicked={this.toggleOpen}
							openInfoWindow={this.state.openInfoWindowId}
							isOpen={this.state.isOpen}
						/>
					</Container>
					<Container title='Situação das estações'>
						<Status
							selectedOrder={this.state.tableOrder}
							toggleOrder={this.toggleOrder}
							estacoes={this.estacoesStatus(
								this.state.estacoes
							).sort(this.orderSerie)}
						/>
					</Container>
				</div>
			</Fragment>
		);
	}
}

export default Estacoes;
