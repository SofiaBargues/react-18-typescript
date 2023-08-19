import Button from "./components/Button";
import Alert from "./components/Alert";
import { Children } from "react";

function App() {
  const items = ["Rosario", "Carcarañá", "Chañar Ladeado", "San Geronimo Sur"];

  return (
    <div>
      <Alert>{"My Alert"}</Alert>
      <Button onClick={() => console.log("clicked")}>My Button</Button>
    </div>
  );
}

export default App;
