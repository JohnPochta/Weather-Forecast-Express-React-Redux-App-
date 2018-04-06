import React, { Component } from 'react';
import { Table, Card, Image, Icon } from 'semantic-ui-react';
//это просто функция, основной задачей которой, является формирование внешнего вида карточки погоды
//ничего более
export default function cardMaker(props){
	var Icon_obj={};
	if (props.dt_txt===undefined){
		try{
			props.dt_txt = 'Current';				
		}
		catch(e){
			console.log(e);	
		}
	}
	try{
		if (props.weather[0].main=='Cloud' | props.weather[0].main=='Clouds' | props.weather[0].main=='Mist' ){
			Icon_obj.name = 'cloud';
			Icon_obj.color = 'grey';
		}
		else if (props.weather[0].main=='Clear'){
			Icon_obj.name = 'cloud';
			Icon_obj.color = 'yellow';
		}
		else if (props.weather[0].main=='Rain'){
			Icon_obj.name = 'rain';
			Icon_obj.color = 'blue';
		}
	    else if (props.weather[0].main=='Snow'){
			Icon_obj.name = 'snowflake outline';
			Icon_obj.color = 'blue';
		}
	}
	catch(e){
		console.log(e);
	}
	try{
		return(
		  <Card style={{marginLeft : '30px'}} size='tiny'>
		    <Card.Content>
		    <center>
		      <Icon size='massive' color={Icon_obj.color} name={Icon_obj.name} />
		    </center>
		    <center>
		      <Card.Description>
		      Situation: {props.weather[0].description}
		      </Card.Description>
		      <Card.Description>
		      Temp(С): {Math.round(props.main.temp - 273)}
		      </Card.Description>
		      <Card.Description>
		      Pressure: {props.main.pressure}
		      </Card.Description>
		      <Card.Description>
		      Humidity: {props.main.humidity}
		      </Card.Description>
		      <Card.Description>
		      Wind Speed: {props.wind.speed}
		      </Card.Description>
		     </center>
		    </Card.Content>
		    <Card.Content extra>
		      <a>
		        <Icon name='time' />
		        {props.dt_txt}
		      </a>
		    </Card.Content>
		  </Card>
		)
	}
	catch(e){
		console.log(e)
	}
}