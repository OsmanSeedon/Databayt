import Header from '@/components/Header'
import Mobile from '@/components/Mobile'
import Search from '@/components/Search'
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