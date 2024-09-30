import { Outlet } from 'react-router-dom';
import Header from './components/header';
import Preload from './components/preload/preload';
import React from 'react';

export default function App() {
  const [blocked, setBlocked] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('load', () =>
      setTimeout(() => setBlocked(true), 1500),
    );
    return () => window.removeEventListener('load', () => setBlocked(true));
  }, []);

  return (
    <>
      <Header />
      <main>
        {!blocked ? <Preload /> : ''}
        <Outlet />
      </main>
    </>
  );
}
