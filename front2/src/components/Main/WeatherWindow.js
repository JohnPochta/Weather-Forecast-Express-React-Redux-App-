import React, { Component } from 'react';
import cardMaker from '../../func/cardMaker.js';

function WeatherWindow(props) {
  return(
			<div>
				{cardMaker(props.info)}
			</div>
		);
}
export default WeatherWindow;