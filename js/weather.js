let weather = document.getElementById('weather');
let getIt = document.getElementById('getIt');
let city = document.getElementById('city');
const API = '6fd63dae63a9abad32796cd9dccce271';


// Добавляем в HTML
function getDataWeather(data) {
  // Просмотреть все что плучаем
  // console.log(data)
  nameCity.innerText = data.name
  description.innerText = data.weather[0].description
  let iconcode = data.weather[0].icon
  var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
  $('#wicon').attr('src', iconurl);
  windSpeed.innerText = data.wind.speed
  windDeg.innerText = data.wind.deg
  temp.innerText = data.main.temp
  feels_like.innerText = data.main.feels_like
  temp_min.innerText = data.main.temp_min
  temp_max.innerText = data.main.temp_max
  pressure.innerText = data.main.pressure
  humidity.innerText = data.main.humidity
  sunrise.innerText = data.sys.sunrise
  sunset.innerText = data.sys.sunset
  visibility.innerText = data.visibility
}

// Получаем json с прогнозом
function gettingJSON(city) {
  $.ajax({
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API}&lang=ru&units=metric`,
      success: getDataWeather
    }
  );
}

//Обработчик на кнопку
getIt.addEventListener("click", function () {
  gettingJSON(city.value);
}, false)


