import React,{useState} from 'react'

export default function Child(props) {
    const {control,item, yuy,details }= props
    const {one,two}=item
    const {setPrice,setSecondPrice,price,secondPrice} = control
    const {range}=details
    const min =[]
    const max =[]
    const [power ,setPower]= useState(true)
    const filter = (a,b)=>{
        if (price == 0){
        setPrice(a)
        }
        if (price > 0 && price <= a) {
            console.log("hmm")
          }
        else{setPrice(a)}
        setSecondPrice(b)
        setPower(false)
    }
    const unFilter =(e,a,b)=>{
        const {value}= e.target
        if (price>0 && price<=a){
            console.log("hmmm")
        }
        if (yuy==0){
            setSecondPrice(range)
        }
        if (value==1||value==2||value==3||value==4){
            console.log(yuy,"ewe")
            setSecondPrice(price+range)}
        
        else{setPrice (0)
        setSecondPrice(10000000000000000)}

        setPower(true)       
       }

  return (
    <div>
            {power ? 
            <input type="checkbox" onChange={()=>{filter(one,two)}}/> :
            <input type="checkbox" value={yuy} onChange={(e)=>{unFilter(e,one,two)}}/> }
                <span>{one}</span>
                <span>-</span>
                <span>{two}</span>
            </div>
  )
}
