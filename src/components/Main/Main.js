import React from 'react';
import styles from './Main.module.scss';

function Main (props) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.panel}>{props.left}</div>
			<div className={styles.panel}>Button</div>
			<div className={styles.panel}>{props.right}</div>
		</div>
	);
};

export default Main;
