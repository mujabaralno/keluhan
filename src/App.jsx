import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'


function App() {
  

  return (
    <main>
      <div className='main'>
        <div className='gradient'/>
      </div>
      <div className='app'>
        <Header />
        <Hero />
        <Footer />
      </div>
    </main>

  )
}

export default App
