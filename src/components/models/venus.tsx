// @ts-nocheck

import React from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export function VenusModel(props) {
  const group = React.useRef();
  const { nodes, materials, animations } = useGLTF(
    'https://ru4gn9ssr2slv8io.public.blob.vercel-storage.com/models/venus-l1TDDK7kN5N0tKrJ8QMlkX512r4MPO.glb',
  );
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="bd655f2c51854ab7811184ccec57741dfbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.005}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="mercury"
                  rotation={[-Math.PI / 2, 0, 1.049]}
                  scale={100}
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

useGLTF.preload(
  'https://ru4gn9ssr2slv8io.public.blob.vercel-storage.com/models/venus-l1TDDK7kN5N0tKrJ8QMlkX512r4MPO.glb',
);
