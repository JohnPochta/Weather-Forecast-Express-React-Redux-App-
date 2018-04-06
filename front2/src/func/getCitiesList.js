export default function getCitiesList(t){
    fetch('client/citylist', {credentials: "same-origin"})
    .then(data => data.json())
    .then(data => t.setState({options : data.cities}))
}