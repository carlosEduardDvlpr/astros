// @ts-nocheck
import React from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export function NeptuneModel(props) {
  const group = React.useRef();
  const { nodes, materials, animations } = useGLTF('https://impmjmvcachyhjcjnyjv.supabase.co/storage/v1/object/public/astros/neptune.glb');
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="5db5e0f16c09457d8f6c2c710a9652bbfbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="9_neptune001"
                  rotation={[-Math.PI / 2, -0.494, 0]}
                  scale={50}
                >
                  <mesh
                    name="9_neptune001_neptune_shader_0"
                    geometry={nodes['9_neptune001_neptune_shader_0'].geometry}
                    material={materials.neptune_shader}
                  />
                  <mesh
                    name="9_neptune001_neptune_shader_0_1"
                    geometry={nodes['9_neptune001_neptune_shader_0_1'].geometry}
                    material={materials.neptune_shader}
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

useGLTF.preload('https://impmjmvcachyhjcjnyjv.supabase.co/storage/v1/object/public/astros/neptune.glb');
