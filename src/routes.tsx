import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import PlanetsPage from './pages/planets/planets-page';
import HomePage from './pages/home/home-page';
import ErrorPage from './pages/error/error-page';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/planets',
        element: <PlanetsPage />,
      },
    ],
  },
]);
