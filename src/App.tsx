import { useState } from "react";
import Message from "./components/Message";

function App() {
  const [, setCostumer] = useState({
    title: "John",
    address: {
      city: "San Francisco",
      zipcode: 94111,
    },
  });
  const handleClick = () => {
    setCostumer({ ...costumer, price: 6 });
  };
  // const handleClick = () => {
  //   drink.price = 6;
  //   setDrink(drink);
  // };

  return (
    <div>
      {drink.price}
      <button onClick={handleClick}> Click Me</button>
      {/* <Message></Message>
      <Message></Message>
      <Message></Message> */}
    </div>
  );
}
export default App;
