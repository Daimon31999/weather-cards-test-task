import { FC } from 'react';
import { Card, Tag } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import Fallback from '../../router/Fallback';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { removeLocationAction, selectorLocation } from '../../store/locations/locationsSlice';
import { ILocationModel } from '../../utils/global/interfaces';
import './WeatherCard.scss';

interface IWeatherCardProps {
  location: ILocationModel;
}

const WeatherCard: FC<IWeatherCardProps> = ({ location }) => {
  const { id, title, description, city, tags } = location;

  const dispatch = useAppDispatch();
  const { status, locations } = useAppSelector(selectorLocation);

  const handleDeleteBtnClick = () => {
    dispatch(removeLocationAction(id));
  };

  if (status === 'loading') {
    return <Fallback />;
  }

  const temperature = locations.find((loc) => loc.city === city)?.weather?.main?.temp;

  return (
    <Card className="weather-card" key={id} title={`${title} - ${city}`}>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div className="close" onClick={handleDeleteBtnClick}>
        <DeleteOutlined />
      </div>
      <p>{description}</p>
      <div className="temperature">{temperature} °C</div>
      {tags && tags.map((tag, i) => <Tag key={tag}>{tag}</Tag>)}
    </Card>
  );
};

export default WeatherCard;
