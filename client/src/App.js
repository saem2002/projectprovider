import React from 'react'
import './App.css'
import { Route } from 'react-router'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'


const App=()=>{
  return(
    <>
    <Navbar/>

    <Route  exact path="/">
      <Home/>
    </Route>
    
    <Route  path="/Projects">
      <Projects/>
    </Route>

    <Route path="/about">
      <About/>
    </Route>

    <Route path="/contact">
      <Contact/>
    </Route>

    <Route path="/login">
      <Login/>
    </Route>

    <Route path="/signup">
      <Signup/>
    </Route>

    
    </>
  )
}
export default App
