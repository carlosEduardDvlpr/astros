import styles from './planets-page.module.css';
import { useParams } from 'react-router-dom';
import { SunModel } from '../../components/models/sun';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { MercuryModel } from '../../components/models/mercury';
import { VenusModel } from '../../components/models/venus';
import { EarthModel } from '../../components/models/earth.js';
import { MarsModel } from '../../components/models/mars';
import { JupiterModel } from '../../components/models/jupiter';
import { SaturnModel } from '../../components/models/saturn';
import { UranusModel } from '../../components/models/uranus';
import { NeptuneModel } from '../../components/models/neptune';
import React, { Suspense } from 'react';
import { usePlanetsContext } from '../../context/planets-context';
import useMedia from '../../hooks/useMedia';

export default function PlanetsPage() {
  const { id } = useParams<{ id: 'Sun' }>();
  const { planets, toggle } = usePlanetsContext();
  const [openSummary, setOpenSummary] = React.useState(false);
  const media = useMedia();

  const models = {
    Sun: SunModel,
    Mercury: MercuryModel,
    Venus: VenusModel,
    Earth: EarthModel,
    Mars: MarsModel,
    Jupiter: JupiterModel,
    Saturn: SaturnModel,
    Uranus: UranusModel,
    Neptune: NeptuneModel,
  };

  const CurrentPlanetModel = id && models[id];
  const CurrentPlanetInfo = id && planets[id];

  return (
    <section className={styles.container}>
      <div className={styles.planets}>
        <h1
          style={{ color: `${CurrentPlanetInfo?.color}` }}
          className={styles.planets_title}
        >
          {CurrentPlanetInfo?.name}
        </h1>{' '}
        {media <= 900 ? (
          ''
        ) : (
          <>
            <p>{CurrentPlanetInfo?.description}</p>
            <ul>
              {CurrentPlanetInfo?.width && (
                <li>Tamanho: {CurrentPlanetInfo?.width}</li>
              )}
              {CurrentPlanetInfo?.velocity && (
                <li>Velocidade de rotação: {CurrentPlanetInfo?.velocity}</li>
              )}
              {CurrentPlanetInfo?.delayOfRotate && (
                <li>Tempo de rotação: {CurrentPlanetInfo?.delayOfRotate}</li>
              )}
              {CurrentPlanetInfo?.delayOfTranslateForSun && (
                <li>
                  Tempo de translação:{' '}
                  {CurrentPlanetInfo?.delayOfTranslateForSun}
                </li>
              )}
              {CurrentPlanetInfo?.distanceOfEarth && (
                <li>
                  Distancia do planeta Terra:{' '}
                  {CurrentPlanetInfo?.distanceOfEarth}
                </li>
              )}
              {CurrentPlanetInfo?.delayOfTranslateForGalaxy && (
                <li>
                  Tempo de translação através da galaxia:{' '}
                  {CurrentPlanetInfo?.delayOfTranslateForGalaxy}
                </li>
              )}
            </ul>
          </>
        )}
      </div>
      <Suspense fallback={'Carregando...'}>
        <Canvas
          style={{
            width: `${media <= 900 ? '90%' : '520px'}`,
            height: `${media <= 900 && openSummary ? '40%' : '85%'}`,
            marginLeft: '10px',
            zIndex: `${toggle ? -1 : 1}`,
          }}
        >
          <ambientLight intensity={2} />
          <OrbitControls
            enableZoom={true}
            autoRotate={true}
            autoRotateSpeed={2}
            enablePan={false}
            maxDistance={media <= 900 ? 1.6 : 1.2}
            minDistance={media <= 900 ? 1.2 : 1}
          />
          {CurrentPlanetModel && <CurrentPlanetModel />}
        </Canvas>
      </Suspense>
      {media <= 900 ? (
        <details open={false} style={{ cursor: 'pointer' }}>
          <summary onClick={() => setOpenSummary(!openSummary)}>Mais informações</summary>
          <p>{CurrentPlanetInfo?.description}</p>

          <ul>
            {CurrentPlanetInfo?.width && (
              <li>Tamanho: {CurrentPlanetInfo?.width}</li>
            )}
            {CurrentPlanetInfo?.velocity && (
              <li>Velocidade de rotação: {CurrentPlanetInfo?.velocity}</li>
            )}
            {CurrentPlanetInfo?.delayOfRotate && (
              <li>Tempo de rotação: {CurrentPlanetInfo?.delayOfRotate}</li>
            )}
            {CurrentPlanetInfo?.delayOfTranslateForSun && (
              <li>
                Tempo de translação: {CurrentPlanetInfo?.delayOfTranslateForSun}
              </li>
            )}
            {CurrentPlanetInfo?.distanceOfEarth && (
              <li>
                Distancia do planeta Terra: {CurrentPlanetInfo?.distanceOfEarth}
              </li>
            )}
            {CurrentPlanetInfo?.delayOfTranslateForGalaxy && (
              <li>
                Tempo de translação através da galaxia:{' '}
                {CurrentPlanetInfo?.delayOfTranslateForGalaxy}
              </li>
            )}
          </ul>
        </details>
      ) : (
        ''
      )}
    </section>
  );
}
