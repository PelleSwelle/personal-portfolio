const startTopLeft: Keyframe[] = [
    { left: 40 + '%', top: 60 + '%' },
    { left: 70  + '%', top: 40 + '%' }
]

const startCenterLeft: Keyframe[] = [
    { left: 60 + '%' , top: 80 + '%'  },
    { left: 30 + '%' , top: 50 + '%' }
]

const animationOptions: KeyframeEffectOptions = {
    duration: 8000,
    direction: "alternate",
    iterations: Infinity
}

const centerLeftToRightBottom = {
    keyframes: startCenterLeft,
    options: animationOptions
}

const topLeftToCenter = {
    keyframes: startTopLeft,
    options: animationOptions
}


interface keyframeArgs {
    start: {x: number, y: number},
    end: {x: number, y: number}
}

const generateKeyframes = (positions: keyframeArgs, duration: number) => {
    const keyframes: Keyframe[] = [
        { left: positions.start.x + '%', top: positions.start.y + '%'},
        { left: positions.end.x + '%' , top: positions.end.y  + '%'}
    ]

    const options: KeyframeEffectOptions = animationOptions

    return { keyframes, options}

}

export { generateKeyframes }
