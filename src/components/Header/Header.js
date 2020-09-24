import React from 'react';
import { Link } from 'react-router-dom';
import Icofont from 'react-icofont';
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
				<Link to='/' className={styles.headerLink}>
					HOME
				</Link>
				<Link to='/estacoes' className={styles.headerLink}>
					ESTAÇÕES
				</Link>
				<Link to='/hiperlocal' className={styles.headerLink}>
					HIPERLOCAL
				</Link>
				<Link to='/dados-historicos' className={styles.headerLink}>
					DADOS HISTÓRICOS
				</Link>
			</div>
			<div className={styles.userContainer}>
				<Link to='/user' className={styles.userFrame}>
					<Icofont className={styles.userIcon} icon='user-alt-7' />
				</Link>
			</div>
		</header>
	);
};

export default Header;
