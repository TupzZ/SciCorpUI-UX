import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-scicrop.png';
import styles from './Header.module.css';

const Header = (props) => {
	return (
		<header className={styles.header}>
			<div className={styles.logoContainer}>
				<Link className={styles.logo} to='/'>
					<img
						className={styles.logo}
						src={logo}
						alt='Logo SciCrop'
					/>
				</Link>
			</div>
			<div className={styles.linksContainer}>
				<Link to='/estacoes' className={styles.headerLink}>
					ESTAÇÕES
				</Link>
				<Link to='/clima' className={styles.headerLink}>
					CLIMA
				</Link>
				<Link to='/dados-historicos' className={styles.headerLink}>
					DADOS HISTÓRICOS
				</Link>
			</div>
		</header>
	);
};

export default Header;
