import { useState } from 'react'
import { io } from 'socket.io-client'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // socket connection socket.io
  const socket = io('http://localhost:3000')
  // socket connection to server
  socket.on('connect', () => {
    console.log('connected to server')
  })

  return (
    <>

    </>
  )
}

export default App
