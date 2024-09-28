// @ts-nocheck
import React from 'react';
import { useGLTF } from '@react-three/drei';
import { Group, Object3DEventMap } from 'three';

export function EarthModel(props: any) {
  const group = React.useRef<Group<Object3DEventMap> | null>(null);
  const { nodes, materials } = useGLTF('https://github.com/carlosEduardDvlpr/astros/blob/master/public/models/earth.glb');
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

useGLTF.preload('https://github.com/carlosEduardDvlpr/astros/blob/master/public/models/earth.glb');
