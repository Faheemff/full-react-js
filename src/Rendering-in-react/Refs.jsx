import { useEffect, useRef, useState } from 'react'

const Refs = () => {

  const [number, setNumber] = useState(0)
  let a = useRef(0);

  useEffect(() => {
    a.current = a.current + 1
    console.log(`Page is Rendering ${a.current}`);
    
  });
  

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
