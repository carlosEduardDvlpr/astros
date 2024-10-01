import React from 'react';
import styles from './preload.module.css';
import { usePlanetsContext } from '../../context/planets-context';

export default function Preload() {
  const [init, setInit] = React.useState(false);
  const [display, setDisplay] = React.useState<'grid' | 'initial'>('grid');
  const { audioRef } = usePlanetsContext();

  function handleSetInit() {
    setTimeout(() => setInit(true), 1000);
  }

  React.useEffect(() => {
  setInit(false)
  setTimeout(handleSetInit, 2000)
  }, []);

  return (
    <div className={`${styles.preload} ${display}`}>
      {init ? (
        <button
          onClick={() => {
            setDisplay('initial'), audioRef.current?.play();
          }}
        >
          Iniciar
        </button>
      ) : (
        <p>Carregando sua experiência ...</p>
      )}
    </div>
  );
}
