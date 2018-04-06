export default function current_weather_request_location(t, latitude, longitude){
	//запрос на api для получение погоды в текущий момент времени по геолокации
	const proxyurl = "https://cors-anywhere.herokuapp.com/";
	fetch(proxyurl+'api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&APPID=149dd72ecda89a201647f57306658a06', { method: 'GET',
	  headers: {
	    'Content-Type': 'application/json',
		'Accept': 'application/json'
	  }
	})
	.then(resp => resp.json())
	.then(resp => t.setState({current_weather: resp}))
}