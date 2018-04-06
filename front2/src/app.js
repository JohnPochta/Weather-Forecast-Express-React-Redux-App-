import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router} from 'react-router-dom';
import { Route } from 'react-router-dom';
import StartPage from './containers/StartPage.js';
import Main from './containers/Main.js';
import { bindActionCreators } from 'redux';
import './semantic.min.css';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
	<Router>
			<div>	
				<div>
					<Provider store={store}>
						<div>
						    <Route exact path = "/" component = {StartPage} />
				    		<Route exact path = "/main" component = {Main} />
			    		</div>
			    	</Provider>
			    </div>
			</div>
	</Router>, 
	document.getElementById('app')
);