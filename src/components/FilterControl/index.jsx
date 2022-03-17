import React, { useState } from 'react'
import Child from './child'

export default function FilterControl(props) {
    const { item, control } = props
    const egg = []
    item.map(item => { egg.push(item.roomType[0].price) })
    const max = Math.max(...egg)
    const min = Math.min(...egg)
    const range = (max - min) / 4
    const details = {max,min,range}
    const childController = [
        { one: min, two: range }, 
        { one: range + 1, two: 2 * range }, 
        { one: 2*range + 1, two: 3 * range }, 
        { one: 3*range + 1, two: 4*range }, 
        { one: 4*range + 1, two: max }]
    return (
        <div className='filter holder'>
            {childController.map(item=>(
            <Child control={control}   details ={details} yuy ={childController.indexOf(item)} item={item}/>
            ))}
        </div>
    )
}
