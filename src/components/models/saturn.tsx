import React from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function SaturnModel(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('public/models/saturn.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="c73578e6e589417b9cda1248e22190b9fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="7_saturn" position={[58.424, 35.828, 1094059.625]} rotation={[-1.448, 0.588, 0.042]} scale={2390}>
                  <mesh name="7_saturn_saturn_shader_0" geometry={nodes['7_saturn_saturn_shader_0'].geometry} material={materials.saturn_shader} />
                  <mesh name="7_saturn_saturn_shader_0_1" geometry={nodes['7_saturn_saturn_shader_0_1'].geometry} material={materials.saturn_shader} />
                </group>
                <group name="saturn_ring" position={[60.193, 29.753, 1094057]} rotation={[0.151, 0.042, -0.537]} scale={123.92}>
                  <mesh name="saturn_ring_saturn_ring_0" geometry={nodes.saturn_ring_saturn_ring_0.geometry} material={materials.saturn_ring} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('public/models/saturn.glb')
