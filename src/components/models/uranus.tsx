import React from 'react'
import { useGLTF } from '@react-three/drei'

export function UranusModel(props) {
  const { nodes, materials } = useGLTF('public/models/uranus.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh geometry={nodes.Esfera_URANO_0.geometry} material={materials.URANO} position={[-53.915, 175.759, 95.362]} />
      </group>
    </group>
  )
}

useGLTF.preload('public/models/uranus.glb')
