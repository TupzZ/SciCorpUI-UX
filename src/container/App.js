import React from 'react';
import Header from '../components/Header/Header';
import RealTime from '../components/RealTime/RealTime';
import styles from './App.module.css';

function App() {
	const state = {
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
	};

	return (
		<div className='App'>
			<Header />
			<RealTime />
		</div>
	);
}

export default App;
