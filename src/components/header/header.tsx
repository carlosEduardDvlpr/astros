import sunImage from '../../assets/planets/sun.png';
import mercuryImage from '../../assets/planets/mercury.png';
import venusImage from '../../assets/planets/venus.png';
import earthImage from '../../assets/planets/earth.png';
import marsImage from '../../assets/planets/mars.png';
import jupiterImage from '../../assets/planets/jupiter.png';
import saturnImage from '../../assets/planets/saturn.png';
import uranusImage from '../../assets/planets/uranus.png';
import neptuneImage from '../../assets/planets/neptune.png';
import styles from './header.module.css';
import { Link } from 'react-router-dom';
import { usePlanetsContext } from '../../context/planets-context';
import { Volume2, VolumeOff } from 'lucide-react';
import React from 'react';

const imagesPlanets = [
  { link: 'Sun', name: 'Sol', image: sunImage },
  { link: 'Mercury', name: 'Mercúrio', image: mercuryImage },
  { link: 'Venus', name: 'Venus', image: venusImage },
  { link: 'Earth', name: 'Terra', image: earthImage },
  { link: 'Mars', name: 'Marte', image: marsImage },
  { link: 'Jupiter', name: 'Júpiter', image: jupiterImage },
  { link: 'Saturn', name: 'Saturno', image: saturnImage },
  { link: 'Uranus', name: 'Urano', image: uranusImage },
  { link: 'Neptune', name: 'Netuno', image: neptuneImage },
];

export default function Header() {
  const [play, setPlay] = React.useState(true);
  const { setToggle, toggle, audioRef } = usePlanetsContext();

  function handleAudioPause() {
    audioRef.current?.pause();
    setPlay(false);
  }

  function handleAudioPlay() {
    audioRef.current?.play();
    setPlay(true);
  }

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <header className={styles.header}>
      <Link
        to={'/'}
        onClick={() => setToggle(false)}
        style={{ textDecoration: 'none' }}
      >
        <h1>Astros</h1>
      </Link>
      <div>
        {play ? (
          <Volume2 cursor={'pointer'} onClick={handleAudioPause} />
        ) : (
          <VolumeOff cursor={'pointer'} onClick={handleAudioPlay} />
        )}

        <audio ref={audioRef} loop>
          <source src="https://impmjmvcachyhjcjnyjv.supabase.co/storage/v1/object/public/astros/music.mp3?t=2024-10-03T15%3A58%3A37.089Z" />
        </audio>
        <button onClick={handleToggle}>
          {toggle ? 'Ver menos...' : 'Ver todos os planetas'}
        </button>
      </div>

      {toggle && (
        <nav className={styles.navegation}>
          <ul>
            {imagesPlanets.map((planet) => (
              <Link
                onClick={handleToggle}
                key={planet.link}
                to={'/planets/' + planet.link}
              >
                <li>
                  <p>{planet.name}</p>
                  <img src={planet.image} alt={planet.name} width={45} />
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
