import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const globalSlides = [
  {
    title: 'World Class Skyline',
    desc: '세계 주요 도시 프리미엄 주거단지와 비교',
    image: '/pic/사진/24년도 달력 소스/DJI_0806-편집-3_보정.jpg'
  },
  {
    title: 'Architectural Excellence',
    desc: '세계적 수준의 건축 미학',
    image: '/pic/사진/23년도 원베일리 사진 원본 _ 강종호 작가/01-실외/RAEMIAN-205s.jpg'
  },
  {
    title: 'Public Art & Design',
    desc: '문화와 예술이 함께하는 주거 공간',
    image: '/pic/사진/제일기획/2/키네틱 필드__0449.jpg'
  }
]

export default function Global() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.global .section-label', {
        x: -40, opacity: 0, duration: 1,
        scrollTrigger: { trigger: '.global .section-label', start: 'top 85%' }
      })
      gsap.from('.global .section-title', {
        y: 50, opacity: 0, duration: 1.2,
        scrollTrigger: { trigger: '.global .section-title', start: 'top 85%' }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="global" id="global" ref={sectionRef}>
      <div className="section-header" style={{ textAlign: 'center' }}>
        <div className="section-label" style={{ justifyContent: 'center' }}>
          04 Global Standard
        </div>
        <h2 className="section-title">
          세계 랜드마크와 <strong>어깨를 나란히</strong>
        </h2>
      </div>

      <div className="global-intro">
        <p>
          뉴욕 센트럴파크, 런던 하이드파크, 도쿄 롯폰기...<br />
          세계적인 도시의 랜드마크 주거단지와 비교해도 손색없는 가치를 실현합니다.
        </p>
      </div>

      <Swiper
        className="swiper-global"
        modules={[Pagination, Autoplay]}
        slidesPerView="auto"
        centeredSlides={true}
        spaceBetween={40}
        loop={true}
        speed={1000}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        {globalSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="global-slide">
              <img src={slide.image} alt={slide.title} />
              <div className="global-slide-info">
                <h4>{slide.title}</h4>
                <p>{slide.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
