import { useState } from 'react'
import Home from './pages/Home/Home'
import Routing from './routing'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routing />
      

    </>
  )
}

export default App
