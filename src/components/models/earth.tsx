import React from 'react';
import { useGraph } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

export function EarthModel(props) {
  const group = React.useRef();
  const { scene, animations } = useGLTF('public/models/earth.glb');
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null} position={[0,0, 2]} scale={0.1}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Root">
            <group name="EARTH">
              <mesh
                name="EARTH_0"
                geometry={nodes.EARTH_0.geometry}
                material={materials['Material.001']}
              />
            </group>
            <group name="Armature">
              <primitive object={nodes.Armature_rootJoint} />
              <group name="ATM" scale={1.007} />
              <skinnedMesh
                name="ATM_0"
                geometry={nodes.ATM_0.geometry}
                material={materials['Material.002']}
                skeleton={nodes.ATM_0.skeleton}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('public/models/earth.glb');
