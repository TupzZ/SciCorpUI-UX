import React from 'react';
import { Line, Chart as Charts } from 'react-chartjs-2';

const LineChart = (props) => {
	Charts.defaults.global.legend.display = false;

	const data = {
		labels: [
			'0h',
			'1h',
			'2h',
			'3h',
			'4h',
			'5h',
			'6h',
			'7h',
			'8h',
			'9h',
			'10h',
			'11h',
			'12h',
			'13h',
			'14h',
			'15h',
			'16h',
			'17h',
			'18h',
			'19h',
			'20h',
			'21h',
			'22h',
			'23h',
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

	const options = {
		title: {
			display: true,
			text: props.title,
		},
		scales: {
			yAxes: [
				{
					ticks: {
						min: 0,
						max: 40,
						stepSize: 10,
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

	return <Line data={data} options={options} />;
};

export default LineChart;
