import React from 'react'

export default function Navbar() {
  return (
    <div className="navbar py-5 px-8 bg-transparent z-10 absolute text-white font-semibold backdrop-blur-[1px] ">
        <div className="flex-1">
            {/* <a className="btn btn-ghost text-xl">DentalWeb</a> */}
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1 text-lg">
                <li>
                  <a href='/' className='hover:bg-transparent hover:underline underline-offset-4 active:bg-transparent focus:bg-transparent'>Home</a>
                </li>
                <li>
                  <a href='#services' className='hover:bg-transparent hover:underline underline-offset-4 active:bg-transparent focus:bg-transparent'>Services</a>
                </li>
                <li>
                  <a href='#contact' className='hover:bg-transparent hover:underline underline-offset-4 active:bg-transparent focus:bg-transparent'>Contact</a>
                </li>
                <li>
                  <a className='hover:bg-transparent hover:underline underline-offset-4 active:bg-transparent focus:bg-transparent'>Book now</a>
                </li>
            </ul>
        </div>
    </div>
  )
}
