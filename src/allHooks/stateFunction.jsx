import React, { useState } from 'react'

const HookState = () => {
  const [color, setColor] = useState("red");
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "black"
  })

  const updateDetail = () => {
    setCar((previousState) => {
      return { ...previousState, color: "blue" };
    });
  };

  return (
    <div>
      <p>My favorite color is {color}!</p>
      <button onClick={() => setColor("blue")}>Change color</button>
      <br />
      {/* <h1>My {car.brand}</h1>
      <p>It is a {car.color} {car.model} from {car.year}</p> */}
      <h1>My {car.brand}</h1>
      <p>It is a {car.color} {car.model} from {car.year}</p>
      <button onClick={updateDetail}>Change detail</button>
    </div>
  );
}

export default HookState;