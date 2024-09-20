import React, { useCallback, useEffect, useMemo, useRef } from "react"
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
// import { OrbitControls } from "@react-three/drei"
import { useWindowSize } from "../../hooks/useWindowSize"
import { debounce } from "../../utilities/debounce"

import { techIconData } from "./techIconData"

export const PhysicsHeader = ({ cubesCount = 150, techIconsToLoad }) => {
  // console.log("techIconsToLoad", techIconsToLoad)

  const { camera, gl } = useThree()
  const raycaster = useMemo(() => new THREE.Raycaster(), [])
  const mouse = useMemo(() => new THREE.Vector2(), [])
  const mouseColliderRef = useRef(null)
  const viewportSizeRef = useRef({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const { width } = useWindowSize()
  const isMobile = width < 768

  // const techIconsToLoad = [
  //   "IconAxios",
  //   "IconD3",
  //   "IconFramerMotion",
  //   "IconGatsby",
  //   "IconGraphQL",
  //   "IconGSAP",
  //   "IconHygraph",
  //   "IconNetlify",
  //   "IconR3F",
  //   "IconReact",
  //   "IconReactRouter",
  //   "IconReduxToolkit",
  //   "IconStyledComponents",
  //   "IconThreeJS",
  //   "IconVite",
  //   "IconZustand",
  //   "LegoMan",
  // ]

  const techIconsToLoadPlusLegoMan = [...techIconsToLoad, "LegoMan"]

  const { nodes } = useGLTF("/models/Lego2x3.glb")

  const createCubeInstance = (count, yPos) => {
    // console.log("yPos", yPos)
    const instances = []
    for (let i = 0; i < count; i++) {
      instances.push({
        key: "cubeInstance" + i,
        position: [
          (Math.random() - 0.5) * 6,
          yPos + i,
          (Math.random() - 0.5) * 1.2,
        ],
        rotation: [Math.random(), Math.random(), Math.random()],
      })
    }
    return instances
  }

  const cubeInstanceColors = [
    "#474747",
    "#474747",
    "#474747",
    "#246f79",
    "#246f79",
    "#246f79",
    "#246f79",
    "#fda640",
    "#fc317c",
  ]
  const cubeGroupSize = Math.ceil(cubesCount / cubeInstanceColors.length)
  const cubeInstances = useMemo(
    () =>
      Array.from(
        { length: cubeInstanceColors.length },
        (_, index) =>
          createCubeInstance(cubeGroupSize, 15 + cubeGroupSize * index) // staggered position
        // createCubeInstance(cubeGroupSize, 15 + cubeGroupSize)
      ),
    [cubeGroupSize, cubeInstanceColors.length]
  )

  // Update mouse position including scroll offset
  const updateMousePosition = useCallback(
    event => {
      const debouncedUpdate = debounce(() => {
        const canvasBounds = gl.domElement.getBoundingClientRect()

        // Calculate the mouse position relative to the canvas, including scroll offset
        mouse.x =
          ((event.clientX - canvasBounds.left) / canvasBounds.width) * 2 - 1
        mouse.y =
          -((event.clientY - canvasBounds.top) / canvasBounds.height) * 2 + 1
      }, 5) // Adjust the debounce delay as needed

      debouncedUpdate()
    },
    [gl.domElement, mouse] // Dependencies
  )

  const updateColliderPosition = useCallback(() => {
    raycaster.setFromCamera(mouse, camera)

    // Intersect with a plane at z=0
    const intersectionPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0)
    const intersectionPoint = new THREE.Vector3()

    raycaster.ray.intersectPlane(intersectionPlane, intersectionPoint)

    // Update the position of the mouse collider to follow the mouse in 3D space
    if (mouseColliderRef.current) {
      mouseColliderRef.current.setTranslation(intersectionPoint)
    }
  }, [raycaster, mouse, camera, mouseColliderRef])

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
  }, [updateMousePosition, updateColliderPosition])

  // We keep the raycaster updated during the render loop
  useFrame(() => {
    updateColliderPosition()
  })

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        castShadow
        position={[0, 10, 10]}
        intensity={1.5}
        // shadow-bias={0.2}
      />
      {/* <OrbitControls /> */}

      <Physics gravity={[0, -20, 0]} debug={true}>
        {techIconsToLoadPlusLegoMan.map((icon, index) => (
          <LoadATechIcon
            key={icon}
            path={techIconData[icon].path}
            cuboidColliderArgs={techIconData[icon].cuboidColliderArgs}
            modelName={techIconData[icon].modelName}
            scale={techIconData[icon].scale}
            yPos={80 + index * 3}
          />
        ))}

        {cubeInstances.map((cubeGroup, index) => (
          <InstancedRigidBodies
            key={"cubeGroup" + index}
            instances={cubeGroup}
            linearDamping={0.8}
            angularDamping={0.8}
            mass={1}
          >
            <instancedMesh
              args={[null, null, cubeGroup.length]}
              geometry={nodes.Cube.geometry}
              castShadow
              receiveShadow
              frustumCulled={false}
            >
              <meshStandardMaterial
                attach="material"
                color={cubeInstanceColors[index]}
              />
            </instancedMesh>
          </InstancedRigidBodies>
        ))}

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
          {!isMobile && (
            <>
              <CuboidCollider
                name="left Edge Collider"
                args={[10, viewportSizeRef.current.height, 100]}
                position={[-(viewportSizeRef.current.width / 2 / 37), 0, 0]}
              />
              <CuboidCollider
                name="right Edge Collider"
                args={[10, viewportSizeRef.current.height, 100]}
                position={[viewportSizeRef.current.width / 2 / 37, 0, 0]}
              />
            </>
          )}
        </RigidBody>

        <RigidBody
          ref={mouseColliderRef}
          type="kinematicPosition"
          // colliders="hull"
          // restitution={0.2}
          restitution={0}
          friction={10}
          // friction={1}
          ccd={true}
        >
          <CuboidCollider
            name="pointer Collider"
            args={[1, 1, 1]}
            position={[0, 0, 0]}
          />
        </RigidBody>
      </Physics>
    </>
  )
}

const LoadATechIcon = ({
  path,
  cuboidColliderArgs,
  modelName,
  scale,
  yPos,
}) => {
  const { nodes } = useGLTF(path)
  return (
    <RigidBody position={[0, yPos, 0]} mass={1} colliders={false}>
      <CuboidCollider args={cuboidColliderArgs} />
      <primitive
        object={nodes[modelName]}
        receiveShadow={true}
        castShadow={true}
        scale={scale}
      />
    </RigidBody>
  )
}
