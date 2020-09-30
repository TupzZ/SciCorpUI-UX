import React from 'react';
import LineChart from '../LineChart/LineChart';
import BarChart from '../BarChart/BarChart';
import SearchContainer from '../SearchContainer/SearchContainer';
import styles from './ComparativeCharts.module.css';

const ComparativeCharts = (props) => {
	const title = (title) => {
		return (
			<div className={styles.contentContainer}>
				<span className={styles.dataTitle}>{title}</span>
			</div>
		);
	};

	return (
		<div className={styles.container}>
			<SearchContainer />
			{title('Temperatura')}
			<LineChart
				title='Temperatura (em ºC)'
				data={{ colorPrim: '255, 206, 8', colorSec: '237, 182, 0' }}
			/>
			{title('Chuva')}
			<BarChart
				title='Chuva (em mm)'
				data={{
					first:
						props.estacoes[props.selectedEstacao].rain === 5
							? 1
							: props.estacoes[props.selectedEstacao].rain === 2
							? 1
							: 0,
					second:
						props.estacoes[props.selectedEstacao].rain === 5
							? 2
							: 0,
					third:
						props.estacoes[props.selectedEstacao].rain === 5
							? 1
							: props.estacoes[props.selectedEstacao].rain === 2
							? 1
							: 0,
					fourth:
						props.estacoes[props.selectedEstacao].rain === 5
							? 1
							: 0,
					maxTick:
						props.estacoes[props.selectedEstacao].rain === 5
							? 5
							: props.estacoes[props.selectedEstacao].rain === 2
							? 3
							: 2,
				}}
			/>
			{title('Intensidade do Vento')}
			<LineChart
				title='Intensidade do vento (em km/h)'
				data={{
					colorPrim: '140, 207, 134',
					colorSec: '99, 199, 103',
				}}
			/>
			{title('Umidade')}
			<LineChart
				title='Umidade (em %)'
				data={{
					colorPrim: '0, 174, 237',
					colorSec: '0, 138, 237',
				}}
			/>
		</div>
	);
};

export default ComparativeCharts;
