import { PrimaryBtn, SecondaryBtn } from '@/components/ui/button'
import React from 'react'

const Landing = () => {
  return (
      <section id="landing" className='flex flex-col gap-20 p-14 mb-20'>

        <div className='flex flex-col gap-5'>
          <span className='font-sans font-medium text-6xl uppercase leading-[1.15] w-1/2'>i build developer tools and systems with performance and dx in mind</span>
          <span className='font-mono font-light text-lg uppercase'>systems & backend developer</span>
        </div>

        <div className='flex gap-6'>
          <PrimaryBtn>See Resume</PrimaryBtn>
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
