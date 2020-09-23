import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Icofont from 'react-icofont';
import styles from './RealTime.module.css';

const RealTime = (props) => {
	return (
		<div className={styles.container}>
			<div onClick={props.clicked} className={styles.containerClima}>
				<Icofont
					className={styles.icon}
					icon={props.weatherIcon}
				></Icofont>
				<h1 className={styles.climaData}>26ºC Limpo</h1>
			</div>
			<div className={styles.containerUmidade}>
				<Icofont className={styles.icon} icon='water-drop'></Icofont>
				<h1 className={styles.umidadeData}>80%</h1>
			</div>
			<div className={styles.containerVento}>
				<Icofont className={styles.iconVento} icon='wind'></Icofont>
				<h1 className={styles.ventoData}>20km/h</h1>
			</div>
			<div className={styles.containerEstacao}>
				<Dropdown>
					<Dropdown.Toggle
						className={styles.estacaoName}
						variant='success'
						id='dropdown-basic'
					>
						<div className={styles.buttonContent}>
							<Icofont
								className={styles.iconEstacao}
								icon='google-map'
							/>
							<h1 className={styles.estacao}>São Paulo/SP</h1>
						</div>
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
						<Dropdown.Item href='#/action-2'>
							Another action
						</Dropdown.Item>
						<Dropdown.Item href='#/action-3'>
							Something else
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</div>
	);
};

export default RealTime;
