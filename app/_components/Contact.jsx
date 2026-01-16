import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <section id="contact">

      <h1 className='font-sans font-medium text-6xl uppercase leading-[1.15]'>wanna get in touch?</h1>

      <div className='flex flex-col mt-10 mail-link'>
        <span className='font-mono font-light text-md'>Send me a mail at</span>
        <Link className='font-sans text-5xl mail-link-text' href="mailto:amartya96@proton.me">amartya96@proton.me</Link>
      </div>

    </section>
  )
}

export default Contact
