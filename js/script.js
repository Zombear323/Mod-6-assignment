var APIKey = "ae4782e7b7c232a81f8182096d5d5a5e"
var cityinput = ['toronto']
var queryURL  = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityinput + '&units=metric&appid=' + APIKey
var dayofcard = $('.dayof')
var fivedaycard = $('.fiveday')
  


fetch(queryURL)
    .then(function (response) {
        return response.json();
      })
    .then(function (data) {
        console.log('Weather: Raw data \n----------');
        console.log(data);
        for (var i = 0; i < 6; i++) {
            console.log(data.list[i].main.temp);
            console.log(data.list[i].main.humidity);
            console.log(data.list[i].wind.speed);
            console.log(data.list[i].weather[0].main);
            var iconcode = data.list[i].weather[0].icon
            var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png"; 
            console.log(iconurl)
            // if (i = 0) {
              // create dayof forecast
            // }
            // else {
              // create 5day forcast
            // }
          }
    });





// var SearchButton = $('')

// SearchButton.on("click", function(event) {
//   event.preventDefault();
//   var cityinput = $(this).siblings(".description").val()
//   console.log("test",svdnote,timeBlk);
//   localStorage.setItem()
      
//   });


