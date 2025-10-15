'use client';

import BackgroundBall from "./backgroundBall";
import { generateKeyframes } from "./animation";

export default function BackgroundBalls() {
    const animations = [
        generateKeyframes({
            start: { x: 10, y: 10 },
            end: { x: 20, y: 20 }
        },
            5000),
        generateKeyframes({
            start: { x: 30, y: 90 },
            end: { x: 10, y: 50 }
        },
            8000),
        generateKeyframes({
            start: { x: 80, y: 20 },
            end: { x: 50, y: 80 }
        },
            9000),
        generateKeyframes({
            start: { x: 100, y: 20 },
            end: { x: 0, y: 100 }
        }, 4000),
        generateKeyframes({
            start: { x: 80, y: 80 },
            end: { x: 60, y: 60 }
        }, 5000)
    ];

    return (
        <>
            {/* colors from: https://www.schemecolor.com/hyperpop-fusion.php */}
            <BackgroundBall color="#9955bb" animation={animations[0]} />
            <BackgroundBall color="#ff69b3" animation={animations[1]} />
            <BackgroundBall color="#ffff99" animation={animations[2]} />
            <BackgroundBall color="#2bd9c6" animation={animations[3]} />
            <BackgroundBall color="#43318f" animation={animations[4]} />
        </>
    );
}