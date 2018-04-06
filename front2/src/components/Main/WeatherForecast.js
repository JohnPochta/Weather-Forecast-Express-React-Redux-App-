import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import weather_forecast_request_location from '../../func/weather_forecast_request_location.js';
import weatherForecastRequestCityName from '../../func/weatherForecastRequestCityName.js';
import WeatherWindow from './WeatherWindow.js';
class WeatherForecast extends Component{
	state = {weather_forecast: ''};
	weatherWindowsMaker(almost_list){
		let response = []
		for (let i = 0; i < 3; i++) {
			response.push(
				<WeatherWindow
					key={i}
					info={almost_list.list[i]}
				/> 
			)
		}
		return response;
	}
	componentWillReceiveProps(next_props){
		try{
			if (next_props.location!=undefined){
				weather_forecast_request_location(this, next_props.location.coords.latitude, next_props.location.coords.longitude);
			}
			else if(next_props.city!=undefined){
				if (next_props.city!=''){
					weatherForecastRequestCityName(this, next_props.city);
				}
			}
		}
		catch(e){
			console.log(e);
		}
	}
	render(){
		try{
			//Вызываемая здесь функция - генерирует обьект разметки, который будет
			//воспроизведён на странице
			var Weather_Windows = this.weatherWindowsMaker(this.state.weather_forecast);
		}
		catch(e){
			console.log(e)
		}
		return(
		  <Card.Group>
				{Weather_Windows}
		  </Card.Group>
		)
	}
}
export default WeatherForecast;