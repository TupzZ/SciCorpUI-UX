import React from 'react';
import Icofont from 'react-icofont';
import styles from './HistoricDataTable.module.css';

const HistoricDataTable = (props) => {
	let rowCount = -1;
	const historicData = props.date.map((data, index) => {
		if (props.date[index].estacao === props.selectedEstacao) {
			rowCount = rowCount + 1;
			return (
				<div className={styles.tableRow} key={index}>
					<div
						className={`${
							rowCount % 2 === 0 ? styles.oddRow : styles.evenRow
						} ${styles.date}`}
					>
						<span>{data.date}</span>
					</div>
					<div
						className={
							rowCount % 2 === 0 ? styles.oddRow : styles.evenRow
						}
					>
						<span>{data.tempMin}</span>
					</div>
					<div
						className={
							(styles.status,
							rowCount % 2 === 0 ? styles.oddRow : styles.evenRow)
						}
					>
						<span>{data.tempMed}</span>
					</div>
					<div
						className={
							(styles.status,
							rowCount % 2 === 0 ? styles.oddRow : styles.evenRow)
						}
					>
						<span>{data.tempMax}</span>
					</div>
					<div
						className={
							rowCount % 2 === 0 ? styles.oddRow : styles.evenRow
						}
					>
						<span>{data.velWindMed}</span>
					</div>
					<div
						className={
							rowCount % 2 === 0 ? styles.oddRow : styles.evenRow
						}
					>
						<span>{data.velWindMax}</span>
					</div>
					<div
						className={
							rowCount % 2 === 0 ? styles.oddRow : styles.evenRow
						}
					>
						<span>{data.umityMed}</span>
					</div>
					<div
						className={
							rowCount % 2 === 0 ? styles.oddRow : styles.evenRow
						}
					>
						<span>{data.rain}</span>
					</div>
					<div
						className={
							rowCount % 2 === 0 ? styles.oddRow : styles.evenRow
						}
					>
						<span>{data.solarRadiation}</span>
					</div>
				</div>
			);
		}
	});

	return (
		<div className={styles.table}>
			<div className={styles.tableHeader}>
				<div className={styles.tableHeaderData}>
					Data{' '}
					<button
						onClick={props.toggleOrder}
						className={styles.orderButton}
					>
						{props.selectedOrder ? (
							<Icofont icon='caret-down' />
						) : (
							<Icofont icon='caret-up' />
						)}
					</button>
				</div>
				<div className={styles.tableHeaderData}>
					Temp<span className={styles.desc}>Mín. (ºC)</span>
				</div>
				<div className={styles.tableHeaderData}>
					Temp<span className={styles.desc}>Méd. (ºC)</span>
				</div>
				<div className={styles.tableHeaderData}>
					Temp<span className={styles.desc}>Máx. (ºC)</span>
				</div>
				<div className={styles.tableHeaderData}>
					Vento<span className={styles.desc}>Méd. (km/h)</span>
				</div>
				<div className={styles.tableHeaderData}>
					Vento<span className={styles.desc}>Máx. (km/h)</span>
				</div>
				<div className={styles.tableHeaderData}>
					Umidade<span className={styles.desc}>Méd. (%)</span>
				</div>
				<div className={styles.tableHeaderData}>
					Chuva<span className={styles.desc}>Total (mm)</span>
				</div>
				<div className={styles.tableHeaderData}>
					Radiação solar<span className={styles.desc}>(W/m²)</span>
				</div>
			</div>
			{historicData}
		</div>
	);
};

export default HistoricDataTable;
