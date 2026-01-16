import { Tag } from "@/components/ui/tag.jsx";
import React from 'react'

const Skills = () => {
  let languages = ["rust", "typescript", "javascript", "html/css"];
  let tools = ["linux", "vs code", "neovim", "terminal/cli"];
  let frameworks = ["node.js", "express", "react.js", "next.js"];

  return (
    <section id="skills" className='flex flex-col gap-16 p-14 mb-20'>

      <h1 className='font-sans font-medium text-6xl uppercase leading-[1.15]'>what i use to build stuff</h1>

      <div className='grid grid-cols-2 gap-16'>
        <div className='flex flex-col gap-6'>
          <h3 className='font-mono font-medium text-4xl uppercase'>languages</h3>
          <div className='flex flex-col gap-3 text-center w-1/4'>
            {languages.map((l) => (
              <Tag name={l} />
            ))}
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <h3 className='font-mono font-medium text-4xl uppercase'>frameworks/libraries</h3>
          <div className='flex flex-col gap-3 text-center w-1/4'>
            {frameworks.map((f) => (
              <Tag name={f} />
            ))}
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <h3 className='font-mono font-medium text-4xl uppercase'>tools</h3>
          <div className='flex flex-col gap-3 text-center w-1/4'>
            {tools.map((t) => (
              <Tag name={t} />
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}

export default Skills
