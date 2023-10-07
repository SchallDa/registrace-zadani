import React from 'react';
import { createRoot } from 'react-dom/client';
import Registration from './Components/Registration';

const App = () => {
  return (
    <Registration />
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
