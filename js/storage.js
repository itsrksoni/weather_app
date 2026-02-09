function saveCity(city) {
  let cities = JSON.parse(localStorage.getItem("cities")) || [];
  if (!cities.includes(city)) {
    cities.unshift(city);
    localStorage.setItem("cities", JSON.stringify(cities.slice(0, 5)));
  }
}

function renderCities() {
  const list = document.getElementById("recentCities");
  list.innerHTML = "";
  const cities = JSON.parse(localStorage.getItem("cities")) || [];
  cities.forEach(c => {
    const li = document.createElement("li");
    li.innerText = c;
    list.appendChild(li);
  });
}

renderCities();
