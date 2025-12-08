const animationOptions: KeyframeEffectOptions = {
  duration: 8000,
  direction: "alternate",
  iterations: Infinity,
  easing: 'ease-in-out'

}

interface keyframeArgs {
  start: { x: number, y: number },
  end: { x: number, y: number }
}

const generateKeyframes = (positions: keyframeArgs) => {
  const keyframes: Keyframe[] = [
    { left: positions.start.x + '%', top: positions.start.y + '%' },
    { left: positions.end.x + '%', top: positions.end.y + '%' }
  ]

  const options: KeyframeEffectOptions = animationOptions

  return { keyframes, options }

}

export { generateKeyframes }
