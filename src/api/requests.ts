import apiClient from './apiClient';
import { IOpenWeatherResponseModel } from './openWeather';

export function fetchWeatherByCityNameRequest(q: string) {
  return apiClient.get<IOpenWeatherResponseModel>('', {
    params: {
      q,
    },
  });
}
