import { FC } from 'react';
import { messages } from '../../utils';

const { title } = messages.pages.landingPage;

const LandingPage: FC = () => {
  return (
    <div className="landing-page">
      <h1>{title}</h1>
    </div>
  );
};

export default LandingPage;
