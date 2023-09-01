import "./App.css";
import Navbar from "./components/Navbar";
import Board from "./components/Board";

function App() {
  return (
    <div className="flex">
      <Navbar />
      <Board />
    </div>
  );
}

export default App;
