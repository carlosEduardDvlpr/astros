import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { SolarSystemModel } from '../../components/models/solar-system';
import useMedia from '../../hooks/useMedia';
import { usePlanetsContext } from '../../context/planets-context';

export default function HomePage() {
  const media = useMedia();
  const { toggle } = usePlanetsContext();
  return (
    <Canvas
      fallback={'Carregando modelo 3D..'}
      style={{ zIndex: `${toggle ? -1 : 1}`, cursor: 'pointer' }}
    >
      <ambientLight intensity={1} />
      <OrbitControls
        minDistance={media > 1000 ? 2.5 : 2}
        maxDistance={media > 1000 ? 6 : 9}
        enableZoom={true}
        autoRotate={true}
        autoRotateSpeed={1}
        // enablePan={false}
      />
      <SolarSystemModel />
    </Canvas>
  );
}
