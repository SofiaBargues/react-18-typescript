import { useState } from "react";
import Message from "./components/Message";

function App() {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });
  const handleClick = () => {
    setDrink({ ...drink, price: 6 });
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
