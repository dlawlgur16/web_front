import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function CTA() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-content', {
        y: 60, opacity: 0, duration: 1.2,
        scrollTrigger: { trigger: '.cta', start: 'top 75%' }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="cta" ref={sectionRef}>
      <div className="cta-content">
        <h2>함께 만들어가는 <strong>미래</strong></h2>
        <p>
          압구정의 새로운 시대, 삼성물산이 입주민 여러분과 함께합니다.<br />
          최고의 파트너와 함께 최고의 가치를 실현하세요.
        </p>
        <a href="#" className="cta-btn">상담 문의하기</a>
      </div>
    </section>
  )
}
