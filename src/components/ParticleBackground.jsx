import { useEffect, useRef } from 'react'

export default function ParticleBackground() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let animId
        let W = (canvas.width = window.innerWidth)
        let H = (canvas.height = window.innerHeight)

        const PARTICLE_COUNT = 80
        const particles = []

        class Particle {
            constructor() {
                this.reset()
            }
            reset() {
                this.x = Math.random() * W
                this.y = Math.random() * H
                this.size = Math.random() * 1.5 + 0.3
                this.speedX = (Math.random() - 0.5) * 0.3
                this.speedY = (Math.random() - 0.5) * 0.3
                this.opacity = Math.random() * 0.4 + 0.05
                this.color = Math.random() > 0.5 ? '59,130,246' : '139,92,246'
            }
            update() {
                this.x += this.speedX
                this.y += this.speedY
                if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset()
            }
            draw() {
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(${this.color},${this.opacity})`
                ctx.fill()
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
                        ctx.strokeStyle = `rgba(59,130,246,${0.06 * (1 - dist / 120)})`
                        ctx.lineWidth = 0.5
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
                opacity: 0.7,
            }}
        />
    )
}