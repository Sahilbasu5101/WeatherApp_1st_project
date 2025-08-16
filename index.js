 const apikey = "d0ebcf98aae1f441ea5b608e7684c056";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weather = document.querySelector(".weathericon")

        async function checkWeather(city) {
            const response = await fetch(apiUrl + city + `&appid=${apikey}`);
            const data = await response.json();

            console.log(data);

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";


            if (data.weather[0].main== "Clouds") {
                weather.src = "images/clouds.png"
            } else if (data.weather[0].main=="Clear") {
                weather.src = "images/clear.png"
            }else if (data.weather[0].main=="Rain") {
                weather.src = "images/rain.png"
            }else if (data.weather[0].main=="Drizzle") {
                weather.src = "images/drizzle.png"
            }else if (data.weather[0].main=="Mist") {
                weather.src = "images/mist.png"
            }


        }


        searchBtn.addEventListener("click", () => {
            checkWeather(searchBox.value)
        })
