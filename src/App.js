import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Gallery from './components/Gallery'
import Shop from './components/Shop'
import Blog from './components/Blog'
import About from './components/About'
import Contact from './components/Contact'
import './App.css';

const App = () => {
  return (
    <div className='p-5'>

      <Navbar />
      <Home />
      <Gallery />
      <Shop />
      <Blog />
      <About />
      <Contact />


    </div>
  )
}

export default App