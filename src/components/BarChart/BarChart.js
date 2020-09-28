import React from 'react';
import { Bar, Chart as Charts } from 'react-chartjs-2';

const BarChart = (props) => {
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
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					1,
					2,
					0,
					0,
					1,
					0,
					0,
					0,
					1,
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
						max: 5,
						stepSize: 1,
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

	return <Bar data={data} options={options} />;
};

export default BarChart;
