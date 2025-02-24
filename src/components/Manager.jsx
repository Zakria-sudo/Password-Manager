import React from "react";

const Manager = () => {
  return (
    <>
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
      </div>

      <div className="mycontainer  bg-slate-100">
       
          <h1 className="text-2xl font-bold text-center">
            <span className="text-green-700 ">&lt;</span>
            Pass
            <span className="text-green-700">OP/&gt;</span>
          </h1>
          <p className="text-center text-green-800 text-lg">Your own Password Manager</p>
        
        <div className=" flex flex-col p-4 gap-4">
          <input type="text" className="rounded-full border border-green-400   px-5 py-1" name="" id="" />
          <div className="flex gap-10">
            <input type="text" className="border w-full border-green-400 rounded-full  px-5 py-1" name="" id="" />
            <input type="text" className="border w-full border-green-400 rounded-full  px-5 py-1" name="" id="" />
          </div>
          <button>Add Password</button>
        </div>
      </div>
    </>
  );
};

export default Manager;
