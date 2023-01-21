import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const HookEffect = () => {
  const [count, setCount] = useState(0)
  const [calculation, setCalculation] = useState(0);
  
//   useEffect(() => {
//     setTimeout(() => {
//         setCount((count) => count + 1)
//     }, 1000)
//   })

//   useEffect(() => {
//     setTimeout(() => {
//         setCount((count) => count + 1)
//     }, 1000)
//   }, [])

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]);

  return (
    <div>
      {/* <h1>I have rendered {count} times!</h1> */}
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </div>
  );
}

export default HookEffect