import { useState } from 'react'
import Logo from './Logo'

function HelloWorld() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 text-center">
      <div className="flex justify-center mb-6">
        <Logo />
      </div>
      
      <h1 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400 tracking-tight">
        Hello World
      </h1>
      
      <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
        Welcome to your new React + TypeScript + Vite + Tailwind project
      </p>
      
      <div className="mb-6">
        <button 
          onClick={() => setCount((count) => count + 1)}
          className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg shadow transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-opacity-50"
        >
          Count is {count}
        </button>
      </div>
      
      <p className="text-sm text-slate-500 dark:text-slate-400">
        Edit <code className="font-mono bg-slate-100 dark:bg-slate-700 px-1 py-0.5 rounded text-slate-800 dark:text-slate-200">src/components/HelloWorld.tsx</code> to get started
      </p>
    </div>
  )
}

export default HelloWorld