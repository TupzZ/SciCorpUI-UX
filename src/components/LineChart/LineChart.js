import React from 'react';
import { Line, Chart as Charts } from 'react-chartjs-2';

const LineChart = (props) => {
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
					15,
					15,
					16,
					18,
					18,
					17,
					19,
					20,
					23,
					25,
					28,
					30,
					30,
					29,
					28,
					27,
					25,
					24,
					24,
					23,
					21,
					20,
					19,
					18,
				],
				borderColor: [`rgba(${props.data.colorPrim}, 0.6)`],
				backgroundColor: [`rgba(${props.data.colorPrim}, 0.4)`],
				pointBorderColor: `rgba(${props.data.colorSec}, 0.6)`,
				pointBackgroundColor: `rgba(${props.data.colorSec}, 0.4)`,
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
				data: [24, 20, 21, 26, 27, 22, 21, 23, 19, 17, 20, 22],
				borderColor: [`rgba(${props.data.colorPrim}, 0.6)`],
				backgroundColor: [`rgba(${props.data.colorPrim}, 0.4)`],
				pointBorderColor: `rgba(${props.data.colorSec}, 0.6)`,
				pointBackgroundColor: `rgba(${props.data.colorSec}, 0.4)`,
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
						max: 40,
						stepSize: 10,
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
						max: 40,
						stepSize: 10,
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
		<Line
			data={props.page === 'Clima' ? dataCLima : dataDados}
			options={props.page === 'Clima' ? optionsClima : optionsDados}
		/>
	);
};

export default LineChart;
