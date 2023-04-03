import React from 'react'

export const Navbar = () => {
  return (
    <nav className='nav-items'>
        <ul>
            <li className='ul-01'>Home</li>
            <li className='ul-01'>Properties</li>
            <li className='ul-01'>Members</li>
            <li className='ul-01'>Pages</li>
            <button className='nav-btn'>Log in</button>
            <button className='nav-btn'>Sign Up</button>
        </ul>
    </nav>
  )
}
