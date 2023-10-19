const token = import.meta.env.VITE_TOKEN;

export const searchCities = async (city) => {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/search.json?lang=pt&key=${token}&q=${city}`,
    );
    const data = await response.json();
    if (data.length === 0) {
      throw new Error('Nenhuma cidade encontrada');
    }
    return data;
  } catch (error) {
    window.alert(error.message);
  }
};

export const getWeatherByCity = async (cityURL) => {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?lang=pt&key=${token}&q=${cityURL}`,
  );
  const data = await response.json();
  const cityWeather = {
    name: data.location.name,
    country: data.location.country,
    temp: data.current.temp_c,
    condition: data.current.condition.text,
    icon: data.current.condition.icon,
    url: cityURL,
  };
  return cityWeather;
};

export const getWeatherOfTheWeek = async (cityURL) => {
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?lang=pt&key=${token}&q=${cityURL}&days=7`,
  );
  const data = await response.json();
  const forecastDayArray = data.forecast.forecastday;
  const weekWeather = await forecastDayArray.map((forecast) => {
    return {
      date: forecast.date,
      maxTemp: forecast.day.maxtemp_c,
      minTemp: forecast.day.mintemp_c,
      condition: forecast.day.condition.text,
      icon: forecast.day.condition.icon,
    };
  });
  return weekWeather;
};
