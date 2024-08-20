// import React, { useState } from 'react'
import logo from '../../public/logo 1.svg'

const Sidebar = () => {

  const liClasses = "px-4 py-2 cursor-pointer hover:bg-[#53BED2] hover:text-[#53BED2]";


  return (
    <>
      <div className="fixed bg-white my-10 mb-10 mx-4 py-4 h-screen rounded-lg border-r-[#EAEDF3] transition-all w-60 shadow md:shadow-none" >
        <ul className='my-4 whitespace-nowrap overflow-x-hidden'>
            <li>
                <img src={logo} alt="logo" />
                <hr className='bg-[#EAEDF3]' />
            </li>
          <li className={liClasses}>
            <span className='inline-block w-8 mr-3.5'><i className="fa-solid fa-code"></i></span>
            <span>Code</span>
          </li>
          <li className={liClasses}>
            <span className='inline-block w-8 mr-3.5'><i className="fa-solid fa-message"></i></span>
            <span>Messages</span>
          </li>
          <li className={liClasses}>
            <span className='inline-block w-8 mr-3.5'><i className="fa-solid fa-pen"></i></span>
            <span>Write</span>
          </li>
          <li className={liClasses}>
            <span className='inline-block w-8 mr-3.5'><i className="fa-solid fa-user"></i></span>
            <span>User</span>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar