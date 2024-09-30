//@ts-nocheck
import { useGLTF } from '@react-three/drei';

export function UranusModel(props) {
  const { nodes, materials } = useGLTF(
    'https://ru4gn9ssr2slv8io.public.blob.vercel-storage.com/models/uranus-BImJAgshUCXM1xD2DsAMxNTj5Nn1kO.glb',
  );
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.003, 0]} rotation={[Math.PI / 2, 0, Math.PI]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Sphere_Material002_0.geometry}
            material={materials['Material.002']}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.5}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(
  'https://ru4gn9ssr2slv8io.public.blob.vercel-storage.com/models/uranus-BImJAgshUCXM1xD2DsAMxNTj5Nn1kO.glb',
);
