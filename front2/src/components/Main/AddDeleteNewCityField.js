import React, { Component } from 'react';
import {Button, Input, Message, Header, Form} from 'semantic-ui-react';
import { connect } from 'react-redux';
import checkCityInApi from '../../func/checkCityInApi.js';
import addNewCity from '../../func/addNewCity.js';
class AddNewCityField extends Component{
	state = {answer : -1, input : '', resp : -1, prev_input : ''};
	add(t, value){
		document.getElementById('city_input_add').value = '';
		addNewCity(t, value);
	}
	changeHandler(t, value){
		checkCityInApi(t, value);
	}
	render(){
		return(
			<div>
				<center>
					<Header style={{backgroundColor : 'DodgerBlue ', color : 'White'}} block>
					<p>You can add new city in List of Cities which intresting for you</p>
				</Header>
				</center>
		        <Input id="city_input_add" onChange={ (e, { value }) => {this.changeHandler(this, value)}} placeholder='Enter city name' />
				<Button disabled={(this.state.answer-200)} content='Add' onClick={(e) => {this.add(this, this.state.input )}} positive />
				<Message hidden={(this.state.answer-200) ? false : true} negative>
			    	<Message.Header>' {this.state.input} ' doesn't exist in Ukraine</Message.Header>
			  	</Message>
			  	<Message hidden={!(this.state.answer-200) ? false : true} positive>
			    	<Message.Header>' {this.state.input} ' is a real Ukrainian city</Message.Header>
			  	</Message>
			  	<Message hidden={(this.state.resp==0) ? false : true} negative>
			    	<Message.Header>{this.state.prev_input} already added in you CitiesList</Message.Header>
			  	</Message>
			  	<Message hidden={(this.state.resp==1) ? false : true} positive>
			    	<Message.Header>{this.state.prev_input} was succsesful added</Message.Header>
			  	</Message>
	        </div>
		)
	}
}
export default connect(
	state => ({}),
	dispatch => ({
	    cityAdded : (choose) => {
	      dispatch({ type : 'CityAdded', payload : choose})
	    },
	})
)(AddNewCityField);