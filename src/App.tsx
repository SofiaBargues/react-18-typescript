import { SharingState } from "./components/SharingState";
import { UpdateArray } from "./components/UpdateArray";
import { UpdateArrayOfObjects } from "./components/UpdateArrayOfObjects";
import { UpdateImmer } from "./components/UpdateImmer";

function App() {
  console.log("hi");
  return (
    <div>
      <UpdateArray />
      <UpdateArray />
      <SharingState />
      <UpdateImmer />
      <UpdateArrayOfObjects />
    </div>
  );
}
export default App;
