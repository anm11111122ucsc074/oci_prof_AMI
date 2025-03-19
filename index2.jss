const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

// Function to fetch weather data from OpenWeatherMap API
function getWeather() {
    const city = document.getElementById('cityInput').value;
    if (!city) {
        alert('Please enter a city name!');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                alert('City not found!');
                return;
            }

            // Extract data
            const cityName = data.name;
            const temperature = `${data.main.temp} °C`;
            const description = data.weather[0].description;
            const humidity = `Humidity: ${data.main.humidity}%`;
            const windSpeed = `Wind Speed: ${data.wind.speed} m/s`;

            // Update the UI
            document.getElementById('cityName').textContent = cityName;
            document.getElementById('temperature').textContent = temperature;
            document.getElementById('description').textContent = `Description: ${description}`;
            document.getElementById('humidity').textContent = humidity;
            document.getElementById('windSpeed').textContent = windSpeed;

            // Show weather details
            document.getElementById('weatherDetails').style.display = 'block';
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('An error occurred while fetching the weather data!');
        });
}
