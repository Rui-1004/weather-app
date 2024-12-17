import './styles.css';

import { addWeatherElements, updateWeatherElements } from './dom.js';
import { getWeather } from './api.js';

const form = document.querySelector("form");

function handleForm() {
  let input = document.querySelector("input").value;

  updateWeatherElements(input);
}

form.addEventListener("submit", () => {
  event.preventDefault();
  handleForm();
});

addWeatherElements();