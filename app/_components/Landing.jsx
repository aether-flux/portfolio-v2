import { PrimaryBtn, SecondaryBtn } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Landing = () => {
  return (
      <section id="intro" className='flex flex-col gap-10 md:gap-20 p-5 md:p-14 mb-10 md:mb-20'>

        <div className='flex flex-col gap-3 md:gap-5'>
          <span className='font-sans font-medium text-2xl md:text-6xl uppercase leading-[1.15] w-3/4 md:w-1/2'>i build developer tools and systems with performance and dx in mind</span>
          <span className='font-mono font-light text-md md:text-lg uppercase hover:opacity-70 duration-200'>systems & backend developer</span>
        </div>

        <div className='flex flex-col md:flex-row gap-6'>
          <Link href="https://drive.google.com/file/d/1tKdOjy1K6Z-vVZAsJIxD0g5VQ_aCJOHj/view?usp=sharing"><PrimaryBtn>See Resume</PrimaryBtn></Link>
          <SecondaryBtn>
            <div className='flex gap-4 items-center justify-center'>
              <span>Get in touch</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.99999 14.7886L14.7886 0.999998M14.7886 0.999998H4.88908M14.7886 0.999998V10.8995" stroke="#F6F5F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </SecondaryBtn>
        </div>

      </section>
  )
}

export default Landing
