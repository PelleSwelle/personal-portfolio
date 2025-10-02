'use client'
import { useEffect, useState } from "react";

export default function wordflick() {
    const [part, setPart] = useState('')
    const words = [
        "Hi i like HTML",
        "I also like css",
        "Lorem ipsum dolor sit amet",
        " consectetur adipiscing elit",
        "sed do eiusmod tempor incididunt"
    ];
    let i = 0;
    let offset = 0;
    const len = words.length;
    let forwards = true;
    let waitTick = 0;
    let hangTime = 15;
    let tickDuration = 20;

    const flick = () => {
        if (forwards) {
            if (offset >= words[i].length) {
                ++waitTick;
                if (waitTick == hangTime) {
                    forwards = false;
                    waitTick = 0;
                }
            }
        } else {
            if (offset == 0) {
                forwards = true;
                i++;
                offset = 0;
                if (i >= len) {
                    i = 0;
                }
            }
        }
        setPart(words[i].substring(0, offset))
        // part = words[i].substring(0, offset);
        console.log(part)
        if (waitTick == 0) {
            if (forwards) {
                offset++;
            } else {
                offset--;
            }
        }
    };

    useEffect(() => {
        console.log('useEffect runs')
        setTimeout(flick, tickDuration)
    }, [part])

    return (
        <div>{part}</div>
    )
};