const searchHistory = [];
// const weatherApiUrl = "https://api.openweathermap.org/";
const apiKey= "390d66b37dcbd064dba3890d8db84761";

let searchForm = document.querySelector("#search-form");
let searchInput
let todayBox
let forecastBox
let searchDisplayBox
let cityName= document.getElementById("weather-searchCity");
let currentDate= document.querySelector("date");
let weatherPic= document.getElementById("weather-icon");
let currentTemp= document.querySelector(".temp");
let currentWind= document.querySelector(".wind");
let currentHumidity= document.querySelector(".humidity");
let currentUV= document.querySelector(".uvIndex");


// Add timezone from day.js
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);

function displaySearchHistory() {
    searchDisplayBox.innerHTML = "";

// }
var weatherApiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=390d66b37dcbd064dba3890d8db84761`;

// call and show api key
function weatherData(weather) {
    
    fetch(weather)
        .then (function(response) {
            console.log(response.status);
            return response.json()
    })
        .then(function(data){
            console.log(data);
    });
}

weatherData(weatherApiUrl);

function searchCity(cityName) {
    var weatherURL="http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&appid=" + apiKey;

    fetch(weatherURL)
        .then(function(response){
        
            cityName.innerHTML = response.data.name + "(" + month + "/" + day + "/" + year + ")";
            currentTemp.innerHTML = "Temperature: " + k2f(response.data.main.temp) + "&176F";
            console.log(weatherURL);
        })
}

searchForm.addEventListener("click", function(){
    let searchInput = city
})
}



// make request to the one call and show them how to make an API key
// fetch coordinates
// fetch weather
// fetch renderItems(city, data){}