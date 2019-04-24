import React from 'react';
import logo from './logo.svg';
import styles from './Header.module.scss';

function Header () {
	return (
		<div>
			<header className={styles.header}>
				<img src={logo} className={styles.logo} alt="logo" />
				<h1 className={styles.title}>Translator morse to english</h1>
			</header>
		</div>
	);
}

export default Header;