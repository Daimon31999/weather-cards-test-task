import React from 'react';
import Loader from '../components/Loader/Loader';

export default function Fallback() {
  return (
    <div className="router-lazy-spin">
      <Loader />;
    </div>
  );
}
