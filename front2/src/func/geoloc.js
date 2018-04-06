import current_weather_request_location from './current_weather_request_location.js';
export default function getloc(t) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
                t.setState({position:position})
		    }
	    )
    } else {
        t.setState({ current_weather: '', weather_forecast: '' });
    }
}