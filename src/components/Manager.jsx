import React, { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from 'uuid';


const Manager = () => {
  const Btnref = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passArr, setpassArr] = useState([]);
  const passRef = useRef();

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpassArr(JSON.parse(passwords));
    }
  }, []);

  const showPWD = () => {
    if (Btnref.current.src.includes("/icons/eye-slash-solid.svg")) {
      Btnref.current.src = "/icons/eye-solid.svg";
      passRef.current.type = "text";
    } else {
      Btnref.current.src = "/icons/eye-slash-solid.svg";
      passRef.current.type = "password";
    }
  };

  const handelChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const savePassword = () => {
    console.log(form);
    setpassArr([...passArr, {...form, id: uuidv4()}]);
    localStorage.setItem("passwords", JSON.stringify([...passArr, {...form, id: uuidv4()}]));
    console.log([...passArr, form]);
    // clearing after saving
    setform({ site: "", username: "", password: "" });
  };
  const editPassword = (id)=>{
    
    setform(passArr.find((item)=>item.id === id));
    setpassArr(passArr.filter((item)=>item.id !== id));
    
  }
  const deletePassword = (id)=>{
    let c = confirm("Are you sure you want to delete this password?");
    if(c){

      setpassArr(passArr.filter((item)=>item.id !== id));
      localStorage.setItem("passwords", JSON.stringify(passArr.filter((item)=>item.id !== id)));
    }
  }

  const copyText = (text) => {
    toast('Copied to Clipboard!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    navigator.clipboard.writeText(text);
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        
      />
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
      </div>

      <div className="manager bg-slate-100">
        <h1 className="text-3xl font-bold text-center">
          <span className="text-green-500 ">&lt;</span>
          Pass
          <span className="text-green-500">OP/&gt;</span>
        </h1>
        <p className="text-center text-green-800 text-lg">
          Your own Password Manager
        </p>

        <div className="flex flex-col p-4 gap-4">
          <input
            placeholder="Enter Website URL"
            type="text"
            className="rounded-full border border-green-400   px-5 py-1"
            name="site"
            required={true}
            value={form.site}
            onChange={handelChange}
          />
          <div className="flex gap-2">
            <input
              placeholder="Enter Username"
              type="text"
              className="border w-full border-green-400 rounded-full  px-5 py-1"
              name="username"
              required={true}
              value={form.username}
              onChange={handelChange}
            />
            <div className="relative">
              <input
                placeholder="Enter Password"
                type="password"
                ref={passRef}
                className="border w-full border-green-400 rounded-full px-5 py-1"
                name="password"
                value={form.password}
                required={true}
                onChange={handelChange}
              />
              <span
                onClick={showPWD}
                className="absolute right-3 top-2 cursor-pointer"
              >
                <img
                  ref={Btnref}
                  src="/icons/eye-solid.svg"
                  alt=""
                  width={20}
                />
              </span>
            </div>
          </div>
          <div className="btn flex justify-center items-center">
            <button
              onClick={savePassword}
              className=" bg-green-500 flex justify-center items-center border border-black rounded-full w-fit px-4 py-2 text-white gap-2 hover:bg-green-600 hover:cursor-pointer"
            >
              <lord-icon
                src="https://cdn.lordicon.com/sbnjyzil.json"
                trigger="hover"
                colors="primary:#121331,secondary:#000000"
              ></lord-icon>
              Save Password
            </button>
          </div>
        </div>
        <div className="passwords p-4">
          <h2 className="font-bold text-xl py-2">Your Passwords</h2>
          {passArr.length == 0 && (
            <div className=" text-md py-2">No Passwords Saved</div>
          )}
          {passArr.length != 0 && (
            <table className="table-auto w-full rounded-md overflow-hidden">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-green-100">
                {passArr.map((item) => {
                  return (
                    <tr>
{/* Site td */}
                      <td className=" text-center w-15 py-2 underline text-blue-600 border border-white">
                        <a href={item.site} target="_blank">
                          {item.site}
                        </a>
                        <span className="absolute pl-2 pt-1 hover:cursor-pointer">
                          <img
                            src="/icons/copy-solid.svg"
                            alt="copy"
                            width={15}
                            onClick={() => copyText(item.site)}
                          />
                        </span>
                      </td>
{/* Username td */}
                      <td className="text-center w-15 py-2 border border-white">
                        {item.username}
                        <span className="absolute pl-2 pt-1 hover:cursor-pointer">
                          <img
                            src="/icons/copy-solid.svg"
                            alt="copy"
                            width={15}
                            onClick={() => copyText(item.username)}
                          />
                        </span>
                      </td>
{/* Password td */}
                      <td className="text-center w-15 py-2 border border-white">
                        {item.password}
                        <span className="absolute pl-2 pt-1 hover:cursor-pointer">
                          <img
                            src="/icons/copy-solid.svg"
                            alt="copy"
                            width={15}
                            onClick={() => copyText(item.password)}
                          />
                        </span>
                      </td>
{/* Actions Td */}
                      <td className="text-center w-15 py-2 border border-white">
                        <div className="flex justify-center gap-4 items-center">

                        <span className="hover:cursor-pointer">
                          <img src="/icons/pen-to-square-solid.svg" alt="Edit" width={17} onClick={()=>{editPassword(item.id)}} />
                        </span>
                        <span className="hover:cursor-pointer">
                        <img src="/icons/trash-solid.svg" alt="Delete" width={15} onClick={()=>{deletePassword(item.id)}}/>
                        </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
