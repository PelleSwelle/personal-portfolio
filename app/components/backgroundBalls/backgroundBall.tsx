'use client'

import { useEffect, useRef } from 'react'
import styles from './backgroundBalls.module.css'

export default function BackgroundBall({
    color, animation }: {
        color: string,
        animation: {keyframes: Keyframe[], options: KeyframeEffectOptions },
    }) {

    const ball = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (null !== ball.current) {
            const style = ball.current.style;
            style.backgroundColor = color;
    
            ball.current.animate(
                animation.keyframes, animation.options
            )
        }
    })

    return (
        <div className={styles.backgroundBall} ref={ball}></div>
    )
}