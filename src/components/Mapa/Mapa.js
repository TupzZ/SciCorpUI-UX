import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Estacoes = (props) => {
	const mapStyles = {
		height: '100%',
		width: '96%',
		zIndex: '-1',
	};

	return (
		<LoadScript googleMapsApiKey='AIzaSyAE1ch9viPdjRnJjTDo_9pHIGFQTVZdZQA'>
			<GoogleMap
				mapContainerStyle={mapStyles}
				zoom={7}
				center={props.defaultCenter}
			/>
		</LoadScript>
	);
};

export default Estacoes;
