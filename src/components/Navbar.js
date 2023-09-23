// TODO to make it responsive

import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="fixed z-40 top-0 left-0 w-screen h-24 ">
      <div className="mx-16 flex flex-row justify-end ">
        {/* First element of navbar */}
        <NavLink to="/">
          <div className="mx-2 cursor-pointer">
            <div
              className="
                        my-4 w-48 h-16
                        bg-[#b2f7ef] hover:bg-[#7bdff2]
                        rounded-full 
                        transition-all duration-300 ease-liner 
                        border-black border-4 "
            >
              <div
                className="flex items-center justify-center h-full
                          font-mono text-xl font-bold"
              >
                Home
              </div>
            </div>
          </div>
        </NavLink>
        {/* End of element  */}
        {/* Second element of navbar */}
        <NavLink to="/projects">
          <div className="mx-2 cursor-pointer">
            <div
              className="
                        my-4 w-48 h-16
                        bg-[#b2f7ef] hover:bg-[#7bdff2]
                        rounded-full 
                        transition-all duration-300 ease-liner 
                        border-black border-4 "
            >
              <div
                className="flex items-center justify-center h-full
                          font-mono text-xl font-bold"
              >
                Projects
              </div>
            </div>
          </div>
        </NavLink>
        {/* End of element  */}
        {/* Third element of navbar */}
        <NavLink to="/contacts">
          <div className="mx-2 cursor-pointer">
            <div
              className="
                        my-4 w-48 h-16
                        bg-[#b2f7ef] hover:bg-[#7bdff2]
                        rounded-full 
                        transition-all duration-300 ease-liner 
                        border-black border-4 "
            >
              <div
                className="flex items-center justify-center h-full
                          font-mono text-xl font-bold"
              >
                Contacts
              </div>
            </div>
          </div>
        </NavLink>
        {/* End of element  */}
      </div>
    </div>
  );
}

export default Navbar;
