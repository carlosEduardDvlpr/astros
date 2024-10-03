// @ts-nocheck

import React from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export function MarsModel(props) {
  const group = React.useRef();
  const { nodes, materials, animations } = useGLTF(
    'https://impmjmvcachyhjcjnyjv.supabase.co/storage/v1/object/public/astros/mars.glb',
  );
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="656dac23814e461180cce73bdfc761ecfbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.0033}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="4_mars"
                  rotation={[-Math.PI / 2, -0.436, 0]}
                  scale={140}
                >
                  <mesh
                    name="4_mars_mars_shader_0"
                    geometry={nodes['4_mars_mars_shader_0'].geometry}
                    material={materials.mars_shader}
                  />
                  <mesh
                    name="4_mars_mars_shader_0_1"
                    geometry={nodes['4_mars_mars_shader_0_1'].geometry}
                    material={materials.mars_shader}
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

useGLTF.preload(
  'https://impmjmvcachyhjcjnyjv.supabase.co/storage/v1/object/public/astros/mars.glb',
);
