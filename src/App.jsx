import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/Nav'
import Content from './Components/Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Content/>
    </>
  )
}

export default App
