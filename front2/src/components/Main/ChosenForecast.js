import React, { Component } from 'react';
import { Button, Dropdown, Header, Message } from 'semantic-ui-react';
import ForecastField from './ForecastField.js';
import getCitiesList from '../../func/getCitiesList.js';
import deleteCity from '../../func/deleteCity.js';
import { connect } from 'react-redux';
class ChosenForecast extends Component{
	constructor(props){
	  super(props);
	  this.state = {
	  	chosen_city: '',
	  	options : '',
	  	prev_choose : '', 
	  	resp : -1
	  };
	}
	delete(t, value){
		deleteCity(t, value);
	}
	changeHandler(value){
		this.setState({chosen_city : value});
	}
	componentWillMount(){
		getCitiesList(this);
	}
	shouldComponentUpdate(nextProps, nextState){
		if((nextState.prev_choose==='') && (nextState.chosen_city==='') && (nextState.options.length!==this.state.options.length)){
			return true;
		}
		if (nextState.options.length!==this.state.options.length){
			return true;
		}
		if ( (nextProps.signal===this.props.signal) && (nextState.prev_choose===this.state.prev_choose) && (nextState.chosen_city===this.state.chosen_city) ) {
			return false;
		}
		else{
			return true;
		}
	}
	render(){
		getCitiesList(this);
		return (
			<div>
				<center>
					<Header style={{backgroundColor : 'DodgerBlue ', color : 'White'}} block>
					<p>Choose the city from you CitiesList to see the weather forecast</p>
					</Header>
				</center>
				<Dropdown placeholder='Choose the city' onChange={ (e, { value }) => {this.changeHandler(value), this}} search selection options={this.state.options} />
				<Button disabled={!this.state.chosen_city} content='Delete' onClick={(e) => {this.delete(this, this.state.chosen_city)}} negative />
				<Message hidden={(this.state.resp==1) ? false : true} positive>
			    	<Message.Header>{this.state.prev_choose} was succsesful deleted</Message.Header>
			  	</Message>
				<ForecastField city={this.state.chosen_city}/>
			</div>
		)
	}
};
export default connect(
	state => ({
		signal : state.CityAddReducer.cA,
	}),
	dispatch => ({})
)(ChosenForecast);