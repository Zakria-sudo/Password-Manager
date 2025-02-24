import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='mycontainer py-4 px-10 flex justify-between bg-slate-800 h-15 items-center text-white'>
            <div className="logo font-bold text-2xl">
              <span className='text-green-500 '>&lt;</span>
              Pass
              <span className='text-green-500 font-bold text-2xl'>OP/&gt;</span>
              </div>
            <ul className='flex gap-6'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
