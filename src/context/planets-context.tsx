import React from 'react';
import { planetsInfo, Planet } from '../utils/planets';

const PlanetsContext = React.createContext({});

export const usePlanetsContext = () => {
  const context = React.useContext(PlanetsContext);
  if (!context) throw new Error('O Provider não foi incluido na "main.tsx"');
  return context as Planet[];
};

export default function PlanetsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PlanetsContext.Provider value={planetsInfo}>
      {children}
    </PlanetsContext.Provider>
  );
}
