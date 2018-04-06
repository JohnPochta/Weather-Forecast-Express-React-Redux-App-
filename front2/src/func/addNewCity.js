export default function addNewCity(t, city_name){
    let new_ = JSON.stringify({name : city_name});
    //запрос к нашему серверу на добавление нового города в список избранных
    fetch('client/add_new_city', {
    method: 'POST',
    credentials: "same-origin",
    headers: {
      "Content-Type" : "application/json"
    },
      body: new_
    })
    .then(data => data.json())
    .then(data => {t.props.cityAdded(1); t.setState({input:'', resp: (data.status=='City already added') ? 0 : 1, prev_input : data.context, answer : 201})})
}