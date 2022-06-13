import { DateTime } from "luxon";

const API_KEY = "bce05ed5ad6d6dd4ac7a2cea7fcd991c";
const BASE_URL = "https://api.openweathermap.org/data/2.5";
const getWeatherData = (infotype, searchParams) => {
  const url = new URL(BASE_URL + "/" + infotype);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  return fetch(url).then((res) => res.json());
};
const FormattedWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;
  const { main: details, icon } = weather[0];
  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};
const formatForecostWeather = (data) => {
  let { timezone, daily, hourly } = data;
  daily = daily.slice(1, 6).map((d) => ({
    title: formatToLocalTime(d.dt, timezone, "ccc"),
    temp: d.temp.day,
    icon: d.weather[0].icon,
  }));
  hourly = hourly.slice(1, 6).map((d) => ({
    title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
    temp: d.temp,
    icon: d.weather[0].icon,
  }));
  return { timezone, daily, hourly };
};
const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(FormattedWeather);
  const { lat, lon } = formattedCurrentWeather;
  const formattedForecostWeather = await getWeatherData("onecall", {
    lat,
    lon,
    exclide: "current,minutely,alerts",
    units: searchParams.units,
  }).then(formatForecostWeather);
  return { ...formattedCurrentWeather, ...formattedForecostWeather };
};
const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy |' Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;
export default getFormattedWeatherData;

export { iconUrlFromCode, formatToLocalTime };
