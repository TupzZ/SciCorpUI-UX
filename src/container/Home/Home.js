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
				numSerie: 25055,
				status: 'Online',
			},
			{
				id: 1,
				cidade: 'Cuiabá',
				estado: 'MT',
				numSerie: 25056,
				status: 'Offline',
			},
			{
				id: 2,
				cidade: 'Campo Grande',
				estado: 'MS',
				numSerie: 25057,
				status: 'Online',
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
