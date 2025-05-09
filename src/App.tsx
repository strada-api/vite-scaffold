import { useState, useEffect } from 'react'
import './App.css'
import HelloWorld from './components/HelloWorld'

function App() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4">
      <div className={`max-w-md w-full transition-all duration-700 ease-in-out transform ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <HelloWorld />
      </div>
    </div>
  )
}

export default App