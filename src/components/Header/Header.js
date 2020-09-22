import React from 'react';
import Icofont from 'react-icofont';
import logo from '../../assets/images/logo-scicrop.png';
import styles from './Header.module.css';

const Header = (props) => {
	return (
		<header className={styles.header}>
			<div className={styles.logoContainer}>
				<a className={styles.logo} href='/'>
					<img
						className={styles.logo}
						src={logo}
						alt='Logo SciCrop'
					/>
				</a>
			</div>
			<div className={styles.linksContainer}>
				<a href='/' className={styles.headerLink}>
					HOME
				</a>
				<a href='/estacoes' className={styles.headerLink}>
					ESTAÇÕES
				</a>
				<a href='/hiperlocal' className={styles.headerLink}>
					HIPERLOCAL
				</a>
				<a href='/dados-historicos' className={styles.headerLink}>
					DADOS HISTÓRICOS
				</a>
			</div>
			<div className={styles.userContainer}>
				<a href='/user' className={styles.userFrame}>
					<Icofont className={styles.userIcon} icon='user-alt-7' />
				</a>
			</div>
		</header>
	);
};

export default Header;
