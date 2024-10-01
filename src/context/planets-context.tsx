import React from 'react';
import { planetsInfo, PlanetsInterface } from '../utils/planets';

const PlanetsContext = React.createContext({});

export const usePlanetsContext = () => {
  const context = React.useContext(PlanetsContext);
  if (!context) throw new Error('O Provider não foi incluido na "main.tsx"');
  return context as {
    planets: PlanetsInterface;
    toggle: boolean;
    setToggle: React.Dispatch<React.SetStateAction<boolean>>;
    audioRef: React.RefObject<HTMLAudioElement>;
  };
};

export default function PlanetsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [toggle, setToggle] = React.useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  return (
    <PlanetsContext.Provider
      value={{ planets: planetsInfo, toggle, setToggle, audioRef }}
    >
      {children}
    </PlanetsContext.Provider>
  );
}
