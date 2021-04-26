import React from 'react'
import { useGlobalContext } from './context'
// import './index.css';
// components
import Navbar from './Navbar'
import CartContainer from './CartContainer'
// items

function App() {
  const { loading } = useGlobalContext()
  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <main className="bb">
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App
