const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2105f638edmsh2654422b5b7910ap19cbc1jsna6e7243cc9e7",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

// Get references to HTML elements
const cityName = document.getElementById("cityName");
const cloud_pct = document.getElementById("cloud_pct");
const temp = document.getElementById("temp");
const feels_like = document.getElementById("feels_like");
const humidity = document.getElementById("humidity");
const min_temp = document.getElementById("min_temp");
const max_temp = document.getElementById("max_temp");
const wind_speed = document.getElementById("wind_speed");
const wind_degrees = document.getElementById("wind_degrees");
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");

const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      cloud_pct.innerHTML = data.cloud_pct;
      temp.innerHTML = data.temp;
      feels_like.innerHTML = data.feels_like;
      humidity.innerHTML = data.humidity;
      min_temp.innerHTML = data.min_temp;
      max_temp.innerHTML = data.max_temp; // Corrected the ID
      wind_speed.innerHTML = data.wind_speed;
      wind_degrees.innerHTML = data.wind_degrees;
      sunrise.innerHTML = data.sunrise;
      sunset.innerHTML = data.sunset;
    })
    .catch((err) => console.log(err));
};

const submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const cityInput = document.getElementById("city");
  getWeather(cityInput.value);
});

// Initial call with default city
getWeather("Delhi");
