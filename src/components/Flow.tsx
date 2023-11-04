import Link from 'next/link'
import React from 'react'

const FLOW = () => {
  return (
    <Link href="/tool/flow">
    <div className = "w-full h-[150px] border border-gray-500 p-5">
        <div className='flex gap-2'>
            <div className='flex items-center justify-center w-[60px] h-[40px] bg-black '>
                <h1 className='text-white text-justify'>FLOW</h1>
            </div>
            <div>
                <p>من يقنع الطوفان الا يعبرا</p>
            </div>
        </div>
        <div className='pt-5'>
            <p>
                bring teams togather manage any process or workflow.
            </p>
        </div>
    </div>
    </Link>
    
  )
}

export default FLOW