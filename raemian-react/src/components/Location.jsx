import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const locationData = [
  {
    title: '강남의 중심',
    desc: '교통, 교육, 문화의 완벽한 인프라가 집약된 최고의 생활권',
    image: '/pic/사진/23년도 원베일리 사진 원본 _ 강종호 작가/01-실외/RAEMIAN-063s.jpg'
  },
  {
    title: '한강 조망권',
    desc: '대한민국 최고의 리버뷰를 선사하는 프리미엄 조망',
    image: '/pic/사진/24년도 달력 소스/DJI_0795-편집-2.jpg'
  }
]

export default function Location() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.location .section-label', {
        x: -40, opacity: 0, duration: 1,
        scrollTrigger: { trigger: '.location .section-label', start: 'top 85%' }
      })
      gsap.from('.location .section-title', {
        y: 50, opacity: 0, duration: 1.2,
        scrollTrigger: { trigger: '.location .section-title', start: 'top 85%' }
      })
      gsap.utils.toArray('.location-card').forEach((card, i) => {
        gsap.from(card, {
          y: 80, opacity: 0, duration: 1, delay: i * 0.2,
          scrollTrigger: { trigger: '.location-grid', start: 'top 75%' }
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="location" id="location" ref={sectionRef}>
      <div className="section-header">
        <div className="section-label">03 Location</div>
        <h2 className="section-title">
          대체 불가능한 <strong>프리미엄 입지</strong>
        </h2>
      </div>

      <div className="location-grid">
        {locationData.map((item, index) => (
          <div className="location-card" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="location-card-overlay">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
