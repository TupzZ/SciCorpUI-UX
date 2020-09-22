import React from 'react';
import Header from '../components/Header/Header';
import RealTime from '../components/RealTime/RealTime';
import styles from './App.module.css';

function App() {
	return (
		<div className='App'>
			<Header />
			<RealTime />
		</div>
	);
}

export default App;
