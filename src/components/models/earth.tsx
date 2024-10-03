// @ts-nocheck
import { useGLTF } from '@react-three/drei';

export function EarthModel(props) {
  const { nodes, materials } = useGLTF('https://impmjmvcachyhjcjnyjv.supabase.co/storage/v1/object/public/astros/earth.glb');
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

useGLTF.preload('https://impmjmvcachyhjcjnyjv.supabase.co/storage/v1/object/public/astros/earth.glb');
