import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="mycontainer py-4 px-10 flex justify-between bg-slate-800 h-15 items-center text-white">
        <div className="logo font-bold text-2xl">
          <span className="text-green-500 ">&lt;</span>
          Pass
          <span className="text-green-500 font-bold text-2xl">OP/&gt;</span>
        </div>
        <ul className="flex">
          <a href="https://github.com/Zakria-sudo" target="_blank">
            <button className="bg-green-500 py-2 rounded-full cursor-pointer hover:bg-green-600 ring-white ring-1">
              <img
                src="icons/github-brands.svg"
                alt=""
                className="w-20 h-10 invert"
              />
            </button>
          </a>  
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
