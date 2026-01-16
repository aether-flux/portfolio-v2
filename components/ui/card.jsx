import { Tag } from "./tag.jsx";

export const Card = ({ project }) => {
  return (
    <div className='flex items-start gap-10 p-14 text-foreground border-2 border-accent shadow-[4px_4px_0_rgba(138,154,91,1)] cursor-pointer hover:bg-accent hover:text-background hover:shadow-[0_0_0_rgba(138,154,91,1)] duration-200 w-2/3'>

      <div className='text-4xl font-mono font-medium'>{String(project.id).padStart(2, '0')}</div>

      <div className='flex flex-col gap-6'>

        <div className='flex flex-col gap-2'>
          <span className='text-4xl font-sans font-medium uppercase'>{project.title}</span>
          <div className='flex gap-3'>
            {project.tags.map((t) => (
              <Tag name={t} />
            ))}
          </div>
        </div>

        <span className='font-mono font-light text-lg'>{project.description}</span>

      </div>

    </div>
  )
}
