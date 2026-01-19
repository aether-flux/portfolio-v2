import React from 'react'





export const PrimaryBtn = ({ children }) => {
  return (
    <button className='font-mono font-light text-md md:text-xl text-foreground px-3 md:px-6 py-3 border-2 border-accent shadow-[4px_4px_0_rgba(138,154,91,1)] cursor-pointer hover:bg-accent hover:text-background hover:shadow-[0_0_0_rgba(138,154,91,1)] duration-200 z-[100]'>
      {children}
    </button>
  )
}

export const SecondaryBtn = ({ children }) => {
  return (
    <button className={`font-mono font-light text-md md:text-xl text-foreground px-3 md:px-6 py-3 underline decoration-dashed cursor-pointer hover:-translate-y-2 hover:translate-x-2 duration-200 z-[100]`}>
      {children}
    </button>
  )
}
