// @ts-nocheck

import { useGLTF } from '@react-three/drei';

export function UranusModel(props) {
  const { nodes, materials } = useGLTF(
    'https://github.com/carlosEduardDvlpr/astros/blob/master/public/models/uranus.glb',
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
  'https://github.com/carlosEduardDvlpr/astros/blob/master/public/models/uranus.glb',
);
