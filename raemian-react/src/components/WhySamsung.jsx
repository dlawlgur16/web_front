import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function WhySamsung() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.why-samsung-bg', {
        yPercent: 25, ease: 'none',
        scrollTrigger: {
          trigger: '.why-samsung',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5
        }
      })
      gsap.from('.why-samsung-content', {
        y: 100, opacity: 0, duration: 1.4,
        scrollTrigger: { trigger: '.why-samsung', start: 'top 60%' }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="why-samsung" ref={sectionRef}>
      <div className="why-samsung-bg" />
      <div className="why-samsung-content">
        <div className="section-label">02 Why Samsung</div>
        <h2 className="section-title">
          삼성, <strong>압구정의 가치</strong>를 보다
        </h2>
        <p>
          삼성물산은 단순한 재건축을 넘어, 압구정이 가진 역사적 가치와
          미래 가능성을 동시에 실현할 수 있는 유일한 파트너입니다.
        </p>
        <div className="key-message">
          <p>
            "압구정의 과거를 존중하고, 현재를 혁신하며,
            미래를 창조하는 것. 그것이 삼성물산의 약속입니다."
          </p>
        </div>
      </div>
    </section>
  )
}
