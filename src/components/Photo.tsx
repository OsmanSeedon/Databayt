import React from 'react'
import Image from 'next/image'

const Photo = () => {
  return (
    <div className = "rounded-full">
        <Image 
        src="next.svg"
        width={50}
        height={50}
        alt="Team member"
        />
    </div>
    
  )
}

export default Photo