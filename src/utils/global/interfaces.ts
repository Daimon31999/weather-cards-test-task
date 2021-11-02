import { IOpenWeatherResponseModel } from '../../api/openWeather';

export interface IAuthPayload {
  userName: string;
  password: string;
}

export type WeatherType = Array<IOpenWeatherResponseModel>;

export interface IWrapperProps {
  children: React.ReactNode;
}

export interface IRoutesProps {
  name: string;
  path: string;
  icon?: JSX.Element;
  Component: React.FC;
  exact?: boolean;
  restricted?: boolean;
}

export interface IScoreConfig {
  maxValue: number;
  step: number;
}

export type TagModelType = Array<string>;

export interface ILocationModel {
  id: string;
  title: string;
  city: string;
  description: string;
  tags: TagModelType;
  weather: OpenWeatherModelType;
}

export type LocationsType = Array<ILocationModel>;

export type OpenWeatherModelType = IOpenWeatherResponseModel | null;
