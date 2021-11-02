import apiClient from './apiClient';
import { IOpenWeatherResponseModel } from './openWeather';

export function fetchWeatherByCountryNameRequest(q: string) {
  return apiClient.get<IOpenWeatherResponseModel>('', {
    params: {
      q,
    },
  });
}
