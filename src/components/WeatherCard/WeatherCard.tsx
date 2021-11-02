import { DeleteOutlined } from '@ant-design/icons';
import { Card, Tag } from 'antd';
import { FC, useEffect } from 'react';
import Fallback from '../../router/Fallback';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { removeLocationAction, selectorWeather } from '../../store/locations/locationsSlice';
import { getWeatherByCountryName } from '../../store/weater/weaterSlice';
import { ILocationModel } from '../../utils/global/interfaces';
import './WeatherCard.scss';

interface IWeatherCardProps {
  location: ILocationModel;
}

const WeatherCard: FC<IWeatherCardProps> = ({ location }) => {
  const { id, title, description, city, tags } = location;
  const dispatch = useAppDispatch();
  const { status, weatherData } = useAppSelector(selectorWeather);

  useEffect(() => {
    dispatch(getWeatherByCountryName(city));
  }, [id]);

  const handleDeleteBtnClick = () => {
    dispatch(removeLocationAction(id));
  };

  if (status === 'loading' || !weatherData) {
    return <Fallback />;
  }

  const temperature = weatherData.main.temp;

  return (
    <Card className="weather-card" key={id} title={`${title} - ${city}`}>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div className="close" onClick={handleDeleteBtnClick}>
        <DeleteOutlined />
      </div>
      <p>Description: {description}</p>
      <div className="temperature">{temperature} °C</div>

      {tags && tags.map((tag, i) => <Tag key={tag}>{tag}</Tag>)}
    </Card>
  );
};

export default WeatherCard;
