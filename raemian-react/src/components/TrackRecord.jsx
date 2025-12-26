import { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Parallax } from 'swiper/modules'
import gsap from 'gsap'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/parallax'

// 건축물 데이터
const landmarks = [
  {
    name: 'Burj Khalifa',
    nameKo: '부르즈 칼리파',
    height: '828M',
    floors: '163F',
    location: 'Dubai, UAE',
    year: '2010',
    image: '/pic/초고층/부르즈/부르즈칼리파 (1).jpg'
  },
  {
    name: 'Petronas Twin Towers',
    nameKo: '페트로나스 트윈타워',
    height: '452M',
    floors: '88F',
    location: 'Kuala Lumpur, Malaysia',
    year: '1998',
    image: '/pic/초고층/페트로나스 트윈타워/페트로나스타워_1.jpg'
  },
  {
    name: 'Taipei 101',
    nameKo: '타이페이 101',
    height: '508M',
    floors: '101F',
    location: 'Taipei, Taiwan',
    year: '2004',
    image: '/pic/초고층/타이페이101/타이베이101.jpg'
  },
  {
    name: 'Lakhta Center',
    nameKo: '라흐타 센터',
    height: '462M',
    floors: '87F',
    location: 'St. Petersburg, Russia',
    year: '2019',
    image: '/pic/초고층/라흐타센터/라흐타센터.jpg'
  },
  {
    name: 'Dongdaemun DDP',
    nameKo: '동대문 DDP',
    height: '29M',
    floors: '4F',
    location: 'Seoul, Korea',
    year: '2014',
    image: '/pic/건축물(물산)/ddp/동대문 디자인 플라자1.png'
  },
  {
    name: 'Incheon Bridge',
    nameKo: '인천대교',
    height: '230M',
    floors: '21.4KM',
    location: 'Incheon, Korea',
    year: '2009',
    image: '/pic/건축물(물산)/인천대교/준공 인천대교 (11).JPG'
  }
]

export default function TrackRecord() {
  const sectionRef = useRef(null)
  const swiperRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.trackrecord .section-label', {
        x: -40, opacity: 0, duration: 1,
        scrollTrigger: { trigger: '.trackrecord .section-label', start: 'top 85%' }
      })
      gsap.from('.trackrecord .section-title', {
        y: 50, opacity: 0, duration: 1.2,
        scrollTrigger: { trigger: '.trackrecord .section-title', start: 'top 85%' }
      })
      gsap.from('.landmark-slider', {
        y: 80, opacity: 0, duration: 1.2,
        scrollTrigger: { trigger: '.landmark-slider', start: 'top 80%' }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="trackrecord" id="trackrecord" ref={sectionRef}>
      <div className="section-header">
        <div className="section-label">05 Track Record</div>
        <h2 className="section-title">
          <strong>세계적 건축물</strong>을 완성한 기술력
        </h2>
      </div>

      <div className="landmark-slider">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Parallax]}
          speed={1000}
          parallax={true}
          navigation={{
            prevEl: '.landmark-nav-prev',
            nextEl: '.landmark-nav-next',
          }}
          loop={true}
          grabCursor={true}
          touchRatio={1.5}
          resistance={true}
          resistanceRatio={0.5}
          className="landmark-swiper"
        >
          {landmarks.map((landmark, index) => (
            <SwiperSlide key={index}>
              <div className="landmark-slide">
                {/* 배경 대형 텍스트 - 패럴랙스 */}
                <div
                  className="landmark-bg-text"
                  data-swiper-parallax="-300"
                  data-swiper-parallax-opacity="0.5"
                >
                  {landmark.height}
                </div>

                {/* 메인 이미지 - 패럴랙스 */}
                <div
                  className="landmark-image-wrapper"
                  data-swiper-parallax="-100"
                  data-swiper-parallax-scale="0.95"
                >
                  <img
                    src={landmark.image}
                    alt={landmark.nameKo}
                    className="landmark-image"
                  />
                </div>

                {/* 정보 영역 */}
                <div
                  className="landmark-info"
                  data-swiper-parallax="-200"
                  data-swiper-parallax-opacity="0"
                >
                  <div className="landmark-info-left">
                    <span className="landmark-location">{landmark.location}</span>
                    <h3 className="landmark-name">{landmark.name}</h3>
                    <p className="landmark-name-ko">{landmark.nameKo}</p>
                  </div>
                  <div className="landmark-info-right">
                    <div className="landmark-stat">
                      <span className="landmark-stat-value">{landmark.height}</span>
                      <span className="landmark-stat-label">Height</span>
                    </div>
                    <div className="landmark-stat">
                      <span className="landmark-stat-value">{landmark.floors}</span>
                      <span className="landmark-stat-label">Floors</span>
                    </div>
                    <div className="landmark-stat">
                      <span className="landmark-stat-value">{landmark.year}</span>
                      <span className="landmark-stat-label">Completed</span>
                    </div>
                  </div>
                </div>

                {/* 슬라이드 번호 */}
                <div className="landmark-counter">
                  <span className="landmark-counter-current">{String(index + 1).padStart(2, '0')}</span>
                  <span className="landmark-counter-divider">/</span>
                  <span className="landmark-counter-total">{String(landmarks.length).padStart(2, '0')}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 커스텀 네비게이션 */}
        <div className="landmark-navigation">
          <button className="landmark-nav-prev">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="landmark-nav-next">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* 하단 브랜드 메시지 */}
      <div className="landmark-footer">
        <p>삼성물산 건설부문은 세계 최고층 빌딩 <strong>부르즈 칼리파</strong>를 비롯해<br />
        전 세계 랜드마크 건축물을 완공한 <strong>글로벌 Top 5</strong> 건설사입니다.</p>
      </div>

      <style>{`
        .landmark-slider {
          position: relative;
          margin-top: 4rem;
          overflow: hidden;
        }

        .landmark-swiper {
          width: 100%;
          height: 75vh;
          min-height: 600px;
          max-height: 900px;
        }

        .landmark-slide {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: linear-gradient(180deg, #0a0a0a 0%, #111 100%);
        }

        /* 배경 대형 텍스트 */
        .landmark-bg-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(15rem, 30vw, 35rem);
          font-weight: 300;
          color: rgba(255, 255, 255, 0.03);
          white-space: nowrap;
          pointer-events: none;
          letter-spacing: -0.02em;
          line-height: 1;
          z-index: 1;
        }

        /* 메인 이미지 */
        .landmark-image-wrapper {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .landmark-image {
          max-width: 70%;
          max-height: 80%;
          object-fit: contain;
          filter: brightness(0.9) contrast(1.1);
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .swiper-slide-active .landmark-image {
          transform: scale(1);
        }

        /* 정보 영역 */
        .landmark-info {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 3rem 5%;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%);
          z-index: 10;
        }

        .landmark-info-left {
          max-width: 50%;
        }

        .landmark-location {
          display: inline-block;
          font-family: 'Cormorant Garamond', serif;
          font-size: 0.75rem;
          letter-spacing: 0.3em;
          color: #b8956c;
          text-transform: uppercase;
          margin-bottom: 0.8rem;
        }

        .landmark-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 400;
          color: #fff;
          margin-bottom: 0.5rem;
          letter-spacing: 0.02em;
          line-height: 1.2;
        }

        .landmark-name-ko {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.5);
          font-weight: 300;
        }

        .landmark-info-right {
          display: flex;
          gap: 3rem;
        }

        .landmark-stat {
          text-align: right;
        }

        .landmark-stat-value {
          display: block;
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem;
          font-weight: 400;
          color: #fff;
          letter-spacing: 0.05em;
        }

        .landmark-stat-label {
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
        }

        /* 슬라이드 카운터 */
        .landmark-counter {
          position: absolute;
          top: 3rem;
          right: 5%;
          font-family: 'Cormorant Garamond', serif;
          font-size: 1rem;
          letter-spacing: 0.2em;
          color: rgba(255, 255, 255, 0.3);
          z-index: 10;
        }

        .landmark-counter-current {
          color: #b8956c;
          font-size: 1.5rem;
        }

        .landmark-counter-divider {
          margin: 0 0.5rem;
        }

        /* 네비게이션 */
        .landmark-navigation {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          transform: translateY(-50%);
          display: flex;
          justify-content: space-between;
          padding: 0 2rem;
          z-index: 20;
          pointer-events: none;
        }

        .landmark-nav-prev,
        .landmark-nav-next {
          width: 60px;
          height: 60px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: auto;
        }

        .landmark-nav-prev:hover,
        .landmark-nav-next:hover {
          border-color: #b8956c;
          background: rgba(184, 149, 108, 0.1);
        }

        .landmark-nav-prev svg,
        .landmark-nav-next svg {
          width: 24px;
          height: 24px;
        }

        /* 하단 메시지 */
        .landmark-footer {
          text-align: center;
          margin-top: 4rem;
          padding: 0 5%;
        }

        .landmark-footer p {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.6);
          line-height: 2.2;
        }

        .landmark-footer strong {
          color: #b8956c;
          font-weight: 500;
        }

        /* 반응형 */
        @media (max-width: 1024px) {
          .landmark-swiper {
            height: 65vh;
            min-height: 500px;
          }

          .landmark-image {
            max-width: 85%;
          }

          .landmark-info {
            flex-direction: column;
            align-items: flex-start;
            gap: 2rem;
          }

          .landmark-info-left {
            max-width: 100%;
          }

          .landmark-info-right {
            gap: 2rem;
          }
        }

        @media (max-width: 768px) {
          .landmark-swiper {
            height: 60vh;
            min-height: 450px;
          }

          .landmark-bg-text {
            font-size: 8rem;
          }

          .landmark-navigation {
            padding: 0 1rem;
          }

          .landmark-nav-prev,
          .landmark-nav-next {
            width: 44px;
            height: 44px;
          }

          .landmark-nav-prev svg,
          .landmark-nav-next svg {
            width: 18px;
            height: 18px;
          }

          .landmark-info-right {
            gap: 1.5rem;
          }

          .landmark-stat-value {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </section>
  )
}
