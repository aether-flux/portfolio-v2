import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Topbar = () => {
  return (
    <nav className='p-14'>

      <Link href="/">
        <Image
          src="/port-logo.svg"
          width={200}
          height={47}
          alt="Amartya Chowdhury"
        />
      </Link>

    </nav>
  )
}

export const Sidenav = () => {
  return (
    <nav>

      <ul>
        <li>intro</li>
        <li>work</li>
        <li>skills</li>
        <li>contact</li>
      </ul>

    </nav>
  )
}
