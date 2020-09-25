import React, { Component } from 'react';
import RealTime from '../components/RealTime/RealTime';
import Frame from '../components/Frame/Frame';
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
			{ cidade: 'São Paulo', estado: 'SP', id: 0 },
			{ cidade: 'Cuiabá', estado: 'MT', id: 1 },
			{ cidade: 'Campo Grande', estado: 'MS', id: 2 },
		],
		pages: [
			{
				name: 'Tempo Real',
				slug: 'tempo-real',
				data: {
					temperature: 26,
					umity: 80,
					windSpeed: 20,
				},
			},
			{ name: 'Estações', slug: 'estacoes' },
			{ name: 'Dados Históricos', slug: 'dados-historicos' },
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
				<RealTime
					selectedEstacao={this.state.selectedEstacao}
					toggleEstacao={this.toggleSelectedEstacao}
					estacoes={this.state.estacoes}
					clicked={this.toggleWeatherIcon}
					weatherIcon={
						this.state.weatherIcons[this.state.selectedWeather]
					}
				/>
				<h1 id={styles.homeTitle}>
					Estação:{' '}
					{this.state.estacoes[this.state.selectedEstacao].cidade}/
					{this.state.estacoes[this.state.selectedEstacao].estado}
				</h1>
				<Frame
					clicked={this.toggleWeatherIcon}
					pages={this.state.pages}
					weatherIcon={
						this.state.weatherIcons[this.state.selectedWeather]
					}
				/>
			</div>
		);
	}
}

export default Home;
