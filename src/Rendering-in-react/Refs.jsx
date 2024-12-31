import { useEffect, useRef, useState } from 'react'

const Refs = () => {

  const [number, setNumber] = useState(0)
  let a = 0;

  useEffect(() => {
    console.log(`Page is Rendering ${a}`);
    
  });
  

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={()=> {
        setNumber(number + 1);
      }}>Click me</button>
      <button onClick={()=> {
        a + 1;
      }}>Click</button>
    </div>
  )
}

export default Refs
