// @ts-nocheck

import React from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export function JupiterModel(props) {
  const group = React.useRef();
  const { nodes, materials, animations } = useGLTF('https://impmjmvcachyhjcjnyjv.supabase.co/storage/v1/object/public/astros/jupiter.glb');
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="cc9f3eb011244a029384abd00aa12183fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={1}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="6_jupiter"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={0.5}
                >
                  <mesh
                    name="6_jupiter_jupiter_shader_0"
                    geometry={nodes['6_jupiter_jupiter_shader_0'].geometry}
                    material={materials.jupiter_shader}
                  />
                  <mesh
                    name="6_jupiter_jupiter_shader_0_1"
                    geometry={nodes['6_jupiter_jupiter_shader_0_1'].geometry}
                    material={materials.jupiter_shader}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('https://impmjmvcachyhjcjnyjv.supabase.co/storage/v1/object/public/astros/jupiter.glb');
