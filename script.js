<<<<<<< HEAD
async function getWeatherData(location) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=52ec62ad7265b34a449c5312eebc16f9`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        alert('Failed to fetch weather data. Please try again later.');
    }
}

document.getElementById('location').addEventListener('input', function() {
    if (this.value.trim() !== '') {
        document.getElementById('location-label').style.display = 'none'; 
    } else {
        document.getElementById('location-label').style.display = 'block'; 
    }
});


function processWeatherData(data) {
    if (!data || !data.main || !data.weather) {
        alert('Invalid data received from the API');
        return null;
    }
    return {
        location: data.name,
        temperature: (data.main.temp - 273.15).toFixed(2), 
        description: data.weather[0].description,
        icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    };
}

document.getElementById('location-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const location = document.getElementById('location').value;
    document.getElementById('loading').style.display = 'block';
    const data = await getWeatherData(location);
    document.getElementById('loading').style.display = 'none';
    if (data) {
        const weather = processWeatherData(data);
        if (weather) {
            displayWeather(weather);
        }
    }
});

function displayWeather(weather) {
    let weatherIconHtml;
    if (weather.description.includes('cloud')) {
        weatherIconHtml = `
            <div class="cloud-icon">
                <div class="cloud-circle"></div>
            </div>`;
    } else if (weather.description.includes('rain')) {
        weatherIconHtml = `
            <div class="rain-icon">
                <div class="rain-drop"></div>
            </div>`;
    } else {
        weatherIconHtml = `
            <div class="sun-icon">
                <div class="sun-ray"></div>     
            </div>`;
    }

    const weatherInfo = `
        <h2>${weather.location}</h2>
        ${weatherIconHtml}
        <p>Temperature: ${weather.temperature}°C</p>
        <p>Description: ${weather.description}</p>
    `;
    document.getElementById('weather-info').innerHTML = weatherInfo;
    document.getElementById('weather-info').style.display = 'block';
}
=======
async function getWeatherData(location) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=52ec62ad7265b34a449c5312eebc16f9`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        alert('Failed to fetch weather data. Please try again.');
    }
}


function processWeatherData(data) {
    if (!data || !data.main || !data.weather) {
        alert('Invalid weather data received.');
        return null;
    }
    return {
        location: data.name,
        temperature: (data.main.temp - 273.15).toFixed(2), 
        description: data.weather[0].description,
        icon: data.weather[0].icon
    };
}

document.getElementById('location-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    const location = document.getElementById('location').value.trim();
    
    
    if (!location) return;

   
    document.getElementById('loading').style.display = 'block';
    document.getElementById('weather-info').style.display = 'none';

 
    const data = await getWeatherData(location);
    document.getElementById('loading').style.display = 'none';

    
    if (data) {
        const weather = processWeatherData(data);
        if (weather) {
            displayWeather(weather);
        }
    }
});


document.getElementById('location').addEventListener('input', function () {
    const location = this.value.trim();

    
    if (!location) {
        document.getElementById('weather-info').style.display = 'none';
    }
});


function displayWeather(weather) {
    const weatherInfo = `
        <h2>${weather.location}</h2>
        <img src="http://openweathermap.org/img/wn/${weather.icon}.png" alt="${weather.description}" class="weather-icon">
        <p>Temperature: ${weather.temperature}°C</p>
        <p>Description: ${weather.description}</p>
    `;
    document.getElementById('weather-info').innerHTML = weatherInfo;
    document.getElementById('weather-info').style.display = 'block';
}
>>>>>>> 5600cf6 (Updates)
