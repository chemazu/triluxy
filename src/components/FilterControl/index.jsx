import React, { useState } from 'react'
import Child from './child'

export default function FilterControl(props) {
    const { item, control } = props

    //iron controls the value of  minimum price in  the filter range
    const [iron,setIron]= useState([])

    //steel controls the value of  max price in  the filter range

    const [steel,setSteel]= useState([])

    const metal = {iron,setIron,steel,setSteel}
    
    //an array to remove the prices.
    const egg = []

    item.map(item => { egg.push(item.roomType[0].price) })

    const max = Math.max(...egg)
    const min = Math.min(...egg)
    const range = (max - min) / 4
    
    const childController = [
        { one: min, two: range }, 
        { one: range + 1, two: 2 * range }, 
        { one: 2*range + 1, two: 3 * range }, 
        { one: 3*range + 1, two: 4*range }, 
        { one: 4*range + 1, two: max }]
    return (
        <div className='filter holder'>
            {childController.map(item=>(
            <Child control={control}   metal = {metal} key ={childController.indexOf(item)} item={item}/>
            ))}
        </div>
    )
}
