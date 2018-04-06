import React, { Component } from 'react';
import {Table, Header, Body, Button, Modal} from 'semantic-ui-react';
import WeatherForecast from './WeatherForecast.js';
import CurrentWeather from './CurrentWeather.js';
function ForecastField(props) {
	return (
		<div>
			<Table size='small' celled padded>
				<Table.Header>
			      <Table.Row>
			        <Table.HeaderCell singleLine><center>Current Weather</center></Table.HeaderCell>
			        <Table.HeaderCell singleLine><center>Weather Forecast</center></Table.HeaderCell>
			      </Table.Row>
			    </Table.Header>
			    <Table.Body>
			    	<Table.Row>
			    		<Table.Cell>
					    	<CurrentWeather city={props.city} location={props.position}/>
					    </Table.Cell>
					    <Table.Cell>
							<WeatherForecast city={props.city} location={props.position}/>
						</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table>
		</div>
	)
}

export default ForecastField;