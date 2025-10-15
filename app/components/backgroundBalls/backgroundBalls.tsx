import BackgroundBall from "./backgroundBall"
import { generateKeyframes } from "./animation"

export default function BackgroundBalls() {

    const animations = [
        generateKeyframes({
            start: {x: 10, y: 10}, 
            end: {x: 20, y: 20}}, 
            5000),
        generateKeyframes({
            start: {x: 30, y: 90}, 
            end: {x: 10, y: 50}}, 
            8000),
        generateKeyframes({
            start: {x: 80, y: 20}, 
            end: {x: 50, y: 80}}, 
            9000),
        generateKeyframes({
            start: {x: 100, y: 20},
            end: {x: 0, y: 100}
        }, 4000)
    ]

    return (
        <>
            <BackgroundBall color='#aa2020' animation={animations[0]} />
            <BackgroundBall color='#5dc223' animation={animations[1]} />
            <BackgroundBall color='#1f8dccff' animation={animations[2]} />
            <BackgroundBall color='#9905ddff' animation={animations[3]} />
        </>
    )
}