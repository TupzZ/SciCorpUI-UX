import React, { Component } from 'react';
import L from 'leaflet';
import styled from 'styled-components';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const MapContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 96%;
	height: 40vh;
`;

let DefaultIcon = L.icon({
	iconUrl: icon,
	shadowUrl: iconShadow,
});

export default class Mapa extends Component {
	componentDidMount() {
		L.Marker.prototype.options.icon = DefaultIcon;

		this.map = L.map('map');

		this.map.setView(
			new L.LatLng(
				this.props.estacoes[this.props.selectedEstacao].lat,
				this.props.estacoes[this.props.selectedEstacao].lng
			),
			9
		);

		this.props.estacoes.map((estacao, index) => {
			return L.marker([estacao.lat, estacao.lng])
				.addTo(this.map)
				.bindPopup(
					`<p style='text-align:center;'>${estacao.cidade}/${estacao.estado}<br/>Temp: ${estacao.temp}ºC<br/>Umidade: ${estacao.umity}%<br/>Vento: ${estacao.velWind}km/h</p>`
				)
				.on('click', this.onMapClick);
		});

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			detectRetina: true,
			maxZoom: 20,
			maxNativeZoom: 17,
		}).addTo(this.map);
	}

	onMapClick(e) {
		console.log(this.markers);
	}

	render() {
		return <MapContainer id='map' />;
	}
}
