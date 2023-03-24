import { useState } from "react";

function App() {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
  };

  return (
    <div>
      <li>{pizza.name}</li>
      {pizza.toppings.map((item) => (
        <li>{item}</li>
      ))}
      <button onClick={handleClick}>Update</button>
    </div>
  );
}

export default App;
