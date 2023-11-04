import FLOW from '@/components/Flow'
import Header from '@/components/Header'
import Mobile from '@/components/Mobile'
import Search from '@/components/Search'
import Test from '@/components/Test'
import React from 'react'

const Tool = () => {
  return (
    
    <div className='space-y-4'>
    <Header />
    <Search />
    <Mobile />
    <p className='text-[12px]'>The most magical part of the Harry Potter books, is that they eventually used the skills they learned at school</p>
    <div>
      <p className='text-[16px]'>+ 40 tool for</p>
      <p className='text-[24px] pt-0'>bussiness automation</p>
    </div>
    <FLOW/>
    <Test />
    </div>

    

  )
}

export default Tool