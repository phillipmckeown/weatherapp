// cbcc865ae1230383bd8fa2ea11685640
// URL: api.openweathermap.org/data/2.5/weather?zip=94040,us
    
//api.openweathermap.org/data/2.5/weather&appid=cbcc865ae1230383bd8fa2ea11685640

//
//https://samples.openweathermap.org/data/2.5/weather?&appid=b6907d289e10d714a6e88b30761fae22zip=94040,us
//https://api.openweathermap.org/data/2.5/weather&appid=9a5f03993c0c409d4e9878c8a9db6330?zip=53590,us

//working url: https://openweathermap.org/data/2.5/weather?zip=94040,us&appid=b6907d289e10d714a6e88b30761fae22
//             https://openweathermap.org/data/2.5/weather?zip=53590,us&appid=b6907d289e10d714a6e88b30761fae22




$("#search_btn").click(function() {
   
    
//    var proxy = 'https://cors-anywhere.herokuapp.com/';
    var apiLink = 'https://api.openweathermap.org/data/2.5/weather';
    var apiKey = '9a5f03993c0c409d4e9878c8a9db6330';
    var zipInput = $('#zipCode').val() + ',us';
    var units = '&units=imperial';
    var apiURL = apiLink + '?zip=' + zipInput + '&appid=' + apiKey + units;
    
    console.log(apiURL);
        
    $.get(apiURL, function(responseFromOW){
            console.log(responseFromOW);
            console.log("temp:", responseFromOW.main.temp);
            console.log("city:", responseFromOW.name);
            console.log("condition:", responseFromOW.weather[0].description);
        
            var temp = responseFromOW.main.temp;
            var city = responseFromOW.name;
            var condition = responseFromOW.weather[0].description;
        
            $.ajax({
            url: apiURL,
            success: function(weather) {
            console.log(weather);
//            console.log(weather.currently.summary);
                $("#weather").html('<h1>' + temp + '</h1>')
                $.html('<h3>' + condition + '</h3>');
           
            }
            });
        
            }); 
        
        });
    