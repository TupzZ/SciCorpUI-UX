import React, { Component } from 'react';
import RealTimeBar from '../../components/RealTimeBar/RealTimeBar';
import Frame from '../../components/Frame/Frame';
import styles from './Home.module.css';

class Home extends Component {
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
				name: 'Clima',
				slug: 'clima',
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
	};

	toggleSelectedEstacao = (index) => {
		this.setState({ selectedEstacao: index });
	};

	toggleWeatherIcon = () => {
		this.setState({
			selectedWeather: Math.floor(
				Math.random() * this.state.weatherIcons.length
			),
		});
	};

	render() {
		return (
			<div className={styles.App}>
				<RealTimeBar
					selectedEstacao={this.state.selectedEstacao}
					toggleEstacao={this.toggleSelectedEstacao}
					estacoes={this.state.estacoes}
					clicked={this.toggleWeatherIcon}
					weatherIcon={
						this.state.weatherIcons[this.state.selectedWeather]
					}
				/>
				<Frame
					clicked={this.toggleWeatherIcon}
					pages={this.state.pages}
					estacoes={this.state.estacoes}
					selectedEstacao={this.state.selectedEstacao}
					weatherIcon={
						this.state.weatherIcons[this.state.selectedWeather]
					}
				/>
			</div>
		);
	}
}

export default Home;
