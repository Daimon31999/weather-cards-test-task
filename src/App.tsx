import { FC } from 'react';
import MainRouter from './router/MainRouter';
import './styles/index.scss';

const App: FC = () => {
  return (
    <div className="App">
      <MainRouter />
    </div>
  );
};

export default App;
