import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

export const MarkdownRenderedr = ({ content }) => {
  return (
    <article className="prose prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          h1: ({node, ...props}) => (
            <h1 className="font-sans text-2xl md:text-4xl mb-2 md:mb-6 mt-5 md:mt-10" {...props} />
          ),
          h2: ({node, ...props}) => (
            <h2 className="font-sans text-lg md:text-2xl mt-5 md:mt-10 mb-2 md:mb-4" {...props} />
          ),
          h3: ({node, ...props}) => (
            <h3 className="font-sans text-md md:text-xl mt-5 md:mt-10 mb-1 md:mb-2" {...props} />
          ),
          p: ({node, ...props}) => (
            <p className="font-mono text-xs md:text-lg text-foreground/80 leading-relaxed mb-2 md:mb-4" {...props} />
          ),
          a: ({node, ...props}) => (
            <a className="font-mono text-xs md:text-lg text-foreground leading-relaxed underline hover:text-foreground/70 duration-150 mb-2 md:mb-4" {...props} />
          ),
          ul: ({node, ...props}) => (
            <ul className="list-disc font-mono text-xs md:text-lg text-foreground/80 leading-relaxed mb-2 md:mb-4" {...props} />
          ),
          img: ({node, ...props}) => (
            <img className="rounded-lg my-3 md:my-6 border border-white/10 max-w-1/2 h-auto" {...props} />
          ),
          code: ({node, inline, className, children, ...props}) => (
            <code
              className={`font-mono text-xs md:text-sm bg-foreground/5 text-accent mb-2 md:mb-4 ${
                inline ? "px-1 py-0.5 rounded" : "block p-4 rounded-lg"
              }`}
              {...props}
            >
              {children}
            </code>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  )
}
