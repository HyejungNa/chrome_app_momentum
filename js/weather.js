const API_KEY = "d4d6be8beaba2b686ca915803de9815b";

function onGeoCorrect(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const temp = document.querySelector('#weather span:first-child');
      const weather = document.querySelector('#weather span:nth-child(2)')
      const city = document.querySelector('#weather span:last-child')
      temp.innerText = `${Math.floor(data.main.temp)}˚C`;
      weather.innerText = data.weather[0].main;
      city.innerText = data.name;
    })
}

function onGeoError() {
  alert("Can't find your location. No weather information available.");
}

navigator.geolocation.getCurrentPosition(onGeoCorrect, onGeoError);