import React from 'react'

const Footer = () => {
  return (
    
    <div className="flex flex-col bg-yellow-400  text-right  -mx-24">
      <div className='flex flex-raw'>
      <div className="flex flex-col gap-2 w-full justify justify-start 
      pl-28 pt-3 place-items-start ">
        <div className='text-lg font-bold'>English</div>
        <div className='text-lg font-bold pb-3'>Light</div>
        <div className='font-semibold'>Sudan</div>
        <div className='pb-3'>Khartoum</div>
        <div className='font-bold'><p className="underline underline-offset-8">Databayt</p></div>
        <div className=''>Roadmap</div>
        <div className=''>Skills Set</div>
        <div className=''>Documentation</div>
        <div className='pb-28'>Contribute</div>
        
      </div>
      <div className='flex flex-col gap-2 w-full justify justify-start 
      pt-3 place-items-start'>
        <div className='text-lg font-bold'>Head Office</div>
        <div className=''>Arkwit, Sudan</div>
        <div className='scroll-pr-20 pt-3pb-2'> ox: 1470</div>

      </div>
      </div>
      <div className='flex justify justify-center  w-full '>
        <div className='text-sm font-semibold pb-2'>Databayt, All rights free</div>

      </div>
    </div>
  )
}

export default Footer

