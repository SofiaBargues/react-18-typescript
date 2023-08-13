import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Rosario", "Carcarañá", "Chañar Ladeado", "San Geronimo Sur"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
