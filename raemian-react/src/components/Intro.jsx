import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Intro() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.intro .section-label', {
        x: -40, opacity: 0, duration: 1,
        scrollTrigger: { trigger: '.intro .section-label', start: 'top 85%' }
      })
      gsap.from('.intro .section-title', {
        y: 50, opacity: 0, duration: 1.2,
        scrollTrigger: { trigger: '.intro .section-title', start: 'top 85%' }
      })
      gsap.to('.intro-image-overlay', {
        scaleX: 0, duration: 1.4, ease: 'power4.inOut',
        scrollTrigger: { trigger: '.intro-image', start: 'top 70%' }
      })
      gsap.from('.intro-text h3, .intro-text p', {
        y: 50, opacity: 0, duration: 1, stagger: 0.2,
        scrollTrigger: { trigger: '.intro-text', start: 'top 75%' }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="intro" id="heritage" ref={sectionRef}>
      <div className="section-header">
        <div className="section-label">01 Heritage</div>
        <h2 className="section-title">
          <strong>압구정</strong>, 그 이름의 무게
        </h2>
      </div>

      <div className="intro-grid">
        <div className="intro-image">
          <img src="/pic/사진/23년도 원베일리 사진 원본 _ 강종호 작가/01-실외/RAEMIAN-116s.jpg" alt="래미안 압구정" />
          <div className="intro-image-overlay" />
        </div>
        <div className="intro-text">
          <h3>조선시대부터 이어온<br /><strong>대한민국 최고의 주거지</strong></h3>
          <p>
            압구정(狎鷗亭)은 조선 세조 때 한명회가 지은 정자의 이름에서 유래했습니다.
            '갈매기와 친하게 지내는 정자'라는 뜻을 품은 이 이름은,
            한강을 바라보는 최고의 입지를 상징합니다.
          </p>
          <p>
            1970년대 아파트 건설 이후, 압구정은 대한민국 상류층 주거문화의
            중심지로 자리매김했습니다. 반세기가 지난 지금, 새로운 도약을 준비합니다.
          </p>
        </div>
      </div>
    </section>
  )
}
