import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Hero() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax
      gsap.to('.hero-bg', {
        yPercent: 35,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      })

      // Content animations
      gsap.from('.hero-badge', { y: 30, opacity: 0, duration: 1, delay: 1.5 })
      gsap.from('.hero-title', { y: 50, opacity: 0, duration: 1.2, delay: 1.7 })
      gsap.from('.hero-desc', { y: 40, opacity: 0, duration: 1, delay: 1.9 })
      gsap.from('.hero-scroll', { opacity: 0, duration: 1, delay: 2.2 })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="hero" ref={sectionRef}>
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-badge">Samsung C&T × Apgujeong</div>
        <h1 className="hero-title">
          압구정, <strong>새로운 시대</strong>를 열다
        </h1>
        <p className="hero-desc">
          반세기의 역사를 품은 대한민국 최고의 주거지,<br />
          삼성물산이 새로운 랜드마크로 완성합니다.
        </p>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  )
}
