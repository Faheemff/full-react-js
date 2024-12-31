import { useState } from 'react'

const Refs = () => {

  const [number, setNumber] = useState(0)

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={()=> {
        setNumber(number + 1);
      }}>Click me</button>
    </div>
  )
}

export default Refs
