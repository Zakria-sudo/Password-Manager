import React,{useRef,useState,useEffect} from "react";

const Manager = () => {
  const Btnref = useRef()
  const [form, setform] = useState({site: "", username: "", password: ""});
  const [passArr, setpassArr] = useState([])

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if(passwords){
      setpassArr(JSON.parse(passwords))
  }
  }, [])
  

  const showPWD = () => {
    if(Btnref.current.src.includes("/icons/eye-slash-solid.svg")){
      Btnref.current.src = "/icons/eye-solid.svg"
    }
    else{
      Btnref.current.src = "/icons/eye-slash-solid.svg"
    }
  }

  const handelChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  }

  const savePassword = () => {
    console.log(form);
    setpassArr([...passArr,form])
    localStorage.setItem("passwords",JSON.stringify([...passArr,form]))
    console.log([...passArr,form]);
 
  }
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
      </div>

      <div className="mycontainer  bg-slate-100">
        <h1 className="text-3xl font-bold text-center">
          <span className="text-green-500 ">&lt;</span>
          Pass
          <span className="text-green-500">OP/&gt;</span>
        </h1>
        <p className="text-center text-green-800 text-lg">
          Your own Password Manager
        </p>

        <div className=" flex flex-col p-4 gap-4">
          <input
            placeholder="Enter Website URL" 
            type="text"
            className="rounded-full border border-green-400   px-5 py-1"
            name="site"
            value={form.site}
            onChange={(handelChange)}
          />
          <div className="flex gap-2">
            <input
              placeholder="Enter Username"
              type="text"
              className="border w-full border-green-400 rounded-full  px-5 py-1"
              name="username"
              value={form.username}
              onChange={(handelChange)}
            />
            <div className="relative">

            <input
              placeholder="Enter Password"
              type="text"
              className="border w-full border-green-400 rounded-full px-5 py-1"
              name="password"
              value={form.password}
              onChange={(handelChange)}
              />
              <span  onClick={(showPWD)} className="absolute right-3 top-2 cursor-pointer"><img ref={Btnref} src="/icons/eye-solid.svg" alt="" className="w-5 h-5"/></span>
              </div>
          </div>
          <div className="btn flex justify-center items-center">
            <button onClick={(savePassword)} className=" bg-green-500 flex justify-center items-center border border-black rounded-full w-fit px-4 py-2 text-white gap-2 hover:bg-green-600 hover:cursor-pointer">
              <lord-icon
                src="https://cdn.lordicon.com/sbnjyzil.json"
                trigger="hover"
                colors="primary:#121331,secondary:#000000"
              ></lord-icon>
              Add Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Manager;
