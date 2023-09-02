/*
POSSIBLE BG COLOURS
bg-gradient-to-t from-[#F0EBC0] to-[#9DDDF4]
bg-gradient-to-t from-[#cdb4db] to-[#a2d2ff]
bg-gradient-to-t from-[#7bdff2] to-[#f2b5d4]

*/

import "./App.css";
import Navbar from "./components/Navbar";
import Board from "./components/Board";

function App() {
  return (
    <div className="flex bg-gradient-to-t from-[#7bdff2] to-[#f2b5d4]">
      <Navbar />
      <Board />
    </div>
  );
}

export default App;
