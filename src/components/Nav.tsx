import { NAV_LINKS } from '@/constants'
import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <ul className="hidden h-full gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key}
            className=" text-gray-600 regular-16 flexCenter cursor-pointer
            pb-1.5 transition-all hover:text-black">
            {link.label}
            </Link>
            ))}
        </ul>
  )
}

export default Nav