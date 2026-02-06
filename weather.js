let input = document.querySelector("#cityInput");
let btn = document.querySelector("#getWeatherBtn");
let result = document.querySelector("#weatherResult");

async function getWeather(city) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=914d155e613a0f1ce1bdf8ff4f85f259&units=metric`;

  try {
    let res = await fetch(url);
    let data = await res.json();

    result.innerHTML = `
            <h3>City : ${data.name}</h3>
            <p>Temperature: ${Math.round(data.main.temp)}°C</p>
             <P>Temp.Max: ${Math.round(data.main.temp_max)}°C</P>
            <P>Temp.Min: ${Math.round(data.main.temp_min)}°C</P>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
            <p>Humidity: ${data.main.humidity}%</p>
           
            <p>Weather: ${data.weather[0].main}</p>
        `;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

btn.addEventListener("click", () => {
  let city = input.value;
  getWeather(city);
  input.value = "";
});
