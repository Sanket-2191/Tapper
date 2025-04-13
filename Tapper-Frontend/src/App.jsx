import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
// import '../../Tapper-Backend/index.js'

import './App.css'

function App() {
  const [socketConnection, setSocketConnection] = useState(null);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    let socket = io('http://localhost:8000');
    // socket connection to server
    socket.on('connect', () => {
      console.log('connected to server')
    })

    socket.on('load_new_message', (input) => {
      let count = 0;
      setMessages(prev => {
        // console.log("messageList in 'on-broadcast': ", prev);
        const updated = [...prev, "Other guy 🐹" + input]
        console.log(`${++count}updated-messageList in 'on-broadcast': `, updated);
        return updated;
      })
      console.log("received broadcast msg...");

    })


    setSocketConnection(socket);
  }, [])
  // socket connection socket.io
  // if (socketConnection) {
  //   socketConnection}
  const handlemessageSend = (e) => {
    if (input) {
      socketConnection.emit('new_message', input);
      setMessages(prev => {
        console.log("messageList in 'on-broadcast': ", prev);
        const updated = [...prev, "You 🗣" + input]
        console.log("updated-messageList in 'on-broadcast': ", updated);
        return updated;
      })
      setInput("")
      console.log("messageList: ", messages);

    }
  }
  return (
    <>
      <h1>HELLO</h1>
      <div className='message_list'>
        {
          messages.map((message, i) => <div className='message' key={i}>{message}</div>)
        }
      </div>
      <input type="text" value={input} onChange={(e) => { setInput(e.target.value) }} />
      <button onClick={handlemessageSend}>send</button>
    </>
  )
}

export default App
