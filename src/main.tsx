import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './globals.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes.tsx';
import PlanetsProvider from './context/planets-context.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PlanetsProvider>
      <RouterProvider router={routes} />
    </PlanetsProvider>
  </StrictMode>,
);
