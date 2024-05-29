import React from "react";

const Navbar = () => {
  return (
    <div className="navBar flex bg-[#EBEEF3] rounded-lg">
      <button className="hover:bg-[#2A3958] rounded-lg   hover:text-white p-4">
        first page
      </button>
      <div className="hover:bg-[#2A3958]    hover:text-white p-4">
        Second page
      </div>
      <div className="hover:bg-[#2A3958]   hover:text-white p-4">
        third page
      </div>
      <div className="hover:bg-[#2A3958]   hover:text-white p-4">
        forth page
      </div>
      <div className="hover:bg-[#2A3958]    hover:text-white p-4">
        fivth page
      </div>
      <div className="hover:bg-[#2A3958]    hover:text-white p-4">
        Sixth page
      </div>
    </div>
  );
};

export default Navbar;
