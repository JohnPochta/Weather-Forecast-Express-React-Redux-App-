export default function deleteCity(t, city_name){
    let new_ = JSON.stringify({name : city_name});
    fetch('client/delete_city', {
    method: 'POST',
    credentials: "same-origin",
    headers: {
      "Content-Type" : "application/json"
    },
      body: new_
    })
    .then(data => data.json())
    .then(data => t.setState({chosen_city: '', resp: 1, prev_choose : data.context}))
}