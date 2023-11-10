"use client";
import React, { useState } from 'react'

const Burger = () => {

  const [open, setOpen] = useState(false);
  const handleClick = () => {setOpen(!open)};

  return (
    
    <button  
      onClick={handleClick} 
      className="md:hidden flex flex-col justify-center items-center"> 
    
        <div className={`w-5 h-0.5 bg-black ${open ? 'rotate-45 translate-y-0.5' : '-translate-y-1'}`} />
        <div className={`w-5 h-0.5 bg-black ${open ? '-rotate-45 -translate-y-0.6' : 'translate-y-1'}`} />
    </button>
    
  )
}

export default Burger