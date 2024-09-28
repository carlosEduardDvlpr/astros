import React from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export function MercuryModel(props) {
  const group = React.useRef();
  const { nodes, materials, animations } = useGLTF('public/models/mercury.glb');
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null} >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="ff9e564bab544b7a918558ecbab66e88fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.05}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="mercury"
                  rotation={[-Math.PI / 2, 0, 1.049]}
                  scale={10}
                >
                  <mesh
                    name="mercury_Material004_0"
                    geometry={nodes.mercury_Material004_0.geometry}
                    material={materials['Material.004']}
                  />
                  <mesh
                    name="mercury_Material004_0_1"
                    geometry={nodes.mercury_Material004_0_1.geometry}
                    material={materials['Material.004']}
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

useGLTF.preload('public/models/mercury.glb');
