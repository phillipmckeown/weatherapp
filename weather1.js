// sample url from OpenWeather- https://samples.openweathermap.org/data/2.5/weather?zip=94040,us&appid=b6907d289e10d714a6e88b30761fae22

// https://api.openweathermap.org/data/2.5/weather?zip=53590,us&appid=9a5f03993c0c409d4e9878c8a9db6330

// api key- 9a5f03993c0c409d4e9878c8a9db6330

$("#search_btn").click(function() {
   
    //variables for the OpenWeather API URL
    var apiLink = 'https://api.openweathermap.org/data/2.5/weather';
    var apiKey = '9a5f03993c0c409d4e9878c8a9db6330';
    var zipInput = $('#zipCode').val();
    var apiURL = apiLink + '?zip=' + zipInput + '&appid=' + apiKey;
    
    console.log(apiURL);
    
    $.get(apiURL, function(responseFromOW) {
            console.log(responseFromOW);
            console.log("temp:", responseFromOW.main.temp);
            console.log("city:", responseFromOW.name);
            console.log("description:", responseFromOW.weather[0].description);
        
            var temp = responseFromOW.main.temp;
            var city = responseFromOW.name;
            var description = responseFromOW.weather[0].description;
    });
    
    
    
});