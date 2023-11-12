import Header from '@/components/Nav/Header'
import Mobile from '@/components/Nav/Mobile'
import Search from '@/components/Input/Nano'
import React from 'react'

const Club = () => {
  return (
    <div className='space-y-4'>
    <Header />
    <Search />
    <Mobile />
    <p>ادخلوا من ابواب متفرقة</p>
    </div>
  )
}

export default Club