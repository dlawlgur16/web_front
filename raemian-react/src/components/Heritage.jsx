import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const timelineData = [
  {
    year: '1970s',
    title: '프리미엄 주거의 시작',
    desc: '압구정동에 대규모 아파트 단지가 건설되며 대한민국 프리미엄 주거의 새 장이 열렸습니다.',
    image: '/pic/사진/23년도 원베일리 사진 원본 _ 강종호 작가/01-실외/RAEMIAN-004s.jpg'
  },
  {
    year: '1980-90s',
    title: '황금기의 시작',
    desc: '압구정은 대한민국 경제성장과 함께 최고급 주거지의 대명사로 자리잡았습니다.',
    image: '/pic/사진/23년도 원베일리 사진 원본 _ 강종호 작가/01-실외/RAEMIAN-057s.jpg'
  },
  {
    year: '2020s',
    title: '새로운 도약',
    desc: '50년의 역사를 바탕으로, 압구정은 다시 한번 대한민국 주거문화의 미래를 제시합니다.',
    image: '/pic/사진/23년도 원베일리 사진 원본 _ 강종호 작가/01-실외/RAEMIAN-141s.jpg'
  }
]

export default function Heritage() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.timeline-item').forEach((item) => {
        gsap.from(item, {
          y: 80, opacity: 0, duration: 1.2,
          scrollTrigger: { trigger: item, start: 'top 80%' }
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="heritage" ref={sectionRef}>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <span className="timeline-year">{item.year}</span>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
            <div className="timeline-image">
              <img src={item.image} alt={item.year} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
