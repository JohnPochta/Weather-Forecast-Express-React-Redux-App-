export default function weatherForecastRequestCityName(t, city_name){
	//запрос на api для получение прогноза погоды на ближайшее время по названию города
	const proxyurl = "https://cors-anywhere.herokuapp.com/";
	fetch(proxyurl+'api.openweathermap.org/data/2.5/forecast?q='+city_name+',ua&APPID=149dd72ecda89a201647f57306658a06', { method: 'GET',
	  headers: {
	    'Content-Type': 'application/json',
		'Accept': 'application/json'
	  }
	})
	.then(resp => resp.json())
	.then(resp => t.setState({weather_forecast: resp}))
}