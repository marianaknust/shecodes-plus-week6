// let weather = {
//   "paris": {
//     temp: "19°C (66°F)",
//     humidity: 80
//   },
//   "tokyo": {
//     temp: "17.3°C (63.14°F)",
//     humidity: 50
//   },
//   "lisbon": {
//     temp: "30.2°C (86.33°F)",
//     humidity: 20
//   },
//   "san francisco": {
//     temp: "20.9°C (69.62°F)",
//     humidity: 100
//   },
//   "moscow": {
//     temp: "-5°C (23°F)",
//     humidity: 20
//   }
// };

//   let enterCity = prompt("Enter city");
//         enterCity = enterCity.trim().toLowerCase();
//         let city = weather[enterCity];
//         function capitalizeFirstLetter(city) {
//                 return city.charAt(0).toUpperCase() + city.slice(1);
//             }

//         if (city) {
//         enterCity = capitalizeFirstLetter(enterCity); 
//             alert(`It is currently ${city.temp} in ${enterCity} with a humidity of ${city.humidity}%`);
//         } else {
//             alert(`Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${enterCity}`);
//         }



let now = new Date();
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let currentDay = days[now.getDay()];
let currentHour = now.getHours();
let currentMinute = now. getMinutes();
let today = now.getUTCDate ();
let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Set","Oct","Nov","Dec"];
let currentMonth = months[now.getMonth()];


let currentDate = document.querySelector("#current-date");
currentDate.innerHTML = `${currentDay}, ${today} ${currentMonth} ${currentHour}:${currentMinute}`;

let apiKey = "05f78a209463d416f8843b75229cbdc0";

function searchCity (event) {
  event.preventDefault();

  let chosenCity = document.querySelector(".insert-city").value;


  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${chosenCity}&appid=${apiKey}&units=metric`;

   axios.get(apiURL).then(displayTemperature);
}

function searchCurrent (position) {
  
  
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;

  let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

   axios.get(apiURL).then(displayTemperature);
   
}

function getCurrent(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchCurrent);
}

let searchButton = document.querySelector("button#search");
searchButton.addEventListener("click", searchCity);

let currentButton = document.querySelector("button#current");
currentButton.addEventListener("click", getCurrent);

function displayTemperature (response){
  let temperature = Math.round(response.data.main.temp);
  let currentTemp = document.querySelector(".daily-temperature");
  currentTemp.innerHTML = `${temperature}°C`;
  
  let city = document.querySelector(".city");
  city.innerHTML = response.data.name;
}
