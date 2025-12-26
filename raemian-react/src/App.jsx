import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Loading from './components/Loading'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Heritage from './components/Heritage'
import WhySamsung from './components/WhySamsung'
import Location from './components/Location'
import Global from './components/Global'
import TrackRecord from './components/TrackRecord'
import Technology from './components/Technology'
import Vision from './components/Vision'
import CTA from './components/CTA'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'

import './styles/App.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('.nav')
      if (window.scrollY > 100) {
        nav?.classList.add('scrolled')
      } else {
        nav?.classList.remove('scrolled')
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Loading />
      <ScrollProgress />
      <Navigation />
      <Hero />
      <Intro />
      <Heritage />
      <WhySamsung />
      <Location />
      <Global />
      <TrackRecord />
      <Technology />
      <Vision />
      <CTA />
      <Footer />
    </>
  )
}

export default App
