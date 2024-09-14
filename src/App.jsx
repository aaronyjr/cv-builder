import { useState } from 'react'
import './App.css'
import PersonalDetails from './components/PersonalDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PersonalDetails/>
    </>
  )
}

export default App
