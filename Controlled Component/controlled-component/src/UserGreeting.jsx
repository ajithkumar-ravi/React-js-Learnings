import React from 'react'
import App from '../../../Conditional Reandering/conditionalReandering/src/App'

const UserGreeting = (props) => {
        // if(props.isLoggedIn){
        //     return <h2>Welcome {props.userName}</h2>
        // }else{
        //     return <h2>Please Login</h2>
        // }
        
        return (props.isLoggedIn ? <h1>welcome {props.userName}</h1> : <h1>Please Login</h1>)
  
}

export default UserGreeting