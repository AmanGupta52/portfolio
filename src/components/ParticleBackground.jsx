import { useEffect, useRef } from 'react'

export default function ParticleBackground() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let animId
        let W = (canvas.width = window.innerWidth)
        let H = (canvas.height = window.innerHeight)

        const PARTICLE_COUNT = 120
        const particles = []

        class Particle {
            constructor() {
                this.reset()
            }
            reset() {
                this.x = Math.random() * W
                this.y = Math.random() * H
                this.size = Math.random() * 2 + 0.5
                this.speedX = (Math.random() - 0.5) * 0.25
                this.speedY = (Math.random() - 0.5) * 0.25
                this.opacity = Math.random() * 0.5 + 0.1

                const colors = [
                    '56,189,248',   // Sky Blue
                    '125,211,252',  // Light Blue
                    '34,211,238',   // Cyan
                    '255,255,255'   // White
                ]

                this.color = colors[Math.floor(Math.random() * colors.length)]
            }
            update() {
                this.x += this.speedX
                this.y += this.speedY
                if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset()
            }
            draw() {
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)

                ctx.shadowBlur = 15
                ctx.shadowColor = `rgba(${this.color},0.8)`

                ctx.fillStyle = `rgba(${this.color},${this.opacity})`
                ctx.fill()

                ctx.shadowBlur = 0
            }
        }

        for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle())

        const drawConnections = () => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x
                    const dy = particles[i].y - particles[j].y
                    const dist = Math.sqrt(dx * dx + dy * dy)
                    if (dist < 120) {
                        ctx.beginPath()
                        ctx.moveTo(particles[i].x, particles[i].y)
                        ctx.lineTo(particles[j].x, particles[j].y)
                        ctx.strokeStyle = `rgba(125,211,252,${0.08 * (1 - dist / 120)})`
                        ctx.lineWidth = 0.7
                        ctx.stroke()
                    }
                }
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, W, H)
            particles.forEach((p) => { p.update(); p.draw() })
            drawConnections()
            animId = requestAnimationFrame(animate)
        }

        animate()

        const onResize = () => {
            W = canvas.width = window.innerWidth
            H = canvas.height = window.innerHeight
        }

        window.addEventListener('resize', onResize)
        return () => {
            cancelAnimationFrame(animId)
            window.removeEventListener('resize', onResize)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 0,
                pointerEvents: 'none',
                opacity: 0.9,
            }}
        />
    )
}