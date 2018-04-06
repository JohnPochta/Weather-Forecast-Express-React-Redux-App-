import { combineReducers } from 'redux';
import MainPage from './MainPage/MainPage.js';
import MainPageSignUpForm from './MainPage/SignUpForm.js';
import MainPageLoginForm from './MainPage/LoginForm.js';
import CityAddReducer from './Main/CityAddReducer.js';

export default combineReducers({
	MainPage,
	MainPageSignUpForm,
	MainPageLoginForm,
	CityAddReducer
});