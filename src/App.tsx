import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const items = ["Rosario", "Carcarañá", "Chañar Ladeado", "San Geronimo Sur"];
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <Alert isVisible={isVisible} setIsVisible={setIsVisible}>
        My Alert
      </Alert>
      <Button onClick={() => setIsVisible(true)}>My Button</Button>
    </div>
  );
}

export default App;
// app necesito un estado que se llame AlertVisible
