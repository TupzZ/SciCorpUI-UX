import React from 'react';
import DateTime from 'react-datetime';
import styles from './SearchContainer.module.css';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';

const SearchContainer = (props) => {
	var today = moment();
	var valid = function (current) {
		return current.isBefore(today);
	};

	let inputProps = {
		className: styles.datePicker,
	};

	const rowTitle = (
		<div className={styles.row}>
			<div className={styles.column}>
				<h1 className={styles.title}>Data incial</h1>
			</div>
			<div className={styles.column}>
				<h1 className={styles.title}>Data Final</h1>
			</div>
		</div>
	);

	const rowDate = (
		<div className={styles.row}>
			<div className={styles.column}>
				<DateTime
					isValidDate={valid}
					timeFormat={false}
					inputProps={inputProps}
					dateFormat='DD/MM/YYYY'
				/>
			</div>
			<div className={styles.column}>
				<DateTime
					isValidDate={valid}
					timeFormat={false}
					inputProps={inputProps}
					dateFormat='DD/MM/YYYY'
				/>
			</div>
			<div className={styles.column}>
				<button className={styles.submit}>Pesquisar</button>
			</div>
		</div>
	);

	return (
		<div className={styles.container}>
			{rowTitle}
			{rowDate}
			<div className={styles.row}>
				{props.gdA > 0 ? (
					<h1 className={styles.gda}>
						Graus-dia acumulados:{' '}
						<span className={styles.gdaData}>{props.gdA}</span>
					</h1>
				) : null}
			</div>
		</div>
	);
};

export default SearchContainer;
