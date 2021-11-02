const data = {
  coord: { lon: 37.6156, lat: 55.7522 },
  weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }],
  base: 'stations',
  main: {
    temp: 274.49,
    feels_like: 272.05,
    temp_min: 271.9,
    temp_max: 275.5,
    pressure: 1022,
    humidity: 89,
    sea_level: 1022,
    grnd_level: 1004,
  },
  visibility: 10000,
  wind: { speed: 2.18, deg: 136, gust: 4.57 },
  clouds: { all: 6 },
  dt: 1635837784,
  sys: { type: 2, id: 2018597, country: 'RU', sunrise: 1635827858, sunset: 1635860908 },
  timezone: 10800,
  id: 524901,
  name: 'Moscow',
  cod: 200,
};

export type IOpenWeatherResponseModel = typeof data;
