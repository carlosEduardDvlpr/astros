import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import styles from './home-page.module.css';
import { SolarSystemModel } from '../../components/models/solar-system';
import useMedia from '../../hooks/useMedia';
import { usePlanetsContext } from '../../context/planets-context';

export default function HomePage() {
  const media = useMedia();
  const { toggle } = usePlanetsContext();
  console.log(media);
  return (
    <>
      <main className={styles.planets}>
        <Canvas
          fallback={'Carregando modelo 3D..'}
          style={{ zIndex: `${toggle ? -1 : 1}` }}
        >
          <ambientLight intensity={6} />
          <OrbitControls
            minDistance={media > 1000 ? 3 : 10}
            maxDistance={media > 1000 ? 8 : 12}
            enableZoom={true}
            autoRotate={true}
            autoRotateSpeed={1}
            enablePan={false}
          />
          <SolarSystemModel />
        </Canvas>
      </main>
    </>
  );
}
