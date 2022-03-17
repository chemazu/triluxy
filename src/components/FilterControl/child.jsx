import React, { useState } from 'react'

export default function Child(props) {

    const { control, item, metal } = props
    const { one, two } = item
    const { setPrice, setSecondPrice} = control
    const { iron, steel } = metal
    const [power, setPower] = useState(true)
    const filter = (a, b) => {
        iron.push(a)
        steel.push(b)
        setSecondPrice(Math.max(...steel))
        setPrice(Math.min(...iron))
        setPower(false)
    }
    const unFilter = (a, b) => {
        const index = iron.indexOf(a)
        const fish = steel.indexOf(b)
        if (index > -1) {
            iron.splice(index, 1); // 2nd parameter means remove one item only
        }
        if (fish > -1) {
            steel.splice(fish, 1); // 2nd parameter means remove one item only
        }
        if (iron.length == 0) {
            setPrice(0)
        }
        if (steel.length == 0) {
            setSecondPrice(10000000000000)
        }
        else {
            setSecondPrice(Math.max(...steel))
            setPrice(Math.min(...iron))
        }

        setPower(true)
    }

    return (
        <div>
            {power ?
                <input type="checkbox" onChange={() => { filter(one, two) }} /> :
                <input type="checkbox" onChange={() => { unFilter(one, two) }} />}
            <span>{one}</span>
            <span>-</span>
            <span>{two}</span>
        </div>
    )
}
