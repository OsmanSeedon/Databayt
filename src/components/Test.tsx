import React from 'react'

const Test = () => {
  return (
    <div className="w-[271px] h-[110px] px-[13px] py-5 bg-neutral-50 border border-neutral-900 flex-col justify-start items-start gap-2.5 inline-flex">
  <div className="justify-center items-center gap-3.5 inline-flex">
    <div className="h-[70px] justify-start items-center gap-3.5 flex">
      <div className="w-[121px] h-8 relative">
        <div className="w-[51px] h-8 px-[9px] py-2 left-0 top-0 absolute bg-black justify-center items-center gap-2.5 inline-flex">
          <div className="text-white text-[13px] font-semibold font-['Inter'] tracking-wider">MAP</div>
        </div>
        <div className="left-[65px] top-[4px] absolute text-black text-xs font-normal font-['Inter'] tracking-wide">Map of<br/>treasure</div>
      </div>
      <div className="text-black text-xs font-light font-['Inter'] tracking-wide">Location, contact, working hours, traffic,<br/>Appointment Booking and required docs.</div>
    </div>
  </div>
</div>
  )
}

export default Test