import React from "react"
import { Canvas } from "@react-three/fiber"
import { PhysicsHeader } from "../PhysicsHeader/PhysicsHeader"
// import { TiltDetector } from "../TiltDetector/TiltDetector"

export const ThreeJSCanvas = ({ cubesCount, techIcons }) => {
  return (
    <>
      <Canvas
        // shadows
        className="physicsHeader"
        camera={{
          fov: 55,
          position: [0, 9, 10],
        }}
        onCreated={({ camera }) => {
          camera.lookAt(0, 9, 0)
        }}
      >
        <PhysicsHeader cubesCount={cubesCount} techIconsToLoad={techIcons} />
      </Canvas>
      {/* <TiltDetector /> */}
    </>
  )
}
