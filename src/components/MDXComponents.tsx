import React from 'react';

type MDXComponent = React.ReactNode;

interface MDXComponents {
  [key: string]: (props: { children: MDXComponent }) => React.JSX.Element;
}

const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-3xl font-bold mb-6 text-neon-cyan">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-bold mb-4 mt-8 text-organic-green">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-bold mb-3 mt-6 text-holographic-purple">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="mb-4 text-gray-300 leading-relaxed">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="mb-4 ml-6 list-disc text-gray-300">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-4 ml-6 list-decimal text-gray-300">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="mb-2">{children}</li>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-neon-cyan pl-4 my-6 italic text-gray-400">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="bg-black/50 px-2 py-1 rounded text-sm font-mono text-neon-cyan">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto my-6 border border-neon-cyan/20">
      {children}
    </pre>
  ),
};

export default mdxComponents;