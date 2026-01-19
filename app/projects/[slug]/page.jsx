import { Tag } from '@/components/ui/tag';
import { projects } from '@/data/projects';
import React from 'react'
import fs from "fs";
import path from "path";
import { MarkdownRenderedr } from '@/components/MarkdownRenderer';
import { MiniTopbar, Topbar } from '@/app/_components/Navbar';

export default async function ({ params }) {
  params = await params;

  const project = projects.find((p) => p.slug === params.slug);
  let idx = projects.length - projects.indexOf(project);

  const filePath = path.join(process.cwd(), 'content/projects', `${project.slug}.md`);
  const content = fs.readFileSync(filePath, 'utf-8');

  return (
    <>
      <MiniTopbar />

      <section id={params.slug} className='flex flex-col gap-4 px-5 md:p-14 pt-0 mb-5 md:mb-10'>

        <div className='flex items-center gap-4 md:gap-10'>
          <div className='text-2xl md:text-4xl font-mono font-medium hover:text-foreground/70 duration-200'>{String(idx).padStart(2, '0')}</div>
          <h1 className='font-sans font-medium text-2xl md:text-4xl uppercase leading-[1.15] hover:text-foreground/70 duration-200'>{project.title}</h1>
        </div>

        <div className='flex items-center gap-4'>
          {project.tags.map((t, i) => (
            <Tag name={t} key={i} />
          ))}
        </div>

        <MarkdownRenderedr content={content} />

      </section>

      <footer className="px-5 py-8 w-full border-t-[1px] border-foreground/20">
        <span className="font-mono font-light text-sm md:text-lg text-center uppercase">Made with ❤️ and 🦀 by Amartya Chowdhury</span>
      </footer>
    </>
  )
}
