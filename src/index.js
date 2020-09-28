import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Estacoes from './container/Estacoes/Estacoes';
import Clima from './container/Clima/Clima';
import HistoricData from './container/HistoricData/HistoricData';
import Home from './container/Home/Home';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<Router>
		<Route path='/' component={Header} />
		<Route exact path='/' component={Home} />
		<Route exact path='/estacoes' component={Estacoes} />
		<Route exact path='/clima' component={Clima} />
		<Route exact path='/dados-historicos' component={HistoricData} />
		<Route path='/' component={Footer} />
	</Router>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
