// const searchHistory = [];
// const weatherApiUrl = "https://api.openweathermap.org/";
const apiKey= "390d66b37dcbd064dba3890d8db84761";

// Search button
// let searchForm = document.querySelector("#search-form");
let searchForm = $(".search-form");
// User search input
// let searchInput = document.querySelector("search-box");
let searchInput = $(".search-box");
// User search history
// let searchHistory = document.querySelector(".history");
let searchHistory = $(".history");
let todayBox
let forecastBox
let searchDisplayBox
// Input name for the valued results
// let cityName= document.getElementById("weather-searchCity");
let cityName = $("#weather-searchCity");
// let currentDate= document.querySelector("date");
let currentDate= $(".date");
// let weatherPic= document.getElementById("weather-icon");
let weatherPic= $(".temp");
// let currentTemp= document.querySelector(".temp");
let currentTemp = $(".temp");
// let currentWind= document.querySelector(".wind");
let currentWind = $(".wind");
// let currentHumidity= document.querySelector(".humidity");
let currentHumidity = $(".humidity");
// let currentUV= document.querySelector(".uvIndex");
let currentUV = (".uvIndex");

// Add timezone from day.js
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);

function displaySearchHistory() {
    searchDisplayBox.innerHTML = "";

// // }
// var weatherApiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=390d66b37dcbd064dba3890d8db84761`;

// // call and show api key
// function weatherData(weather) {
    
//     fetch(weather)
//         .then (function(response) {
//             console.log(response.status);
//             return response.json()
//     })
//         .then(function(data){
//             console.log(data);
//     });
}

// weatherData(weatherApiUrl);

// function searchCity(cityName) {
//     var weatherURL="http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&appid=" + apiKey;

//     fetch(weatherURL)
//         .then(function(response){
        
//             cityName.innerHTML = response.data.name + "(" + month + "/" + day + "/" + year + ")";
//             currentTemp.innerHTML = "Temperature: " + k2f(response.data.main.temp) + "&176F";
//             console.log(weatherURL);
//         })
// }

if (JSON.parse(localStorage.getItem("searchHistory"))=== null) {
    console.log("searchHistory not found")
} else {
    console.log("searchHistory saved in localStorage");
    rendersearchHistory();
}

searchForm.on("click", function(e){
    e.preventDefault();
    if (searchInput.val()==="") {
        alert("Please enter a city");
        return;
    }
    console.log("click")
    getWeather(searchInput.val());
});

$(document).on("click", ".history", function(){
    console.log("item from history")
    let historyElement = $(history);
    getWeather(historyElement.text());
})

function rendersearchHistory(cityName) {
    searchHistory.empty();
    let historyArray = JSON.parse(localStorage.getItem(".history"));
    for (let i = 0; i < historyArray.length; i ++) {
        let newItem = $("<li>").attr("class", "historyInput");
        newItem.text(historyArray[i]);
        searchHistory.prepend(newItem);
    }
}
function weatherData(cityName, cityTemp, cityHumidity, cityWindSpeed, cityWeatherIcon, uvVal) {
    cityName.text(cityName);
    currentDate.text(`(${today})`);
    currentTemp.text(`Temperature: ${cityTemp} °F`);
    currentWind.text(`Wind Speed: ${cityWindSpeed} MPH`);
    currentHumidity.text(`Humidity: ${cityHumidity}%`);
    currentUV.text(`UV Index: ${uvVal}`);
    weatherPic.att("src", cityWeatherIcon);
}
function getWeather(inputCity) {
    let weatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${cityName}&exclude={part}&appid={API key}&units-imperial`;
    
    fetch(weatherURL)
        .then (function(weatherData) {
            let cityObj = {
                cityName: weatherData.name,

            }
        });
}
}



// make request to the one call and show them how to make an API key
// fetch coordinates
// fetch weather
// fetch renderItems(city, data){}