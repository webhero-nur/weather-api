// DONOT show API KEY on your JS FILE
const API_KEY = `6f4599e3083b1e063345238af244fd37`;

const loadTemparature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}

const displayTemperature = data => {
    console.log(data);
    setInnerTextById('city-name', data.name);
    setInnerTextById('temperature', data.main.temp);
    setInnerTextById('weather-condition', data.weather[0].main);
}

const setInnerTextById = (id, value) => {
    const element = document.getElementById(id);
    element.innerText = value;
}

document.getElementById('btn-search').addEventListener('click', function () {
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    loadTemparature(city);
});

loadTemparature('dhaka');