import { useState, useEffect } from 'react'
import gsap from 'gsap'

export default function Loading() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + Math.random() * 12
        if (next >= 100) {
          clearInterval(interval)
          gsap.to('.loading-screen', {
            opacity: 0,
            duration: 1,
            delay: 0.5,
            ease: 'power2.inOut',
            onComplete: () => {
              document.querySelector('.loading-screen').style.display = 'none'
            }
          })
          return 100
        }
        return next
      })
    }, 80)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="loading-screen">
      <div className="loading-logo">Raemian</div>
      <div className="loading-bar">
        <div className="loading-bar-fill" style={{ width: `${progress}%` }} />
      </div>
      <div className="loading-percent">{Math.floor(progress)}%</div>
    </div>
  )
}
