export default function weather_forecast_request_location(t, latitude, longitude){
	//запрос на api для получение прогноза погоды на ближайшее время по геолокации
	const proxyurl = "https://cors-anywhere.herokuapp.com/";
	fetch(proxyurl+'api.openweathermap.org/data/2.5/forecast?lat='+latitude+'&lon='+longitude+'&APPID=149dd72ecda89a201647f57306658a06', { method: 'GET',
	  headers: {
	    'Content-Type': 'application/json',
		'Accept': 'application/json'
	  }
	})
	.then(resp => resp.json())
	.then(resp => t.setState({weather_forecast: resp}))
}