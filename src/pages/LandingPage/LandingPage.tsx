import { FC, useState } from 'react';
import { Button, Empty, Modal } from 'antd';
import AddLocationModal from '../../components/AddLocationModal/AddLocationModal';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import { useAppSelector } from '../../store/hooks';
import { selectorLocation } from '../../store/locations/locationsSlice';
import { messages } from '../../utils';
import './LandingPage.scss';

const { title, modal } = messages.pages.landingPage;
const { emptyLocatorsList } = messages.alerts.error;
const { modalTitle } = modal;

const LandingPage: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { locations } = useAppSelector(selectorLocation);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="landing-page">
      <div className="header">
        <h1>{title}</h1>
        <Button onClick={showModal}>Add Location</Button>
      </div>
      <Modal title={modalTitle} visible={isModalVisible} onCancel={handleCancel} footer={null}>
        <AddLocationModal handleCancel={handleCancel} />
      </Modal>
      <div className="cards-wrapper">
        {locations.length ? (
          locations.map((location) => <WeatherCard key={location.id} location={location} />)
        ) : (
          <Empty description={emptyLocatorsList} />
        )}
      </div>
    </div>
  );
};

export default LandingPage;
