export const Tag = ({ name }) => {
  name = name.toLowerCase();
  let color = '#CCCCCC';

  if (name === 'rust') {
    color = '#DD5509'
  } else if (name === 'javascript') {
    color = '#DCC922'
  } else if (name === 'typescript') {
    color = '#3273B3'
  } else if (name === 'html/css') {
    color = '#5C4D55'
  } else if (name === 'linux') {
    color = '#D8C234'
  } else if (name === 'vs code') {
    color = '#2A9CD8'
  } else if (name === 'neovim') {
    color = '#5D8F3C'
  } else if (name === 'terminal/cli' || name === 'terminal' || name === 'cli' || name === 'express') {
    color = '#CCCCCC'
  } else if (name === 'node.js') {
    color = '#7AB92C'
  } else if (name === 'react.js') {
    color = '#61C7E1'
  } else if (name === 'next.js') {
    color = '#000000'
  }

  return (
    <div className='px-3 md:px-4 py-0 rounded-full hover:opacity-80 duration-200' style={{ backgroundColor: `${color}88` }}>
      <span className='font-mono text-foreground text-sm uppercase'>{name}</span>
    </div>
  )
}
