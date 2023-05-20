let citiesData = {
    tehran: {city: "Tehran", temp: 12, weather: "Sunny", humidity: 23, windSpeed: 32},
    shiraz: {city: "Shiraz", temp: 9, weather: "Windy", humidity: 12, windSpeed: 14},
    tabriz: {city: "Tabriz", temp: 1, weather: "Rainy", humidity: 43, windSpeed: 12},
    mashhad: {city: "Mashhad", temp: 16, weather: "Snowy", humidity: 7, windSpeed: 24},
    arak: {city: "Arak", temp: 10, weather: "Windy", humidity: 13, windSpeed: 15},
    isfahan: {city: "Isfahan", temp: 23, weather: "Sunny", humidity: 15, windSpeed: 18},
}

let $ = document
    let searchBtn = $.getElementById("search")
    let searchBar = $.querySelector(".search-bar")

searchBtn.addEventListener("click", function () {
    let searchBarValue = searchBar.value
    let mainCityDatas = citiesData[searchBarValue]

    if (mainCityDatas) {
        $.querySelector(".city").innerHTML = "Weather in " + mainCityDatas.city
        $.querySelector(".temp").innerHTML = mainCityDatas.temp + "°C"
        $.querySelector(".description").innerHTML = mainCityDatas.weather
        $.querySelector(".humidity").innerHTML = "Humidity: " + mainCityDatas.humidity
        $.querySelector(".wind").innerHTML = "Wind Speed: " + mainCityDatas.windSpeed + "km/h"
        $.querySelector(".weather").classList.remove("loading")

    } else  {
        alert("شهر مورد نظر را به درستی وارد نمایید")
    }

})