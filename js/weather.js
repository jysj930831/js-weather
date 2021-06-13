const API_KEY = "92d24c9c01f50669dc681a438d6dff90";

function onGeo(postion) {
  const lat = postion.coords.latitude;
  const lon = postion.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      const city = document.querySelector(".weather span:first-child");
      const weather = document.querySelector(".weather span:last-child");
      city.innerText = data.name;
      weather.innerText =
        /* {data.weather[0].main} */
        `${Math.round(data.main.temp * 10) / 10}℃`;
    });
}

function onGeoError() {
  alert("No, Weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeo, onGeoError);
