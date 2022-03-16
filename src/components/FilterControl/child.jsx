import React,{useState} from 'react'

export default function Child(props) {
    const {control,item }= props
    const {one,two}=item
    const {setPrice,setSecondPrice} = control

    const [power ,setPower]= useState(true)
    const filter = (a,b)=>{
        setPrice(a)
        setSecondPrice(b)
        setPower(false)
     console.log("herherherh",a,b)
    }
    const unFilter =()=>{
        setPrice(0)
        setSecondPrice(100000000000000000000000)
        setPower(true)
    
        
       }

  return (
    <div>
            {power?<input type="checkbox" onChange={()=>{filter(one,two)}}/> :<input type="checkbox" onChange={unFilter}/> }
                <span>{one}</span>
                -
                <span>{two}</span>
            </div>
  )
}
