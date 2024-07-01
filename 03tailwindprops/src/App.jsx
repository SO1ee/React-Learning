import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Caard from './components/Caard'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-white p-4 rounded-xl mb-4'>Tailwind</h1>
     <Caard name="Celine"/>
    </>
  )
}

export default App
