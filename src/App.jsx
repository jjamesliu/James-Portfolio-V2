import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import ProjectCard from './components/ProjectCard'
import Ecommerce from './components/Ecommerce'

function App() {
  return (
    <>
     <Hero/>
     <ProjectCard />
     <Ecommerce />
    </>
  )
}

export default App
