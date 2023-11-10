
import Header from '@/components/Nav/Header'
import Mobile from '@/components/Nav/Mobile'
import Search from '@/components/Search/Search'
import React from 'react'

const Blog = () => {
  return (
    <div className='space-y-4'>
    <Header />
    <Search />
    <Mobile />
    </div>
    
  )
}

export default Blog