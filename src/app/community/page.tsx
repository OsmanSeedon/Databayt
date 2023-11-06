import Folder from '@/components/Folder'
import Header from '@/components/Header'
import Mobile from '@/components/Mobile'
import Search from '@/components/Search'
import React from 'react'

const Community = () => {
  return (
    <div className='space-y-4'>
    <Header />
    <Search />
    <Mobile />
    <Folder />
    </div>
  )
}

export default Community