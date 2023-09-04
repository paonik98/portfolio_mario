// TODO to make it responsive

import { DiCodeigniter } from "react-icons/di";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { useState } from "react";
import DropDownProjects from "./DropDownProjects";

function Navbar() {
  const [openProjectMenu, setOpenProjectMenu] = useState(false);
  return (
    <div className="fixed top-0 left-0 w-screen h-24 ">
      <div className="mx-16 flex flex-row justify-end ">
        <div
          className="mx-2 cursor-pointer"
          onMouseEnter={() => setOpenProjectMenu((prev) => !prev)}
          onMouseLeave={() => setOpenProjectMenu((prev) => !prev)}
        >
          <div
            className="
                        my-4 w-48 h-16
                        bg-[#b2f7ef] hover:bg-[#7bdff2]
                        rounded-3xl hover:rounded-xl 
                        transition-all duration-300 ease-liner 
                        border-black border-4 "
          >
            <div
              className="flex items-center justify-center h-full
                          font-mono text-xl font-bold"
            >
              <DiCodeigniter className="mx-2" />
              Projects
            </div>
            {openProjectMenu && <DropDownProjects />}
          </div>
        </div>
        <div className="mx-2 cursor-pointer">
          <div
            className="
                        my-4 w-16 h-16
                        bg-[#b2f7ef] hover:bg-[#7bdff2]
                        rounded-3xl hover:rounded-xl 
                        transition-all duration-300 ease-liner 
                        border-black border-4 "
          >
            <div
              className="flex items-center justify-center h-full
                          font-mono text-xl font-bold"
            >
              <BsGithub className="mx-2" />
            </div>
          </div>
        </div>
        <div className="mx-2 cursor-pointer">
          <div
            className="
                        my-4 w-16 h-16
                        bg-[#b2f7ef] hover:bg-[#7bdff2]
                        rounded-3xl hover:rounded-xl 
                        transition-all duration-300 ease-liner 
                        border-black border-4 "
          >
            <div
              className="flex items-center justify-center h-full
                          font-mono text-xl font-bold"
            >
              <BsLinkedin className="mx-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
