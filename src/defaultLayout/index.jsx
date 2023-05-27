import React from 'react'
import Header from '../components/Header'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from '../pages/Home/index'
import Menu from '../pages/Menu/index'
import Cart from '../pages/Cart/index'
import Error from '../pages/Error/index'
import Login from '../pages/Login/index'
import Receipt from '../pages/Receipt/index'
import SignUp from '../pages/SignUp/index'
import Catering from '../pages/Catering'

function DefaultLayout() {
  return (
      <div>
              <Router>
              <Header />
          <Routes>
            <Route path = '/' element = {<Home/>}/>
            <Route path = '/cart' element = {<Cart/>}/>
            <Route path = '/error' element = {<Error/>}/>
            <Route path = '/login' element = {<Login/>}/>
            <Route path = '/Menu' element = {<Menu/>}/>
            <Route path = '/receipt' element = {<Receipt/>}/>
            <Route path='/signup' element={<SignUp />} />
            <Route path='/catering' element = {<Catering/>}/>
          </Routes>
        </Router>
    </div>
  )
}

export default DefaultLayout