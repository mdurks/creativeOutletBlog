import * as THREE from "three"

export const hslStringToThreeColor = hslString => {
  const hslRegex = /hsl\((\d+)deg\s+(\d+)%\s+(\d+)%\)/
  const result = hslRegex.exec(hslString)

  if (result) {
    const h = parseInt(result[1], 10) / 360 // Convert from degrees to 0-1 range
    const s = parseInt(result[2], 10) / 100 // Percentage to 0-1
    const l = parseInt(result[3], 10) / 100 // Percentage to 0-1

    // Create the color and set the HSL values
    const color = new THREE.Color()
    color.setHSL(h, s, l)

    // Convert the color from sRGB to linear space for accurate rendering
    color.convertSRGBToLinear()

    return color
  }

  // Return a default color (white) in case of failure
  return new THREE.Color(1, 1, 1)
}
