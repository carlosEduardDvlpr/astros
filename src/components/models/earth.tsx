// @ts-nocheck
import { useGLTF } from '@react-three/drei';

export function EarthModel(props) {
  const { nodes, materials } = useGLTF('https://ru4gn9ssr2slv8io.public.blob.vercel-storage.com/models/earth2-kG8sPcSiLSakIAplHoEaZQ4WRtz0kz.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials['Scene_-_Root']}
        scale={0.5}
        position={[0, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload('https://ru4gn9ssr2slv8io.public.blob.vercel-storage.com/models/earth2-kG8sPcSiLSakIAplHoEaZQ4WRtz0kz.glb');
