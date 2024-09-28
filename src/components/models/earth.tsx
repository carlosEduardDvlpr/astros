import React from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export function EarthModel(props) {
  const group = React.useRef();
  const { nodes, materials, animations } = useGLTF('public/models/earth.glb');
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.005}
        >
          <group
            name="fc09fa6deb6c45f687e724438fed81adfbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Earth"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={57.393}
                >
                  <mesh
                    name="Earth_Earth_0"
                    geometry={nodes.Earth_Earth_0.geometry}
                    material={materials.Earth}
                  />
                  <mesh
                    name="Earth_Earth_0_1"
                    geometry={nodes.Earth_Earth_0_1.geometry}
                    material={materials.Earth}
                  />
                  <mesh
                    name="Earth_Earth_0_2"
                    geometry={nodes.Earth_Earth_0_2.geometry}
                    material={materials.Earth}
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

useGLTF.preload('public/models/earth.glb');
