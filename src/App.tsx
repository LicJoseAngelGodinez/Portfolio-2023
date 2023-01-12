import { useState } from 'react'
import monkey from './assets/monkey.png'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <object data={monkey} className="logo" width="100" height="100"> </object>
      <h1>{import.meta.env.VITE_DOMAIN}</h1>
      <p className="base">
        This is a WIP
      </p>
    </div>
  )
}

export default App
