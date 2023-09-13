/*
POSSIBLE BG COLOURS
bg-gradient-to-t from-[#F0EBC0] to-[#9DDDF4]
bg-gradient-to-t from-[#cdb4db] to-[#a2d2ff]
bg-gradient-to-t from-[#7bdff2] to-[#f2b5d4]

*/

import "./App.css";
import Navbar from "./components/Navbar";
import Board from "./components/Board";
import Project1 from "./components/Project1";
import Project2 from "./components/Project2";
import Project3 from "./components/Project3";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <div className=" bg-fixed bg-gradient-to-t from-[#7bdff2] to-[#f2b5d4]">
        <div className="flex flex-col">
          <Navbar />
          <Board />
          <Project1 />
          <Project2 />
          <Project3 />
        </div>
      </div>
    </div>
  );
}

export default App;
