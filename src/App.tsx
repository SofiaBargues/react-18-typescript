import Button from "./components/Button";

function App() {
  const items = ["Rosario", "Carcarañá", "Chañar Ladeado", "San Geronimo Sur"];

  return (
    <div>
      <Button onClick={() => console.log("clicked")}>Soy un boton</Button>
      <Button variant="secondary" onClick={() => console.log("clicked")}>
        Soy un boton
      </Button>
    </div>
  );
}

export default App;
