import React, { Component } from 'react';
import ComparativeCharts from '../../components/ComparativeCharts/ComparativeCharts';
import Container from '../../components/Container/Container';
import HistoricDataTable from '../../components/HistoricDataTable/HistoricDataTable';
import RealTimeBar from '../../components/RealTimeBar/RealTimeBar';
import SearchContainer from '../../components/SearchContainer/SearchContainer';
import styles from './HistoricData.module.css';

class HistoricData extends Component {
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
		historicData: [
			{
				estacao: 0,
				id: 0,
				date: '15/07/2020',
				tempMin: 10,
				tempMax: 27,
				tempMed: 20,
				grauDia: 25,
				velWindMax: 30,
				velWindMed: 20,
				umityMed: 57,
				rain: 3,
				solarRadiation: 300,
			},
			{
				estacao: 0,
				id: 1,
				date: '16/07/2020',
				tempMin: 15,
				tempMax: 32,
				tempMed: 25,
				grauDia: 27,
				velWindMax: 15,
				velWindMed: 10,
				umityMed: 45,
				rain: 0,
				solarRadiation: 500,
			},
			{
				estacao: 0,
				id: 2,
				date: '17/07/2020',
				tempMin: 20,
				tempMax: 33,
				tempMed: 26,
				grauDia: 30,
				velWindMax: 45,
				velWindMed: 21,
				umityMed: 15,
				rain: 0,
				solarRadiation: 521,
			},
			{
				estacao: 0,
				id: 3,
				date: '18/07/2020',
				tempMin: 16,
				tempMax: 28,
				tempMed: 23,
				grauDia: 21,
				velWindMax: 45,
				velWindMed: 27,
				umityMed: 70,
				rain: 5,
				solarRadiation: 274,
			},
			{
				estacao: 1,
				id: 0,
				date: '15/08/2020',
				tempMin: 10,
				tempMax: 27,
				tempMed: 20,
				grauDia: 25,
				velWindMax: 30,
				velWindMed: 20,
				umityMed: 57,
				rain: 3,
				solarRadiation: 300,
			},
			{
				estacao: 1,
				id: 1,
				date: '16/08/2020',
				tempMin: 15,
				tempMax: 32,
				tempMed: 25,
				grauDia: 27,
				velWindMax: 15,
				velWindMed: 10,
				umityMed: 45,
				rain: 0,
				solarRadiation: 500,
			},
			{
				estacao: 1,
				id: 2,
				date: '17/08/2020',
				tempMin: 20,
				tempMax: 33,
				tempMed: 26,
				grauDia: 30,
				velWindMax: 45,
				velWindMed: 21,
				umityMed: 15,
				rain: 0,
				solarRadiation: 521,
			},
			{
				estacao: 1,
				id: 3,
				date: '18/08/2020',
				tempMin: 16,
				tempMax: 28,
				tempMed: 23,
				grauDia: 21,
				velWindMax: 45,
				velWindMed: 27,
				umityMed: 70,
				rain: 5,
				solarRadiation: 274,
			},
			{
				estacao: 2,
				id: 0,
				date: '15/09/2020',
				tempMin: 10,
				tempMax: 27,
				tempMed: 20,
				grauDia: 25,
				velWindMax: 30,
				velWindMed: 20,
				umityMed: 57,
				rain: 3,
				solarRadiation: 300,
			},
			{
				estacao: 2,
				id: 1,
				date: '16/09/2020',
				tempMin: 15,
				tempMax: 32,
				tempMed: 25,
				grauDia: 27,
				velWindMax: 15,
				velWindMed: 10,
				umityMed: 45,
				rain: 0,
				solarRadiation: 500,
			},
			{
				estacao: 2,
				id: 2,
				date: '17/09/2020',
				tempMin: 20,
				tempMax: 33,
				tempMed: 26,
				grauDia: 30,
				velWindMax: 45,
				velWindMed: 21,
				umityMed: 15,
				rain: 0,
				solarRadiation: 521,
			},
			{
				estacao: 2,
				id: 3,
				date: '18/09/2020',
				tempMin: 16,
				tempMax: 28,
				tempMed: 23,
				grauDia: 21,
				velWindMax: 45,
				velWindMed: 27,
				umityMed: 70,
				rain: 5,
				solarRadiation: 274,
			},
		],
		selectedEstacao: 0,
		selectedWeather: 0,
		selectedChart: 0,
		tableOrder: true,
	};

	orderSerie = (a, b) => {
		return this.state.tableOrder ? a.id - b.id : b.id - a.id;
	};

	toggleWeatherIcon = () => {
		this.setState({
			selectedWeather: Math.floor(
				Math.random() * this.state.weatherIcons.length
			),
		});
	};

	toggleOrder = () => {
		this.setState({ tableOrder: !this.state.tableOrder });
	};

	toggleSelectedEstacao = (index) => {
		this.setState({ selectedEstacao: index });
	};

	toggleSelectedChart = (index) => {
		this.setState({ selectedChart: index });
	};

	date = (historicData) => {
		return [...historicData];
	};

	handleSubmit(event) {
		console.log(event);
	}

	componentDidMount() {
		this.date(this.state.historicData).sort(this.orderSerie);
	}

	render() {
		return (
			<div className={styles.HistoricData}>
				<RealTimeBar
					selectedEstacao={this.state.selectedEstacao}
					toggleEstacao={this.toggleSelectedEstacao}
					estacoes={this.state.estacoes}
					clicked={this.toggleWeatherIcon}
					weatherIcon={
						this.state.weatherIcons[this.state.selectedWeather]
					}
				/>
				<Container title='Dados históricos'>
					<SearchContainer
						submit={this.handleSubmit}
						toggleEstacao={this.toggleSelectedEstacao}
						selectedEstacao={this.state.selectedEstacao}
						estacoes={this.state.estacoes}
					/>
					<HistoricDataTable
						selectedOrder={this.state.tableOrder}
						toggleOrder={this.toggleOrder}
						date={this.date(this.state.historicData).sort(
							this.orderSerie
						)}
						toggleEstacao={this.toggleSelectedEstacao}
						selectedEstacao={this.state.selectedEstacao}
						estacoes={this.state.estacoes}
					/>
				</Container>
				<Container title='Gráficos comparativos'>
					<ComparativeCharts />
				</Container>
			</div>
		);
	}
}

export default HistoricData;
