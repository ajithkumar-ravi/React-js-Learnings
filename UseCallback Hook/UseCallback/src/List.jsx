import React, { useEffect, useState } from 'react'

const List = ({getItem}) => {
    const [item, setItem] = useState([])

    useEffect(() => {
      setItem(getItem())
      console.log("Setting list");
      
    }, [getItem])
    
  return (
    <div>
        {item.map((item, index) => {
            return <p key={index}>{item}</p>
        })}
    </div>
  )
}

export default List