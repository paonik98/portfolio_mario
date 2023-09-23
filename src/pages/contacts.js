import React from "react";
import Navbar from "../components/Navbar";

const Contacts = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className=" h-screen bg-fixed bg-gradient-to-t from-[#7bdff2] to-[#f2b5d4]">
        <div className="flex flex-col">
          <Navbar />
          Contacts
        </div>
      </div>
    </div>
  );
};

export default Contacts;
