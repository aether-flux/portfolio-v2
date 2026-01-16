import { Card } from '@/components/ui/card';
import React from 'react'

const Work = () => {
  let project1 = {
    id: 0,
    title: "enso db",
    tags: ["rust"],
    description: "An experimental database engine built to explore storage engines, query execution, and networking.",
  };

  let project2 = {
    id: 1,
    title: "rensa",
    tags: ["javascript", "rust"],
    description: "A minimal and fast backend framework for Node.js.",
  };

  return (
    <section id="work" className='flex flex-col gap-16 p-14 mb-20'>

      <h1 className='font-sans font-medium text-6xl uppercase leading-[1.15]'>stuff i make when i'm bored</h1>

      <div className='flex flex-col gap-5'>
        <Card project={project1} />
        <Card project={project2} />
      </div>

    </section>
  )
}

export default Work
