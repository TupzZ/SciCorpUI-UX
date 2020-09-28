import React from 'react';
import Icofont from 'react-icofont';
import styles from './Status.module.css';

const Status = (props) => {
	console.log(props.selectedOrder);

	const estacoesData = props.estacoes.map((data, index) => {
		return (
			<div className={styles.tableRow} key={index}>
				<div
					className={index % 2 === 0 ? styles.oddRow : styles.evenRow}
				>
					{data.numSerie}
				</div>
				<div
					className={index % 2 === 0 ? styles.oddRow : styles.evenRow}
				>
					{data.cidade}
				</div>
				<div
					className={
						(styles.status,
						index % 2 === 0 ? styles.oddRow : styles.evenRow)
					}
				>
					{data.statusExterno}
				</div>
				<div
					className={
						(styles.status,
						index % 2 === 0 ? styles.oddRow : styles.evenRow)
					}
				>
					{data.statusInterno}
				</div>
				<div
					className={index % 2 === 0 ? styles.oddRow : styles.evenRow}
				>
					{data.autoVer}
				</div>
			</div>
		);
	});

	return (
		<div className={styles.table}>
			<div className={styles.tableHeader}>
				<div className={styles.tableHeaderData}>
					Número de série{' '}
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
				<div className={styles.tableHeaderData}>Referência</div>
				<div className={styles.tableHeaderData}>
					Servidores externos
				</div>
				<div className={styles.tableHeaderData}>
					Servidores internos
				</div>
				<div className={styles.tableHeaderData}>
					Verficação automática
				</div>
			</div>
			{estacoesData}
		</div>
	);
};

export default Status;
