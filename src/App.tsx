import { Outlet } from 'react-router-dom';
import Header from './components/header';
import Preload from './components/preload/preload';

export default function App() {
  
  return (
    <>
      <Header />
      <Preload />
      <main>
        <Outlet />
      </main>
    </>
  );
}
