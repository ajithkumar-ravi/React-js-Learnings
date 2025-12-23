import React from 'react'
import UserGreeting from '../../../Controlled Component/controlled-component/src/UserGreeting'

const App = () => {

  return (
    <div>
      <UserGreeting isLoggedIn = {true} userName = "Ajith" />
    </div>
  )
}

export default App