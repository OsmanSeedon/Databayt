import React from 'react'

const Toolhead = () => {
  return (
    <div className="w-64 h-20 flex-col justify-start items-start gap-3 inline-flex">
    <div className="justify-start items-center gap-4 inline-flex">
        <div className="w-14 h-9 bg-yellow-400" />
        <div className="text-black text-base font-semibold font-['Inter'] tracking-wider">FIX</div>
        <div className="w-40 h-6 text-black text-sm font-normal font-['Inter'] tracking-wide">When all else fails,<br/>read the instructions</div>
    </div>
    <div className="w-64 h-8 text-black text-xs font-light font-['Inter'] leading-none tracking-wide">Blog, community, manual, course and<br/>technical support bot.</div>
</div>
    
  )
}

export default Toolhead