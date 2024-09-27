import React from 'react';
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

const imagesPlanets = [
  { name: 'sol', image: sunImage },
  { name: 'mercurio', image: mercuryImage },
  { name: 'venus', image: venusImage },
  { name: 'terra', image: earthImage },
  { name: 'marte', image: marsImage },
  { name: 'jupiter', image: jupiterImage },
  { name: 'saturno', image: saturnImage },
  { name: 'urano', image: uranusImage },
  { name: 'netuno', image: neptuneImage },
];

export default function Header() {
  const { setToggle, toggle } = usePlanetsContext();

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <header className={styles.header}>
      <h1>Astros</h1>
      <button onClick={handleToggle}>
        {toggle ? 'Ver menos...' : 'Ver todos os planetas'}
      </button>
      {toggle && (
        <nav className={styles.navegation}>
          <ul>
            {imagesPlanets.map((planet) => (
              <Link key={planet.name} to={'/planets/' + planet.name}>
                <li>
                  <p>{planet.name}</p>
                  <img src={planet.image} alt={planet.name} width={60} />
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
