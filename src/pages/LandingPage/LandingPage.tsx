import { FC } from 'react';
import AddLocationModal from '../../components/AddLocationModal/AddLocationModal';
import { messages } from '../../utils';
import './LandingPage.scss';

const { title } = messages.pages.landingPage;

const LandingPage: FC = () => {
  return (
    <div className="landing-page">
      <h1>{title}</h1>
      <AddLocationModal />
    </div>
  );
};

export default LandingPage;
