const searchHistory = [];
// const weatherApiUrl = "https://api.openweathermap.org/";
const apiKey= "390d66b37dcbd064dba3890d8db84761";

let searchForm = document.querySelector("#search-form");
let searchInput
let todayBox
let forecastBox
let searchDisplayBox

// Add timezone from day.js
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);

function displaySearchHistory() {
    searchDisplayBox.innerHTML = "";
}
var weatherApiUrl = `http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid=${apiKey}`

// call and show api key
function weatherData(weatherApi) {
    
    fetch(weatherApi)
    .then (function(response) {
        return response.json()
    })
    .then(function(data){
        console.log(data);
    })
}
weatherData(weatherApiUrl);

// make request to the one call and show them how to make an API key
// fetch coordinates
// fetch weather
// fetch renderItems(city, data){}