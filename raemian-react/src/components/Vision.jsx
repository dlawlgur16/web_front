import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Vision() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.vision-bg', {
        yPercent: 30, ease: 'none',
        scrollTrigger: {
          trigger: '.vision',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5
        }
      })
      gsap.from('.vision-content', {
        y: 80, opacity: 0, duration: 1.4,
        scrollTrigger: { trigger: '.vision', start: 'top 60%' }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="vision" id="vision" ref={sectionRef}>
      <div className="vision-bg" />
      <div className="vision-overlay" />
      <div className="vision-content">
        <div className="section-label">07 Vision</div>
        <h2>
          World Landmark<br />
          <strong>Skyline</strong>
        </h2>
        <p>
          압구정은 단순한 재건축이 아닌, 세계적인 랜드마크로 거듭납니다.<br />
          삼성물산과 함께 대한민국 주거문화의 새로운 역사를 써내려갑니다.
        </p>
      </div>
    </section>
  )
}
