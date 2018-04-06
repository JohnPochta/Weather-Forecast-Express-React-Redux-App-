import React, { Component } from 'react';
import {Table, Header, Body, Button, Modal} from 'semantic-ui-react';
import ForecastField from './ForecastField.js';
import geoloc from '../../func/geoloc.js';
class CurrentLocationForecast extends Component{
	constructor(props){
	  super(props);
	  this.state = {
	  	position: '',
	  };
	}
	componentWillMount(){
		geoloc(this);
	}
	render(){
		return (
			<div>
			<center>
				<Header style={{backgroundColor : 'DodgerBlue ', color : 'White'}} block>
				<p>This is a current Weather in your location: Latitude {this.state.position.coords!=undefined ? this.state.position.coords.latitude : 'in process'}, Longitude {this.state.position.coords!=undefined ? this.state.position.coords.longitude : 'in process'}</p>
				</Header>
			</center>
			<ForecastField position={this.state.position} />
			</div>
		)
	}
};

export default CurrentLocationForecast;