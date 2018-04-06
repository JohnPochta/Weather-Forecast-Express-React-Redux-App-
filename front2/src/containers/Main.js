import React from 'react';
import CurrentLocationForecast from '../components/Main/CurrentLocationForecast';
import AddNewCityField from '../components/Main/AddDeleteNewCityField';
import ChosenForecast from '../components/Main/ChosenForecast';
import { connect } from 'react-redux';
const Main = () => (
	<div>
		<CurrentLocationForecast />
		<AddNewCityField />
		<ChosenForecast />
	</div>
);
/*export default connect(
	state => ({}),
	dispatch => ({})
)(Main);*/
export default Main;

