import { useState } from 'react'
import Card from './Componets/Card'
import Grid from './Componets/Grid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Grid numberOfGrid={9}/>
    </>
  )
}

export default App
