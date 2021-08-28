document.getElementById('search-btn').addEventListener('click', function(){
    const searchField = document.getElementById('input-field');
    const searchValue = searchField.value;
    openWeather(searchValue);
    searchField.value = '';
})
 // fetch api data
const openWeather =async location =>{
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=a2e83843ff1665c9a2fee8d34a094221`)
.then(res => res.json())
.then(data => displayDetails(data))
}
const displayDetails = data =>{
console.log(data)
const location = document.getElementById('location');
location.innerText = data.name;
const temperature = document.getElementById('temperature');
const temp = data.main.temp - 273;
temperature.innerHTML =`${temp.toFixed(1)}&#176;C`;
const status = document.getElementById('status');
status.innerText = data.weather[0].main;
}
