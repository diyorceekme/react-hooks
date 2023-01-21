import React, { useEffect, useRef, useState } from 'react'

const HookRef = () => {
    // const [inputValue, setInputValue] = useState("");
    // const count = useRef(0);

    // useEffect(() => {
    //   count.current = count.current + 1;
    // });

  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <div>
      {/* <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1> */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </div>
  );
}

export default HookRef