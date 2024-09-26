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

const imagesPlanets = [
  { name: 'Sol', image: sunImage },
  { name: 'Mercurio', image: mercuryImage },
  { name: 'Venus', image: venusImage },
  { name: 'Terra', image: earthImage },
  { name: 'Marte', image: marsImage },
  { name: 'Jupiter', image: jupiterImage },
  { name: 'Saturno', image: saturnImage },
  { name: 'Urano', image: uranusImage },
  { name: 'Netuno', image: neptuneImage },
];

export default function Header() {
  const [toggle, setToggle] = React.useState(false);

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
              <Link to={`/planets/${planet.name}`} key={planet.name}>
                <li>
                  <p>{planet.name}</p>
                  <img src={planet.image} alt={planet.name} width={60} />
                </li>{' '}
              </Link>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
