// @ts-nocheck

import { useGLTF } from '@react-three/drei';

export function UranusModel(props) {
  const { nodes, materials } = useGLTF(
    'https://ru4gn9ssr2slv8io.public.blob.vercel-storage.com/models/uranus-mAHkMEg61hBGhW5By1D0KvTIMG3FTQ.glb',
  );
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.moon}
          position={[0, -1.924, -0.169]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(
  'https://ru4gn9ssr2slv8io.public.blob.vercel-storage.com/models/uranus-mAHkMEg61hBGhW5By1D0KvTIMG3FTQ.glb',
);
