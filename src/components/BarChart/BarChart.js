import React from 'react';
import { Bar, Chart as Charts } from 'react-chartjs-2';

const BarChart = (props) => {
	Charts.defaults.global.legend.display = false;

	const dataCLima = {
		labels: [
			'0',
			'1',
			'2',
			'3',
			'4',
			'5',
			'6',
			'7',
			'8',
			'9',
			'10',
			'11',
			'12',
			'13',
			'14',
			'15',
			'16',
			'17',
			'18',
			'19',
			'20',
			'21',
			'22',
			'23',
		],
		datasets: [
			{
				label: 'Previsao de temperatura',
				data: [
					0,
					0,
					0,
					props.data.first,
					props.data.second,
					0,
					0,
					props.data.third,
					0,
					0,
					0,
					props.data.fourth,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
				],
				borderColor: 'rgba(0, 174, 237, 1)',
				backgroundColor: 'rgba(0, 174, 237, 0.3)',
			},
		],
	};

	const dataDados = {
		labels: [
			'01/20',
			'02/20',
			'03/20',
			'04/20',
			'05/20',
			'06/20',
			'07/20',
			'08/20',
			'09/20',
			'10/20',
			'11/20',
			'12/20',
		],
		datasets: [
			{
				label: 'Previsao de temperatura',
				data: [
					props.data.first,
					props.data.second,
					0,
					0,
					props.data.third,
					0,
					0,
					0,
					props.data.fourth,
					0,
					0,
					0,
				],
				borderColor: 'rgba(0, 174, 237, 1)',
				backgroundColor: 'rgba(0, 174, 237, 0.3)',
			},
		],
	};

	const optionsClima = {
		title: {
			display: true,
		},
		scales: {
			yAxes: [
				{
					ticks: {
						min: 0,
						max: 10,
						stepSize: 2,
					},
					scaleLabel: {
						display: true,
						labelString: props.title,
					},
				},
			],
			xAxes: [
				{
					ticks: {
						min: 0,
						max: 40,
						stepSize: 10,
					},
					scaleLabel: {
						display: true,
						labelString: 'Horas',
					},
				},
			],
		},
		layout: {
			padding: {
				left: 100,
				right: 100,
				bottom: 50,
				top: 50,
			},
		},
	};

	const optionsDados = {
		title: {
			display: true,
		},
		scales: {
			yAxes: [
				{
					ticks: {
						min: 0,
						max: 10,
						stepSize: 2,
					},
					scaleLabel: {
						display: true,
						labelString: props.title,
					},
				},
			],
			xAxes: [
				{
					ticks: {
						min: 0,
						max: 40,
						stepSize: 10,
					},
					scaleLabel: {
						display: true,
						labelString: 'Meses',
					},
				},
			],
		},
		layout: {
			padding: {
				left: 100,
				right: 100,
				bottom: 50,
				top: 50,
			},
		},
	};

	return (
		<Bar
			data={props.page === 'Clima' ? dataCLima : dataDados}
			options={props.page === 'Clima' ? optionsClima : optionsDados}
		/>
	);
};

export default BarChart;
