import { Outlet, useLocation, useSearchParams } from 'react-router-dom';
import Header from './components/header';
import Preload from './components/preload/preload';
import React from 'react';

export default function App() {
  const [blocked, setBlocked] = React.useState(false);
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.addEventListener('load', () => setBlocked(true));
    if (pathname === '/planets/Sun') setBlocked(true);
    return () => window.removeEventListener('load', () => setBlocked(true));
  }, []);

  return (
    <>
      <Header />
      <main>
        {!blocked ? <Preload /> : <Preload className="blocked" />}
        <Outlet />
      </main>
    </>
  );
}
