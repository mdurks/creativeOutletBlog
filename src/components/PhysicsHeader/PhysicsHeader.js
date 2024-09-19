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
// import { OrbitControls } from "@react-three/drei"
import { useWindowSize } from "../../hooks/useWindowSize"
import { debounce } from "../../utilities/debounce"

export const PhysicsHeader = ({ cubesCount = 150, techIconsToLoad }) => {
  // console.log("techIconsToLoad", techIconsToLoad)

  const { camera, gl } = useThree()
  const raycaster = new THREE.Raycaster()
  const mouse = new THREE.Vector2()
  const mouseColliderRef = useRef(null)
  const viewportSizeRef = useRef({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const { width } = useWindowSize()
  const isMobile = width < 768

  const techIconData = {
    LegoMan: {
      path: "/models/LegoMan.glb",
      cuboidColliderArgs: [0.7, 1.2, 0.7],
      modelName: "LegoMan",
      scale: [1, 1, 1],
    },
    IconReact: {
      path: "/models/IconReact.glb",
      cuboidColliderArgs: [1.7, 0.25, 1.6],
      modelName: "IconReact",
      scale: [1.5, 1.5, 1.5],
    },
    IconD3: {
      path: "/models/IconD3.glb",
      cuboidColliderArgs: [1.35, 0.25, 1.3],
      modelName: "IconD3",
      scale: [1.2, 1.2, 1.2],
    },
    IconStyledComponents: {
      path: "/models/IconStyledComponents.glb",
      cuboidColliderArgs: [1.35, 0.25, 1.3],
      modelName: "IconStyledComponents",
      scale: [1.2, 1.2, 1.2],
    },
    IconGraphQL: {
      path: "/models/IconGraphQL.glb",
      cuboidColliderArgs: [1.4, 0.25, 1.4],
      modelName: "IconGraphQL",
      scale: [1.5, 1.5, 1.5],
    },
    IconGatsby: {
      path: "/models/IconGatsby.glb",
      cuboidColliderArgs: [1.35, 0.25, 1.3],
      modelName: "IconGatsby",
      scale: [1.2, 1.2, 1.2],
    },
    IconReduxToolkit: {
      path: "/models/IconReduxToolkit.glb",
      cuboidColliderArgs: [1.35, 0.25, 1.3],
      modelName: "IconReduxToolkit",
      scale: [1.2, 1.2, 1.2],
    },
    IconFramerMotion: {
      path: "/models/IconFramerMotion.glb",
      cuboidColliderArgs: [1, 0.25, 1.6],
      modelName: "IconFramerMotion",
      scale: [1.2, 1.2, 1.2],
    },
    IconR3F: {
      path: "/models/IconR3F.glb",
      cuboidColliderArgs: [2.5, 0.25, 0.7],
      modelName: "IconR3F",
      scale: [0.85, 0.85, 0.85],
    },
    IconZustand: {
      path: "/models/IconZustand.glb",
      cuboidColliderArgs: [1, 0.25, 1],
      modelName: "IconZustand",
      scale: [1.5, 1.5, 1.5],
    },
    IconVite: {
      path: "/models/IconVite.glb",
      cuboidColliderArgs: [1.5, 0.25, 1.5],
      modelName: "IconVite",
      scale: [1.6, 1.6, 1.6],
    },
    IconThreeJS: {
      path: "/models/IconThreeJS.glb",
      cuboidColliderArgs: [1.3, 0.25, 1.3],
      modelName: "IconThreeJS",
      scale: [1.5, 1.5, 1.5],
    },
    IconGSAP: {
      path: "/models/IconGSAP.glb",
      cuboidColliderArgs: [0.9, 0.25, 1.9],
      modelName: "IconGSAP",
      scale: [1.75, 1.75, 1.75],
    },
    IconReactRouter: {
      path: "/models/IconReactRouter.glb",
      cuboidColliderArgs: [1.3, 0.25, 0.9],
      modelName: "IconReactRouter",
      scale: [1.25, 1.25, 1.25],
    },
    IconAxios: {
      path: "/models/IconAxios.glb",
      cuboidColliderArgs: [2.5, 0.25, 0.6],
      modelName: "IconAxios",
      scale: [0.85, 0.85, 0.85],
    },
    IconNetlify: {
      path: "/models/IconNetlify.glb",
      cuboidColliderArgs: [2.9, 0.25, 0.7],
      modelName: "IconNetlify",
      scale: [1.1, 1.1, 1.1],
    },
    IconHygraph: {
      path: "/models/IconHygraph.glb",
      cuboidColliderArgs: [3.2, 0.25, 0.8],
      modelName: "IconHygraph",
      scale: [1.5, 1.5, 1.5],
    },
  }

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
      <directionalLight
        castShadow
        position={[0, 10, 10]}
        intensity={1.5}
        // shadow-bias={0.2}
      />
      {/* <OrbitControls /> */}

      <Physics gravity={[0, -20, 0]} debug={false}>
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
