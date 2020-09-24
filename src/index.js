import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import Header from './components/Header/Header';
import App from './container/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<Router>
		<Route path='/' component={Header} />
		<Route exact path='/' component={App} />
	</Router>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
