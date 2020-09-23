import React, { Component, Fragment } from 'react';
import Header from '../components/Header/Header';
import RealTime from '../components/RealTime/RealTime';
// import styles from './App.module.css';

class App extends Component {
	state = {
		weatherIcons: [
			'sun-alt',
			'sunny',
			'rainy-sunny',
			'hail-rainy',
			'rainy-thunder',
			'rainy',
			'rainy-night',
			'windy-raining',
			'windy-thunder-raining',
			'night',
			'full-night',
			'windy-night',
			'tornado',
		],
		estacoes: [
			{ cidade: 'São Paulo', estado: 'SP', id: 0 },
			{ cidade: 'Cuiabá', estado: 'MT', id: 1 },
			{ cidade: 'Campo Grande', estado: 'MS', id: 2 },
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
			<Fragment>
				<Header />
				<RealTime
					selectedEstacao={this.state.selectedEstacao}
					toggleEstacao={this.toggleSelectedEstacao}
					estacoes={this.state.estacoes}
					clicked={this.toggleWeatherIcon}
					weatherIcon={
						this.state.weatherIcons[this.state.selectedWeather]
					}
				/>
			</Fragment>
		);
	}
}

export default App;
