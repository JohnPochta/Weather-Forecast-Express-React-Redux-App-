import React, { Component } from 'react';
import { Header} from 'semantic-ui-react';
import current_weather_request_location from '../../func/current_weather_request_location.js';
import currentWeatherRequestCityName from '../../func/currentWeatherRequestCityName.js';
import WeatherWindow from './WeatherWindow.js';
class CurrentWeather extends Component{
	state = {current_weather: {name : ''}};
	componentWillReceiveProps(next_props){
		try{
			if (next_props.location!=undefined){
				current_weather_request_location(this, next_props.location.coords.latitude, next_props.location.coords.longitude);
			}
			else if(next_props.city!=undefined){
				if (next_props.city!=''){
					currentWeatherRequestCityName(this, next_props.city);
				}
			}
		}
		catch(e){
			console.log(e);
		}
	}
	render(){
		return(
			<WeatherWindow 
				info={this.state.current_weather}
			/>       	
		)
	}
}
export default CurrentWeather;