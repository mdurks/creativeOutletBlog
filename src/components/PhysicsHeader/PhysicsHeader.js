import React, { useEffect, useMemo, useRef } from "react"
import * as THREE from "three"
import { useFrame, useThree } from "@react-three/fiber"
import { degToRad } from "three/src/math/MathUtils.js"
import {
  CuboidCollider,
  InstancedRigidBodies,
  Physics,
  RigidBody,
} from "@react-three/rapier"
import { useGLTF } from "@react-three/drei"

// Helper to debounce functions (ensures function is called only after a delay)
const debounce = (func, delay) => {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), delay)
  }
}

export const PhysicsHeader = ({ cubesCount = 175 }) => {
  const { camera, gl } = useThree()
  const raycaster = new THREE.Raycaster()
  const mouse = new THREE.Vector2()
  const mouseColliderRef = useRef(null)
  const viewportSizeRef = useRef({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const { nodes } = useGLTF("/models/Lego2x3.glb")

  const cubeInstances = useMemo(() => {
    const cubeInstances = []
    for (let i = 0; i < cubesCount; i++) {
      cubeInstances.push({
        key: "cubeInstance" + i,
        position: [
          (Math.random() - 0.5) * 6,
          15 + i * 0.75,
          (Math.random() - 0.5) * 1.2,
        ],
        rotation: [Math.random(), Math.random(), Math.random()],
      })
    }
    return cubeInstances
  }, [])

  // Update mouse position including scroll offset
  const updateMousePosition = debounce(event => {
    const canvasBounds = gl.domElement.getBoundingClientRect()

    // Calculate the mouse position relative to the canvas, including scroll offset
    mouse.x = ((event.clientX - canvasBounds.left) / canvasBounds.width) * 2 - 1
    mouse.y =
      -((event.clientY - canvasBounds.top) / canvasBounds.height) * 2 + 1
  }, 5) // Adjust the debounce delay as needed

  const updateColliderPosition = () => {
    raycaster.setFromCamera(mouse, camera)

    // Intersect with a plane at z=0
    const intersectionPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0)
    const intersectionPoint = new THREE.Vector3()

    raycaster.ray.intersectPlane(intersectionPlane, intersectionPoint)

    // Update the position of the mouse collider to follow the mouse in 3D space
    if (mouseColliderRef.current) {
      mouseColliderRef.current.setTranslation(intersectionPoint)
    }
  }

  useEffect(() => {
    const handleMouseMove = event => {
      updateMousePosition(event)
      updateColliderPosition() // Update collider position directly on mouse move
    }

    const handleScroll = () => {
      updateColliderPosition() // Update collider position on scroll
    }

    const handleResize = () => {
      viewportSizeRef.current = {
        width: window.innerWidth,
        height: window.innerHeight,
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll) // Update position when scrolling
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [gl.domElement])

  // We keep the raycaster updated during the render loop
  useFrame(() => {
    updateColliderPosition()
  })

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight castShadow position={[0, 10, 5]} intensity={1.5} />
      {/* <OrbitControls /> */}

      <Physics gravity={[0, -15, 0]} debug={false}>
        <InstancedRigidBodies
          instances={cubeInstances}
          linearDamping={0.8}
          angularDamping={0.8}
        >
          <instancedMesh
            args={[null, null, cubesCount]}
            geometry={nodes.Cube.geometry}
            castShadow
            receiveShadow
          >
            {/* <meshStandardMaterial attach="material" color="#00e1ff" /> */}
            {/* <meshStandardMaterial attach="material" color="#474747" /> */}
            <meshStandardMaterial attach="material" color="#2d484d" />
            {/* <meshStandardMaterial attach="material" color="#2c8793" /> */}
            {/* <meshStandardMaterial attach="material" color="#1a8897" /> */}
          </instancedMesh>
        </InstancedRigidBodies>

        <RigidBody type="fixed" restitution={0} friction={0.5}>
          <CuboidCollider
            name="floor Collider"
            args={[100, 10, 20]}
            position={[0, -6.25, 0]}
          />
          <CuboidCollider
            name="front Collider"
            args={[100, 100, 10]}
            position={[0, 50, 14]}
            rotation={[degToRad(3), 0, 0]}
          />
          <CuboidCollider
            name="back Collider"
            args={[100, 100, 10]}
            position={[0, 50, -14]}
            rotation={[degToRad(-3), 0, 0]}
          />

          {/* Edge Colliders */}
          <CuboidCollider
            name="left Edge Collider"
            args={[10, viewportSizeRef.current.height, 100]}
            position={[-(viewportSizeRef.current.width / 2 / 35), 0, 0]}
          />
          <CuboidCollider
            name="right Edge Collider"
            args={[10, viewportSizeRef.current.height, 100]}
            position={[viewportSizeRef.current.width / 2 / 35, 0, 0]}
          />
        </RigidBody>

        <RigidBody
          ref={mouseColliderRef}
          type="kinematicPosition"
          colliders="hull"
          restitution={0.2}
          friction={10}
          ccd={true}
        >
          <CuboidCollider
            name="pointer Collider"
            args={[0.75, 0.75, 0.75]}
            position={[0, 0, 0]}
          />
        </RigidBody>
      </Physics>
    </>
  )
}
