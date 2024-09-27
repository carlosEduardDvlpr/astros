
import React from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function JupiterModel(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('public/models/jupiter.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="cc9f3eb011244a029384abd00aa12183fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="6_jupiter" position={[0, 0, 895689.438]} rotation={[-Math.PI / 2, 0, 0]} scale={2870}>
                  <mesh name="6_jupiter_jupiter_shader_0" geometry={nodes['6_jupiter_jupiter_shader_0'].geometry} material={materials.jupiter_shader} />
                  <mesh name="6_jupiter_jupiter_shader_0_1" geometry={nodes['6_jupiter_jupiter_shader_0_1'].geometry} material={materials.jupiter_shader} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('public/models/jupiter.glb')
