const API_KEY = "SIZNING_API_KEY"; // shu yerga API key qo'yasiz

function getWeather() {
  const city = document.getElementById("city").value;

  if (city === "") {
    alert("Iltimos, shahar nomini kiriting");
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then(data => {

      if (data.cod === "404") {
        alert("Shahar topilmadi");
        return;
      }

      document.getElementById("weather").style.display = "block";

      document.getElementById("cityName").innerText = data.name;
      document.getElementById("temp").innerText = Math.round(data.main.temp) + "°C";
      document.getElementById("desc").innerText = data.weather[0].description;

      document.getElementById("humidity").innerText = data.main.humidity + "%";
      document.getElementById("wind").innerText = data.wind.speed + " m/s";

    })
    .catch(() => {
      alert("Xatolik yuz berdi");
    });
}