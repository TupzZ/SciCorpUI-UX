import React from 'react';
import styled from 'styled-components';
import styles from './Container.module.css';

const Container = (props) => {
	const ContianerDiv = styled.div`
		height: ${props.height === undefined ? 'auto' : props.height};
		width: 80%;
		padding-bottom: 2%;
		margin: 2.5% 0;
		border: 1px solid #d6d6d6;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	`;

	return (
		<ContianerDiv>
			<div className={styles.containerHeader}>{props.title}</div>
			{props.children}
		</ContianerDiv>
	);
};

export default Container;
