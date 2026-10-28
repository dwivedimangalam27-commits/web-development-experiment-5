# Weather App Using Fetch API

## Experiment Aim
To create a weather app using the Fetch API that fetches real-time weather data based on user input.

## Description
This project is a weather application that allows users to enter a city name and view its current weather information. It uses JavaScript's Fetch API to retrieve data from the Open-Meteo API and displays the results on the webpage.

## Technologies and Resources Used
- HTML5
- CSS3
- JavaScript
- Fetch API
- Open-Meteo API
- Visual Studio Code
- Web Browser
- GitHub and GitHub Pages (if used for hosting)

## Features
- Search for weather by city name.
- Display current temperature.
- Display feels-like temperature.
- Show weather conditions with an appropriate icon.
- Display humidity and wind speed.
- Show the local observation time.
- Display messages while fetching data or when an error occurs.
- Responsive design for different screen sizes.

## APIs Used
1. **Open-Meteo Geocoding API:** Finds the latitude and longitude of a city based on the entered city name.
2. **Open-Meteo Weather Forecast API:** Fetches current weather information using the city's coordinates.

The APIs used in this project do not require an API key for basic use.

## How the Application Works
1. The user enters a city name in the search box.
2. JavaScript uses the Fetch API to search for the city.
3. The application retrieves the city's latitude and longitude.
4. A second API request fetches the current weather information.
5. JavaScript processes the JSON response and displays the weather details.
6. If the city is not found or a request fails, an error message is displayed.

## Project Structure
```text
Weather-App/
├── index.html
├── style.css
└── script.js
```

## How to Run
1. Open the project folder in Visual Studio Code.
2. Ensure that `index.html`, `style.css`, and `script.js` are in the correct locations.
3. Run `index.html` in a web browser or use the Live Server extension.
4. Ensure that an internet connection is available.
5. Enter a city name and click the **Search** button to view its weather information.

## Result
A weather application was developed using HTML, CSS, JavaScript, and the Fetch API to retrieve and display current weather information based on user input.

## Learning Outcomes
- Learned to use the Fetch API to retrieve data from external APIs.
- Understood how to process JSON responses in JavaScript.
- Learned how to retrieve geographic coordinates using a city name.
- Practised DOM manipulation to display dynamic information.
- Understood basic error handling when working with API requests.
