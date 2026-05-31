import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { personalInfo } from '../data/portfolioData'

const traits = [
    { icon: '🔐', title: 'Security Minded', desc: 'Every project built with security-first principles and ethical hacking awareness.' },
    { icon: '⚡', title: 'Performance Focused', desc: 'Clean, optimized code that scales — from MVP to production-grade systems.' },
    { icon: '🎨', title: 'Design Driven', desc: 'UX/UI that merges function with beauty. Interfaces people love to use.' },
    { icon: '🧠', title: 'Continuous Learner', desc: 'Always exploring the frontier: AI, CV, cybersecurity, new frameworks.' },
]

export default function About() {
    const ref = useRef()
    const inView = useInView(ref, { once: true, margin: '-100px' })

    const fadeUp = (delay = 0) => ({
        initial: { opacity: 0, y: 30 },
        animate: inView ? { opacity: 1, y: 0 } : {},
        transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
    })

    return (
        <section id="about" className="section" ref={ref} style={{ position: 'relative', zIndex: 1 }}>
            <div className="ambient-glow" style={{ width: 400, height: 400, background: '#8b5cf6', left: '60%', top: '20%' }} />

            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '80px',
                    alignItems: 'center',
                }}
                    className="about-grid"
                >
                    {/* Left: image / visual */}
                    <motion.div {...fadeUp(0)} style={{ position: 'relative' }}>
                        {/* Decorative card stack */}
                        <div style={{ position: 'relative', width: '100%', maxWidth: '420px' }}>
                            {/* Back card */}
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                transform: 'rotate(3deg) translate(8px, 8px)',
                                background: 'rgba(139,92,246,0.1)',
                                border: '1px solid rgba(139,92,246,0.15)',
                                borderRadius: '24px',
                            }} />

                            {/* Main card */}
                            <div className="glass" style={{
                                padding: '40px',
                                borderRadius: '24px',
                                position: 'relative',
                            }}>
                                {/* Avatar placeholder */}
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '20px',
                                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '36px',
                                    marginBottom: '24px',
                                    boxShadow: '0 0 30px rgba(59,130,246,0.3)',
                                }}>
                                    👨‍💻
                                </div>

                                <h3 style={{
                                    fontFamily: 'var(--font-display)',
                                    fontSize: '22px',
                                    fontWeight: 700,
                                    marginBottom: '8px',
                                }}>
                                    {personalInfo.name}
                                </h3>

                                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '24px' }}>
                                    B.Sc. Information Technology<br />
                                    Sathaye College, Mumbai · 2023–2026
                                </p>

                                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                    {['MERN Stack', 'Python', 'Cybersecurity'].map((tag) => (
                                        <span key={tag} style={{
                                            padding: '4px 12px',
                                            background: 'rgba(59,130,246,0.1)',
                                            border: '1px solid rgba(59,130,246,0.2)',
                                            borderRadius: '100px',
                                            fontSize: '12px',
                                            color: 'var(--accent-blue)',
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Bottom status */}
                                <div style={{
                                    marginTop: '28px',
                                    paddingTop: '20px',
                                    borderTop: '1px solid var(--border)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    fontSize: '13px',
                                    color: 'var(--text-secondary)',
                                }}>
                                    <span style={{
                                        width: 8, height: 8, borderRadius: '50%',
                                        background: '#10b981',
                                        boxShadow: '0 0 8px #10b981',
                                        display: 'inline-block',
                                    }} />
                                    Mumbai, India · Open to work
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: content */}
                    <div>
                        <motion.div {...fadeUp(0.1)}>
                            <p className="section-tag">About Me</p>
                            <h2 className="section-title">
                                Crafting code at the<br />
                                <span className="gradient-text">intersection of security</span><br />
                                and creativity
                            </h2>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.8, marginBottom: '32px' }}>
                                I'm a final-year B.Sc. IT student from Mumbai with a passion for building secure, scalable, and visually compelling applications.
                                My journey spans full-stack development with the MERN stack, computer vision research using YOLOv8 and MediaPipe, and hands-on cybersecurity work with Kali Linux.
                            </p>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.8, marginBottom: '40px' }}>
                                I believe the best software is both beautiful and bulletproof — where thoughtful UX meets robust backend architecture and security-first thinking.
                            </p>
                        </motion.div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                            {traits.map((t, i) => (
                                <motion.div
                                    key={t.title}
                                    {...fadeUp(0.2 + i * 0.07)}
                                    whileHover={{ y: -4, scale: 1.02 }}
                                    className="glass"
                                    style={{ padding: '20px', borderRadius: '16px', cursor: 'default' }}
                                >
                                    <span style={{ fontSize: '24px', marginBottom: '10px', display: 'block' }}>{t.icon}</span>
                                    <h4 style={{
                                        fontFamily: 'var(--font-display)',
                                        fontSize: '14px',
                                        fontWeight: 700,
                                        marginBottom: '6px',
                                    }}>
                                        {t.title}
                                    </h4>
                                    <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                        {t.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
        </section>
    )
}