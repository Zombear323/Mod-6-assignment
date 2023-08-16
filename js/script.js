var APIKey = "ae4782e7b7c232a81f8182096d5d5a5e"
var cityinput = ['toronto']
var queryURL  = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityinput + '&units=metric&appid=' + APIKey
var dayofcard = $('.dayof')
var fivedaycard = $('.fiveday')
var divEl = $('<div>')
var h2El = $('<h2>')
var h3El = $('<h3>')
var temps = $('<h2>')
var humid = $('<h3>')
var speed = $('<h3>')
var wther = $('<h3>')



var SearchButton = $('.srchbtn')

SearchButton.on("click", function(event) {
  event.preventDefault();
  fetch(queryURL)
    .then(function (response) {
        return response.json();
      })
    .then(function (data) {
        console.log('Weather: Raw data \n----------');
        console.log(data);
        for (var i = 0; i < 6; i++) {
            if (i < 1) {
              temps.text(data.list[i].main.temp);
              dayofcard.append(temps);
              
              humid.text(data.list[i].main.humidity);
              dayofcard.append(humid);
              speed.text(data.list[i].wind.speed);
              dayofcard.append(speed);
              wther.text(data.list[i].weather[0].main);
              dayofcard.append(wther);
              var iconcode = data.list[i].weather[0].icon
              var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png"; 
              console.log(iconurl)
              // create dayof forecast
            }
            else {
              console.log(data.list[i].main.temp);
              console.log(data.list[i].main.humidity);
              console.log(data.list[i].wind.speed);
              console.log(data.list[i].weather[0].main);
              var iconcode = data.list[i].weather[0].icon
              var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png"; 
              console.log(iconurl)
              // create 5day forcast
            }
          }
    });
});


// fetch(queryURL)
//     .then(function (response) {
//         return response.json();
//       })
//     .then(function (data) {
//         console.log('Weather: Raw data \n----------');
//         console.log(data);
//         for (var i = 0; i < 6; i++) {
//             console.log(data.list[i].main.temp);
//             console.log(data.list[i].main.humidity);
//             console.log(data.list[i].wind.speed);
//             console.log(data.list[i].weather[0].main);
//             var iconcode = data.list[i].weather[0].icon
//             var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png"; 
//             console.log(iconurl)
//             // if (i = 0) {
//               // create dayof forecast
//             // }
//             // else {
//               // create 5day forcast
//             // }
//           }
//     });
