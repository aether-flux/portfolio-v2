import { Card } from '@/components/ui/card';
import { projects } from '@/data/projects';
import Link from 'next/link';
import React from 'react'

const Work = () => {
  return (
    <section id="work" className='flex flex-col gap-8 md:gap-16 p-5 md:p-14 mb-10 md:mb-20'>

      <h1 className='font-sans font-medium text-2xl md:text-6xl uppercase leading-[1.15]'>stuff i make when i'm bored</h1>

      <div className='flex flex-col gap-3 md:gap-5'>
        {projects.toReversed().map((p, i) => {
          return (
            <Link key={i} href={`/projects/${p.slug}`}><Card project={p} idx={projects.length-i} /></Link>
          );
        })}
      </div>

    </section>
  )
}

export default Work
