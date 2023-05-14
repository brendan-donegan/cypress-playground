import "./App.css";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const sets = [
    "War of the Spark",
    "Throne of Eldraine",
    "Ikoria: Lair of Behemoths",
    "Mirage",
  ];

  const handleSelectedItem = (item: string) => console.log(item);

  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          <em>Succesfully</em> added a set!
        </Alert>
      )}
      <ListGroup
        items={sets}
        heading="Magic the Gathering Sets"
        onSelectItem={handleSelectedItem}
      />
      <Button text="Add Set" onClick={() => setAlertVisible(true)} />
    </>
  );
}

export default App;
