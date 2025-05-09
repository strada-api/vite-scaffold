import { useState, useEffect } from 'react'

function Logo() {
  const [hovering, setHovering] = useState(false)
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div 
      className={`w-20 h-20 relative transition-all duration-300 ease-in-out transform ${
        mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      } ${hovering ? 'rotate-6' : ''}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-primary-400 rounded-xl shadow-lg logo-animation" />
      <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl">
        React
      </div>
    </div>
  )
}

export default Logo