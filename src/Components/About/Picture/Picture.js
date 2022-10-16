import './Picture.scss'
import * as THREE from 'three'
import { useRef, useState, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, OrbitControls } from '@react-three/drei'
import { my_words } from '../../../utils/enum'

function Word({ children, ...props }) {
  const color = new THREE.Color()
  const fontProps = {
    font: '/Inter-Bold.woff',
    fontSize: 2.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    'material-toneMapped': false,
  }
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  const over = (e) => (e.stopPropagation(), setHovered(true))
  const out = () => setHovered(false)

  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer'
    return () => (document.body.style.cursor = 'auto')
  }, [hovered])
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion)
    // Animate font color
    ref.current.material.color.lerp(
      color.set(hovered ? '#fa2720' : 'white'),
      0.1
    )
  })
  return (
    <Text
      ref={ref}
      onPointerOver={over}
      onPointerOut={out}
      onClick={() => console.log('clicked')}
      {...props}
      {...fontProps}
      children={children}
    />
  )
}

function Cloud({ count = 11, radius = 20 }) {
  // Create a count x count random words with spherical distribution
  // const c = my_words[0]
  const words = useMemo(() => {
    const temp = []
    const spherical = new THREE.Spherical()
    const phiSpan = Math.PI / (count + 1)
    const thetaSpan = (Math.PI * 2) / count
    for (let i = 1; i < count + 1; i++)
      for (let j = 0; j < count; j++)
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j)
          ),
          my_words[j + i],
        ])
    return temp
  }, [count, radius])
  return words.map(([pos, word], index) => (
    <Word key={index} position={pos} children={word} />
  ))
}

const Picture = () => {
  const deg2rad = degrees => degrees * (Math.PI / 180);
  
  return (
    <div className="picture-container">
      <Canvas dpr={[1, 2]} camera={window.screen.width > 600 ? {position: [0, 10, 35], fov: 90 } : {position: [0, 10, 35], fov: 80 }}>
      
        <fog attach="fog" args={['#202025', 0, 80]} />
        <Cloud count={8} radius={20} />
        <OrbitControls autoRotate={true} autoRotateSpeed={window.screen.width <= 600 ? 1.0 : 0.4} />
      </Canvas>
    </div>
  )
}

// const Picture = () => {
//   return (
//     <div className='picture-container'>

//     </div>
//   )
// }

export default Picture