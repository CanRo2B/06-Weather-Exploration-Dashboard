const searchHistor = [];
const weatherUrl = "https://openweathermap.org/";
const apiKey = "390d66b37dcbd064dba3890d8db84761";

let searchForm = document.querySelector("#search-form");
let searchInput = document.querySelector("search-box");
let todayBox 
let forecastBox
let searchDisplayBox
let cityName = document.getElementById("weather-searchCity");
let currentDate = document.querySelector("date");
let weatherPic = document.getElementById("weather-icon");
let currentTemp = document.querySelector(".temp");
let currentWind = document.querySelector(".wind");
let currentHumidity = document.querySelector(".humidity");
let currentUV = (".uvIndex");

// Timezone for day.js
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);

// Function to display search history
function displaySearchHistory() {
    searchDisplayBox.innerHTML = " ";
}

// var weatherApiUrl = 
// // Requet one call 
// function weatherData(weatherApi) {
//     fetch(weatherApi)
//     .then(function(response){
//         response.json
//     })
//     .then(function(data){
//         console.log(data);
//     })
// }
// weatherData(weatherApiUrl)

// function displaySearchHistory() {
//     searchDisplayBox.innerHTML = "";



if (JSON.parse(localStorage.getItem("searchHistory"))=== null) {
    console.log("searchHistory not found")
} else {
    console.log("searchHistory saved in localStorage");
    rendersearchHistory();
}

searchForm.on("click", function(){
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
    cityName.text(`${cityName}`);
    currentDate.text(`(${today})`);
    currentTemp.text(`Temperature: ${cityTemp} °F`);
    currentWind.text(`Wind Speed: ${cityWindSpeed} MPH`);
    currentHumidity.text(`Humidity: ${cityHumidity}%`);
    currentUV.text(`UV Index: ${uvVal}`);
    weatherPic.att("src", cityWeatherIcon);
}


function getWeather(searchInput) {
    const apiKey= "390d66b37dcbd064dba3890d8db84761";
    
    let weatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=390d66b37dcbd064dba3890d8db84761`;

    let latlon = "https://api.openweathermap.org/data/2.5/weather?q=" +
                searchInput +
                "&units=imperial&appid=390d66b37dcbd064dba3890d8db84761";
    
        console.log(latlon);
        
        fetch(latlon)
                .then(response => response.json())
                .then(data => console.log(data))

            .then(function(weatherData){
                    let cityObj= {
                        cityName: "weatherData.main.name",
                        cityTemp: "weatherData.main.temp",
                        cityWindSpeed: "weatherData.wind.speed",
                        cityHumidity: "weatherData.main.humidity",
                        cityUVIndex: "weatherData.coord",
                        cityWeatherIcon: "weatherData.weather[0].icon",
                    }
            
                    
            .then(function() {
                if (JSON.parse(localStorage.getItem("searchHistory"))==null) {
                    let searchArray = []
                    if(searchArray.indexOf(cityObj.cityName)===-1) {
                        searchArray.push(cityObj.cityName);
                    
                        localStorage.setItem("searchHistory",JSON.stringify(searchArray));
                    

                        weatherData(cityObj.cityName, cityObj.cityTemp, cityObj.cityWindSpeed, cityObj.cityHumidity, cityObj.cityWeatherIcon, cityObj.cityUVIndex);
                        rendersearchHistory(cityObj.cityName);
            
                    } else {
                        console.log("City in history.")
                        weatherData(cityObj.cityName, cityObj.cityTemp, cityObj.cityWindSpeed, cityObj.cityHumidity, cityObj.cityWeatherIcon, cityObj.cityUVIndex);
                    // } else {

                    let searchArray = JSON.parse(localStorage.getItem("searchHistory"));

                    if (searchArray.indexOf(cityObj.cityName)===-1) {
                        searchArray.push(cityObj.cityName);

                        localStorage.setItem("searchHistory", JSON.stringify(searchArray));

                        weatherData(cityObj.cityName, cityObj.cityTemp, cityObj.cityWindSpeed, cityObj.cityHumidity, cityObj.cityWeatherIcon, cityObj.cityUVIndex);
                        rendersearchHistory(cityObj.cityName);
                    } else {
                        console.log("City in history")

                        weatherData(cityObj.cityName, cityObj.cityTemp, cityObj.cityWindSpeed, cityObj.cityHumidity, cityObj.cityWeatherIcon, cityObj.cityUVIndex);
                    }
                }
            }
                    })

            });         
}
                



// make request to the one call and show them how to make an API key
// fetch coordinates
// fetch weather
// fetch renderItems(city, data){}

// var getCity = function (userCity){
//     let cityInfoURL= `http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&{limit}&appid=390d66b37dcbd064dba3890d8db84761` + cityName + "local_names";

//     fetch(cityInfoURL)
//     .then (function(response) {
//         if (response.ok){
//             console.log(response);
//             response.json().then(function(data){
//                 console.log(data);
//                 displayCityname(data, cityName);
//             });
//         } else {
//             alert("Error" + response.statusText);
//             }
//         })
        // .then(function(data){
        //     console.log(data);
        // });
    // }
// f

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
