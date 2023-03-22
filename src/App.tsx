import { useState } from "react";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  let items = ["New York", "San Diego", "Tampa"];

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Alert</Alert>
      )}
      {items.length === 0 && <p>No item found</p>}
      <ListGroup
        heading="Cities"
        items={items}
        // onSelectItem={() => console.log("Clicked")}
      ></ListGroup>
      <Button color="success" onClick={() => setAlertVisibility(true)}>
        Submit
      </Button>
    </div>
  );
}

export default App;
