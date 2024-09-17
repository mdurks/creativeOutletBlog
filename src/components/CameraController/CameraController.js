import { useEffect, useRef } from "react"
import { useFrame, useThree } from "@react-three/fiber"

export const CameraController = ({ inertia, moveAmount }) => {
  const three = useThree()

  const mouse = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })

  const handleMouseMove = e => {
    const { clientX, clientY } = e
    const { innerWidth, innerHeight } = window

    // Normalize mouse position to [-0.5, 0.5]
    mouse.current.x = clientX / innerWidth - 0.5
    mouse.current.y = clientY / innerHeight - 0.5
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  useFrame(() => {
    // Smoothly interpolate target position
    target.current.x += (mouse.current.x - target.current.x) * inertia
    target.current.y += (mouse.current.y - target.current.y) * inertia - 0.1

    // Update camera rotation or position
    three.camera.rotation.y = -target.current.x * Math.PI * moveAmount
    three.camera.rotation.x = -target.current.y * Math.PI * moveAmount
  })

  return null
}
