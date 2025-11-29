import React from 'react'
import { ThemeContext } from './App'
import { useContext } from 'react'

const User = () => {

    const {theme} = useContext(ThemeContext)

    // console.log("contextVal", contextValue);
    

    const textStyle = {
        backgroundColor: theme === "light"? "black": "white",
        color: theme === "light"? "white": "black",
    }
  return (
    <div>
        <h1 style={textStyle}>User</h1>
    </div>
  )
}

export default User