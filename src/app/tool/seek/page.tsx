import Tool from '@/components/Hero/Tool'
import Back from '@/components/Icon/Back'
import ToolIcon from '@/components/Icon/Tool'
import React from 'react'

const Seek = () => {
  return (
    <>
    <Back path='/tool'/>
    <Tool
      title="SEEK"
      subtitle="Best seekers
      in Hogwarts history"
      desc="Job, Scholarship, Degree and Visa
      appear from where ever you are."
    />
    <div className="grid gap-2 grid-cols-2">
      <ToolIcon src="/job.png" width={100} height={100} alt="Job" path='/tool/seek/job' />
      <ToolIcon src="/scholar.png" width={100} height={100} alt="Scholar" path='/tool/seek/scholar'/>
      <ToolIcon src="/degree.png" width={100} height={100} alt="Degree" path='/tool/seek/degree' />
      <ToolIcon src="/visa.png" width={100} height={100} alt="Visa" path='/tool/seek/visa'/>
    </div>
  </>
  )
}

export default Seek