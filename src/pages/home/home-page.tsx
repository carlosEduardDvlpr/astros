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
      style={{ zIndex: `${toggle ? -1 : 1}`}}
    >
      <ambientLight intensity={0} />
      <OrbitControls
        minDistance={media > 1000 ? 4 : 10}
        maxDistance={media > 1000 ? 6 : 12}
        enableZoom={true}
        autoRotate={true}
        autoRotateSpeed={1}
        enablePan={false}
      />
      <SolarSystemModel />
    </Canvas>
  );
}
