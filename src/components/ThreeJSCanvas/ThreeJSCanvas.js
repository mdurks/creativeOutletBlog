import React from "react"
import { Canvas } from "@react-three/fiber"
import { PhysicsHeader } from "../PhysicsHeader/PhysicsHeader"

export const ThreeJSCanvas = ({ cubesCount }) => {
  return (
    <Canvas
      shadows
      className="physicsHeader"
      camera={{
        position: [0, 9, 7],
      }}
      onCreated={({ camera }) => {
        camera.lookAt(0, 9, 0)
      }}
    >
      <PhysicsHeader cubesCount={cubesCount} />
    </Canvas>
  )
}
