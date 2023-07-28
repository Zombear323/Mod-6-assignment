var APIKey = "ae4782e7b7c232a81f8182096d5d5a5e"
var city = 'Toronto'
var queryURL  = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + APIKey

fetch(queryURL);
