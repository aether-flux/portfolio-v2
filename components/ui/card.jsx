import { Tag } from "./tag.jsx";




export const Card = ({ project, idx }) => {
  return (
    <div className='w-full md:w-2/3 flex flex-col md:flex-row items-start gap-2 md:gap-10 p-7 md:p-14 text-foreground border-2 border-accent shadow-[4px_4px_0_rgba(138,154,91,1)] cursor-pointer hover:bg-accent hover:text-background hover:shadow-[0_0_0_rgba(138,154,91,1)] duration-200'>

      <div className='text-2xl md:text-4xl font-mono font-medium'>{String(idx).padStart(2, '0')}</div>

      <div className='flex flex-col gap-6'>

        <div className='flex flex-col gap-2'>
          <span className='text-2xl md:text-4xl font-sans font-medium uppercase'>{project.title}</span>
          <div className='flex gap-3'>
            {project.tags.map((t, i) => (
              <Tag name={t} key={i} />
            ))}
          </div>
        </div>

        <span className='font-mono font-light text-lg'>{project.subtitle}</span>

      </div>

    </div>
  )
}
