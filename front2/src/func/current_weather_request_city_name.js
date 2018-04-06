export default function current_weather_request_city_name(t, city_name){
	//запрос на api для получение погоды в текущий момент времени по названию города
	const proxyurl = "https://cors-anywhere.herokuapp.com/";
	fetch(proxyurl+'api.openweathermap.org/data/2.5/weather?q='+city_name+',ua&APPID=149dd72ecda89a201647f57306658a06', { method: 'GET',
	  headers: {
	    'Content-Type': 'application/json',
		'Accept': 'application/json'
	  }
	})
	.then(resp => resp.json())
	.then(resp => t.setState({current_weather: resp}))
}