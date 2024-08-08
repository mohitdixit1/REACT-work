import React from 'react'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'

import App from '../App'
import login from '../views/screens/Login'
import Login from '../views/screens/Login'
import SignupScreen from '../views/screens/Signup'
import Tictoctie from '../views/screens/Tictoctie'





const Mainrout = () => {
  return (
  <BrowserRouter>
        <Routes>
            <Route path='' element={<App/>}/>
            <Route path='/login' element={<Login /> }/>
            <Route path='/Signup' element={<SignupScreen/>}/>
            <Route path='/game' element={<Tictoctie/>}/>

        </Routes>
    
  </BrowserRouter>
  )
}

export default Mainrout
