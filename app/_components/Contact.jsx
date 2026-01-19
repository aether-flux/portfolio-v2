import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className='flex flex-col gap-5 md:gap-10 p-5 md:p-14'>

      <div className='flex flex-col gap-6'>
        <h1 className='font-sans font-medium text-2xl md:text-6xl uppercase leading-[1.15]'>wanna get in touch?</h1>

        <div className='flex flex-col gap-2 md:gap-0 mail-link'>
          <span className='font-mono font-light text-md md:text-lg'>Send me a mail at</span>
          <Link className='font-sans text-3xl md:text-5xl relative inline-block w-fit hover:scale-[102%] transition-all mail-link-text' href="mailto:amartya96@proton.me">amartya96@proton.me</Link>
        </div>

        <span className='font-mono font-light text-md md:text-lg mt-10'>{`>`} I usually reply pretty quickly {`:)`}</span>
      </div>

      <div className='flex flex-col gap-6'>
        <h1 className='font-sans font-medium text-xl md:text-4xl uppercase leading-[1.15]'>my digital life</h1>

        <div className='flex flex-col md:flex-row items-start md:items-center gap-3'>
          <span className='font-mono font-bold text-xl md:text-4xl text-accent'>{'{'}</span>
          <Link className='font-mono text-md md:text-xl uppercase hover:text-foreground/70 duration-200' href="https://github.com/aether-flux">github</Link>
          <div className='w-1 h-1 invisible md:visible rounded-full bg-foreground'></div>
          <Link className='font-mono text-md md:text-xl uppercase hover:text-foreground/70 duration-200' href="https://linkedin.com/in/amartya-chowdhury">linkedin</Link>
          <div className='w-1 h-1 invisible md:visible rounded-full bg-foreground'></div>
          <Link className='font-mono text-md md:text-xl uppercase hover:text-foreground/70 duration-200' href="https://instagram.com/paraxius">instagram</Link>
          <div className='w-1 h-1 invisible md:visible rounded-full bg-foreground'></div>
          <Link className='font-mono text-md md:text-xl uppercase hover:text-foreground/70 duration-200' href="https://x.com/aetheros__">twitter</Link>
          <span className='font-mono font-bold text-xl md:text-4xl text-accent'>{'}'}</span>
        </div>
      </div>

    </section>
  )
}

export default Contact
