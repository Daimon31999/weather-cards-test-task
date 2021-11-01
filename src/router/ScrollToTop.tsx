import { FC, useEffect, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: FC<ReactNode> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children as JSX.Element;
};

export default ScrollToTop;
