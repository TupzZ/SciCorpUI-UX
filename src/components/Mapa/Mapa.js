import React from 'react';
import {
	GoogleMap,
	InfoWindow,
	LoadScript,
	Marker,
} from '@react-google-maps/api';

const Estacoes = (props) => {
	const infoWindow = () => {
		if (this.state.isOpen) {
			return (
				<InfoWindow
					position={{
						lat: props.estacoes[this.state.openInfoWindow].lat,
						lng: props.estacoes[this.state.openInfoWindow].lng,
					}}
				>
					<div>
						<h2>
							{props.estacoes[this.state.openInfoWindow].cidade}
						</h2>
					</div>
				</InfoWindow>
			);
		}
		console.log(this.state.openInfoWindow, this.state.isOpen);
	};

	const mapStyles = {
		height: '55vh',
		width: '96%',
	};

	return (
		<LoadScript googleMapsApiKey='AIzaSyAE1ch9viPdjRnJjTDo_9pHIGFQTVZdZQA'>
			<GoogleMap
				mapContainerStyle={mapStyles}
				zoom={7}
				center={props.defaultCenter}
				clickableIcons={true}
			>
				{props.estacoes.map((marker, index) => (
					<Marker
						key={index}
						position={{ lat: marker.lat, lng: marker.lng }}
						onClick={() => {}}
					/>
				))}
				{infoWindow}
			</GoogleMap>
		</LoadScript>
	);
};

export default Estacoes;
