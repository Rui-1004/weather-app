async function getWeather(location) {
  let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=KWXFBXFA9CLKLKY7GLQ7J9Z33`, {mode: 'cors'});
  let locationData = await response.json();

  return locationData.days;
}

export { getWeather };