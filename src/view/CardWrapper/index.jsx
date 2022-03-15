import React,{useState} from 'react'
import SearchCard from '../../components/SearchCard'
export default function CardWrapper(props) {
    const result = props.ice
    
    const {egg, setEgg} = props.cool
  return (
    <div className="card-holder">
          {egg.map((item) => (
              <SearchCard item={item} key={item.id} />
            ))}
          </div>
  )
}
