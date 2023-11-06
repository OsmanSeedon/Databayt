
import Header from '@/components/Header'
import Read from '@/components/Read'
import Search from '@/components/Search'
import Title from '@/components/Title'
import Hero from '@/components/Hero'
import Team from '@/components/Team'

import Mobile from '@/components/Mobile'
import Footer from '@/components/Footer'
import Contribute from '@/components/Contribute'



export default function Home() {
  return (
    <div className='space-y-4'>
    <Header />
    <Search />
    <Mobile />
    <h1 className='text-[20px]'>Contribute</h1>
    <Contribute />
    <Hero />
    <Read />
    <Title />
    <Team />
    <Footer />
    
    </div>
  )
}
