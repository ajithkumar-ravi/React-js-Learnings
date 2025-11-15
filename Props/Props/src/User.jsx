import React from 'react'

function User(pr) {
    //this is called DESTRUCTURING 
    // should mention only the props name
    const {name, age, id} = pr
  return (
    <div>
        <h1> {name} </h1>
        <h2> {age}</h2>
        <h3> {id} </h3>
    </div>
  )
}

export default User