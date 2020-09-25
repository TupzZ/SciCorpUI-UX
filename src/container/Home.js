import React, { Component, Fragment } from 'react';
import RealTime from '../components/RealTime/RealTime';
import Frame from '../components/Frame/Frame';
import './Home.css';

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
				<RealTime
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
					weatherIcon={
						this.state.weatherIcons[this.state.selectedWeather]
					}
				/>
				<Frame
					clicked={this.toggleWeatherIcon}
					weatherIcon={
						this.state.weatherIcons[this.state.selectedWeather]
					}
				/>
				<Frame
					clicked={this.toggleWeatherIcon}
					weatherIcon={
						this.state.weatherIcons[this.state.selectedWeather]
					}
				/>
			</Fragment>
		);
	}
}

export default Home;
