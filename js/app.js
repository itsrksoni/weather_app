const apiKey = "372a790b374cf52ae7c6e59a0c41ea59";

const btn = document.getElementById("searchBtn");
const input = document.getElementById("cityInput");
const result = document.getElementById("weatherResult");

btn.addEventListener("click", async () => {
  const city = input.value.trim();
  if (!city) return;

  result.innerText = "Loading...";

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    const data = await res.json();
    if (data.cod !== 200) throw new Error(data.message);

    saveCity(city);
    renderCities();

    result.innerHTML = `
      <h3>${data.name}</h3>
      <p>🌡️ ${data.main.temp} °C</p>
      <p>☁️ ${data.weather[0].description}</p>
    `;
  } catch (e) {
    result.innerText = e.message;
  }
});
