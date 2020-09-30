import React from 'react';
import greyLogo from '../../assets/images/scicrop-grey.png';
import styles from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.imgContainer}>
				<img className={styles.img} src={greyLogo} alt='Grey logo' />
			</div>
			<div className={styles.infoContainer}>
				<p className={styles.info}>
					Projeto salvo no{' '}
					<a
						href='https://github.com/TupzZ/SciCorpUI-UX'
						rel='noopener noreferrer'
						target='_blank'
						className={styles.link}
					>
						GitHub
					</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
