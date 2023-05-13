import "./App.css";
import ListGroup from "./components/ListGroup";

function App() {
  const sets = [
    "War of the Spark",
    "Throne of Eldraine",
    "Ikoria: Lair of Behemoths",
    "Mirage",
  ];

  return (
    <>
      <ListGroup items={sets} heading={"Magic the Gathering Sets"} />
    </>
  );
}

export default App;
