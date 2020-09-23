import React, { Component } from 'react';
import Header from '../components/Header/Header';
import RealTime from '../components/RealTime/RealTime';
import styles from './App.module.css';

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
		estacoes: ['São Paulo/SP', 'Cuiabá/MT', 'Campo Grande/MS'],
		selectedWeather: 0,
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
			<div className='App'>
				<Header />
				<RealTime
					clicked={this.toggleWeatherIcon}
					weatherIcon={
						this.state.weatherIcons[this.state.selectedWeather]
					}
				/>
				<button onClick={this.toggleWeatherIcon}>
					Toggle weather icon
				</button>
			</div>
		);
	}
}

export default App;
