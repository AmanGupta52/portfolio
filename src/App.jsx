import { useState, useEffect, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'

function App() {
  const [loading, setLoading] = useState(true)
  const cursorRef = useRef(null)
  const followerRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2600)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    if (!cursor || !follower) return

    let mouseX = 0, mouseY = 0
    let followerX = 0, followerY = 0

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      cursor.style.left = mouseX - 4 + 'px'
      cursor.style.top = mouseY - 4 + 'px'
    }

    const animate = () => {
      followerX += (mouseX - followerX - 16) * 0.12
      followerY += (mouseY - followerY - 16) * 0.12
      follower.style.left = followerX + 'px'
      follower.style.top = followerY + 'px'
      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMouseMove)
    animate()
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [loading])

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-follower" ref={followerRef} />

      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <ParticleBackground />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  )
}

export default App