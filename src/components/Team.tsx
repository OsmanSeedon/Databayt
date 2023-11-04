import React from 'react'
// import Image from './Image'
import Image from 'next/image'

const Team = () => {
  return (
    <div className='w-[100px] h-[140px] border '>
        
        <Image 
        className='rounded-full '
        src="/osman.png"
        width={50}
        height={50}
        alt="Team member"
        />

        <h1>Osman</h1>
        <h1>Abdout</h1>

        
        
        
    </div>
  )
}

export default Team