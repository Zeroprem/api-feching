import React from 'react'

const Navbar = () => {
  return (
   <nav className="flex bg-gray-200 m-3 p-3">
    <ul className="flex gap-56 text-pink-300">
        <li className="hover:text-green-600" >home</li>
        <li className="hover:text-green-600">contact</li>
        <li className="hover:text-green-600">about</li>
    </ul>
   </nav>
  )
}

export default Navbar
