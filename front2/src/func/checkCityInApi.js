export default function checkCityInApi(t, city_name){
	//происходит запрос к api на получение погоды, в ответе на который, видно был ли он успешен
	//если нет, то значит такого города нет в Api)
	const proxyurl = "https://cors-anywhere.herokuapp.com/";
	fetch(proxyurl+'api.openweathermap.org/data/2.5/weather?q='+city_name+',ua&APPID=149dd72ecda89a201647f57306658a06', { method: 'GET',
	  headers: {
	    'Content-Type': 'application/json',
		'Accept': 'application/json'
	  }
	})
	.then(resp => resp.json())
	.then(resp => t.setState({answer : resp.cod, input: city_name}))
}