const url = 'https://weather-api138.p.rapidapi.com/weather?city_name=surat';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7fe7124b96msh85c390fe6f69df5p160565jsnbf5c7f35e50e',
		'X-RapidAPI-Host': 'weather-api138.p.rapidapi.com'
	}
};


const getWeather = (city) =>{
  document.getElementById('cityName').innerHTML = city

  fetch('https://weather-api138.p.rapidapi.com/weather?city_name=' + city, options)
  .then(response => response.json())
  .then((response)=> {
    
    console.log(response);

    document.getElementById('temp').innerHTML = Math.round(response.main.temp -273.15)
    document.getElementById('temp2').innerHTML = Math.round(response.main.temp -273.15)
    document.getElementById('temp_min').innerHTML = Math.round(response.main.temp_min -273.15)
    document.getElementById('temp_max').innerHTML = Math.round(response.main.temp_max -273.15)
    document.getElementById('feels_like').innerHTML = Math.round(response.main.feels_like - 273.15)
    document.getElementById('humidity').innerHTML = response.main.humidity
    document.getElementById('humidity2').innerHTML = response.main.humidity
    document.getElementById('visibility').innerHTML = response.visibility
    // document.getElementById('pressure').innerHTML = response.main.pressure
    document.getElementById('wind_speed').innerHTML = response.wind.speed*3.6
    document.getElementById('wind_speed2').innerHTML = Math.round(response.wind.speed*3.6)
  })
  .catch(err => console.error(err));
}

document.getElementById('submit').addEventListener("click", (e)=>{
  e.preventDefault()
  getWeather(city.value)

})