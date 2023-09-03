import Button from "./components/Button";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import { useState } from "react";
import "./App.css";

import { BsFillCalendar2CheckFill } from "react-icons/bs";

function App() {
  const items = ["Rosario", "Carcarañá", "Chañar Ladeado", "San Geronimo Sur"];
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <BsFillCalendar2CheckFill color="red" size="40" />
      <Alert isVisible={isVisible} setIsVisible={setIsVisible}>
        My Alert
      </Alert>
      <Button
        //type="button"
        variant="warning"
        onClick={() => setIsVisible(true)}
      >
        My Button
      </Button>
      <ListGroup
        items={items}
        heading={"Group"}
        onSelectedItem={console.log}
      ></ListGroup>
    </div>
  );
}

export default App;
// app necesito un estado que se llame AlertVisible
