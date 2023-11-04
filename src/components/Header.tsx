"use client";
import { NAV_LINKS } from '@/constants';
import Link from 'next/link'
import React, { useState } from 'react'
import Burger from './Burger';
import Databayt from './Databayt';
import Nav from './Nav';




const Header = () => {
       
  return (

    <nav className="flex justify-between items-center max-container padding-container relative z-30"> 
        <Databayt />
        <Nav />
        <Burger />   
    </nav> 

  )    
}
export default Header