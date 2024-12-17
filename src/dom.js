import rainImage from "./img/rain.svg";
import cloudyImage from "./img/cloudy.svg";
import partlyCloudyImage from "./img/partly-cloudy-day.svg";
import clearDayImage from "./img/clear-day.svg";

import { getWeather } from "./api.js";
import { format } from "date-fns";

const weatherContainer = document.querySelector(".weather-container");

function addWeatherElements() {
  let dayCounter = 0;

  for (let i = 0; i < 7 ; i++) {
    let dayDiv = document.createElement("div");
    dayDiv.className = "day";
    dayDiv.dataset.day = dayCounter;

    let date = document.createElement("p");
    date.className = "date";

    let img = document.createElement("img");
    img.className = "icon";

    let tempMinDiv = document.createElement("div");
    let tempMin = document.createElement("p");
    let tempMinFormat = document.createElement("span");

    tempMinDiv.className = "temp-min-container";
    tempMin.className = "temp-min";

    tempMinDiv.append(tempMin, tempMinFormat);

    let tempMaxDiv = document.createElement("div");
    let tempMax = document.createElement("p");
    let tempMaxFormat = document.createElement("span");

    tempMaxDiv.append(tempMax, tempMaxFormat);

    tempMaxDiv.className = "temp-max-container";
    tempMax.className = "temp-max";

    let rainChance = document.createElement("p");
    rainChance.className = "rain";

    dayDiv.append(date, img, tempMinDiv, tempMaxDiv, rainChance);
    weatherContainer.append(dayDiv);

    dayCounter++;
  }
}

async function updateWeatherElements(location) {
  let data = await getWeather(location);

  weatherContainer.style.display = "flex";

  for(let i = 0; i < 7; i++) {
    let daySelector = `.day[data-day="${i}"]`;

    let date = document.querySelector(`${daySelector} > .date`);
    let icon = document.querySelector(`${daySelector} > .icon`);
    let tempMin = document.querySelector(`${daySelector} > div > .temp-min`);
    let tempMinFormat = document.querySelector(`${daySelector} > div > .temp-min`).nextSibling;
    let tempMax = document.querySelector(`${daySelector} > div > .temp-max`);
    let tempMaxFormat = document.querySelector(`${daySelector} > div > .temp-max`).nextSibling;
    let rainChance = document.querySelector(`${daySelector} > .rain`);

    date.textContent = format(new Date(data[i].datetime), "dd MMM");
    icon.src = iconSelector(data[i].icon);
    tempMin.textContent = "Min: " + data[i].tempmin;
    tempMinFormat.textContent = "ºF";
    tempMax.textContent = "Max: " + data[i].tempmax;
    tempMaxFormat.textContent = "ºF";
    rainChance.textContent = "Rain: " + data[i].precipprob + "%";
  }
}

function iconSelector(name) {
  if (name == "cloudy") {
    return cloudyImage;
  } else if (name == "partly-cloudy-day") {
    return partlyCloudyImage;
  } else if (name == "rain") {
    return rainImage;
  } else {
    return clearDayImage;
  }
}

export { addWeatherElements, updateWeatherElements };