import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const techItems = [
  {
    title: '파노라마 리버뷰',
    desc: '한강의 아름다운 전경을 최대한 담아내는 혁신적인 설계. 모든 세대에서 탁 트인 조망을 경험할 수 있습니다.',
    image: '/pic/사진/24년도 달력 소스/DJI_0795-편집-2.jpg'
  },
  {
    title: '스카이라인 최적화',
    desc: '도시의 스카이라인과 조화를 이루면서도 독보적인 존재감을 갖춘 건축 설계를 제안합니다.',
    image: '/pic/사진/23년도 원베일리 사진 원본 _ 강종호 작가/01-실외/RAEMIAN-205s.jpg'
  }
]

export default function Technology() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.technology .section-label', {
        x: -40, opacity: 0, duration: 1,
        scrollTrigger: { trigger: '.technology .section-label', start: 'top 85%' }
      })
      gsap.from('.technology .section-title', {
        y: 50, opacity: 0, duration: 1.2,
        scrollTrigger: { trigger: '.technology .section-title', start: 'top 85%' }
      })
      gsap.utils.toArray('.tech-item').forEach((item, i) => {
        gsap.from(item, {
          y: 80, opacity: 0, duration: 1, delay: i * 0.25,
          scrollTrigger: { trigger: '.tech-grid', start: 'top 75%' }
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="technology" ref={sectionRef}>
      <div className="section-header">
        <div className="section-label">06 Technology</div>
        <h2 className="section-title">
          <strong>조망특화 설계</strong> 기술력
        </h2>
      </div>

      <div className="tech-grid">
        {techItems.map((item, index) => (
          <div className="tech-item" key={index}>
            <div className="tech-item-image">
              <img src={item.image} alt={item.title} />
            </div>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
