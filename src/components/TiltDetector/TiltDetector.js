import React, { useEffect, useState } from "react"

export const TiltDetector = () => {
  const [tiltValue, setTiltValue] = useState()

  useEffect(() => {
    window.addEventListener("devicemotion", function (event) {
      // Get acceleration data (without gravity)
      var acceleration = event.accelerationIncludingGravity
      // x is the tilt on the left/right axis
      var tiltX = acceleration.x
      // y is the tilt on the forward/backward axis
      var tiltY = acceleration.y
      setTiltValue(`x:${tiltX} y:${tiltY}`)
    })
  }, [])

  return <div className="tiltDetector">{tiltValue}</div>
}
