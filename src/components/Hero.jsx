import { useRef, useEffect } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import ThreeScene from './ThreeScene'
import FloatingShapes from './FloatingShapes'
import { personalInfo } from '../data/portfolioData'

const ROLES = ['Full Stack Developer', 'Cybersecurity Enthusiast', 'Creative Coder', 'Problem Solver']

export default function Hero() {
    const containerRef = useRef()
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    const rotateX = useSpring(useTransform(mouseY, [-300, 300], [6, -6]), { stiffness: 50, damping: 20 })
    const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-6, 6]), { stiffness: 50, damping: 20 })

    const onMouseMove = (e) => {
        const rect = containerRef.current?.getBoundingClientRect()
        if (!rect) return
        mouseX.set(e.clientX - rect.left - rect.width / 2)
        mouseY.set(e.clientY - rect.top - rect.height / 2)
    }

    const stagger = {
        hidden: {},
        show: { transition: { staggerChildren: 0.08 } },
    }

    const fadeUp = {
        hidden: { opacity: 0, y: 32 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
    }

    return (
        <section
            id="hero"
            ref={containerRef}
            onMouseMove={onMouseMove}
            style={{
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                padding: '0 24px',
                zIndex: 1,
            }}
        >
            {/* Ambient glows */}
            <div className="ambient-glow" style={{ width: 600, height: 600, background: '#3b82f6', left: '-10%', top: '20%' }} />
            <div className="ambient-glow" style={{ width: 500, height: 500, background: '#8b5cf6', right: '-5%', top: '10%' }} />

            <FloatingShapes />

            {/* 3D Globe — right side */}
            <div style={{
                position: 'absolute',
                right: '-4%',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '55vw',
                maxWidth: '700px',
                height: '700px',
                opacity: 0.85,
                zIndex: 1,
            }}>
                <ThreeScene />

            </div>

            {/* Content */}
            <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', width: '100%', paddingTop: '80px' }}>
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    animate="show"
                    style={{ maxWidth: '620px' }}
                >
                    {/* Badge */}
                    <motion.div variants={fadeUp} style={{ marginBottom: '24px' }}>
                        <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '6px 14px',
                            background: 'rgba(59,130,246,0.1)',
                            border: '1px solid rgba(59,130,246,0.2)',
                            borderRadius: '100px',
                            fontSize: '12px',
                            fontWeight: 500,
                            color: 'var(--accent-blue)',
                            letterSpacing: '0.05em',
                        }}>
                            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981' }} />
                            Available for opportunities
                        </span>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        variants={fadeUp}
                        style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(52px, 8vw, 86px)',
                            fontWeight: 800,
                            lineHeight: 1.0,
                            letterSpacing: '-0.03em',
                            marginBottom: '8px',
                            color: 'var(--text-primary)',
                        }}
                    >
                        Hi, I'm{' '}
                        <span style={{
                            background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 60%, #06b6d4 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            {personalInfo.name}
                        </span>
                    </motion.h1>

                    {/* Roles */}
                    <motion.div variants={fadeUp} style={{ marginBottom: '24px' }}>
                        <div style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(22px, 4vw, 34px)',
                            fontWeight: 600,
                            color: 'var(--text-secondary)',
                            letterSpacing: '-0.02em',
                            lineHeight: 1.2,
                        }}>
                            {personalInfo.title}
                            <br />
                            <span style={{ color: 'var(--text-muted)', fontSize: '0.8em' }}>
                                {personalInfo.subtitle}
                            </span>
                        </div>
                    </motion.div>

                    {/* Tagline */}
                    <motion.p
                        variants={fadeUp}
                        style={{
                            fontSize: '17px',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.7,
                            marginBottom: '40px',
                            maxWidth: '480px',
                        }}
                    >
                        {personalInfo.tagline}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div variants={fadeUp} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                        <motion.button
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                            whileHover={{ scale: 1.04, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            style={{
                                padding: '14px 28px',
                                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '12px',
                                fontFamily: 'var(--font-body)',
                                fontSize: '15px',
                                fontWeight: 600,
                                cursor: 'none',
                                boxShadow: '0 8px 32px rgba(59,130,246,0.35)',
                                letterSpacing: '0.01em',
                            }}
                        >
                            View Projects →
                        </motion.button>

                        <motion.button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            whileHover={{ scale: 1.04, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            style={{
                                padding: '13px 27px',
                                background: 'transparent',
                                color: 'var(--text-primary)',
                                border: '1px solid rgba(255,255,255,0.15)',
                                borderRadius: '12px',
                                fontFamily: 'var(--font-body)',
                                fontSize: '15px',
                                fontWeight: 500,
                                cursor: 'none',
                                transition: 'all 0.3s',
                            }}
                        >
                            Let's Talk
                        </motion.button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        variants={fadeUp}
                        style={{
                            display: 'flex',
                            gap: '32px',
                            marginTop: '56px',
                            paddingTop: '32px',
                            borderTop: '1px solid var(--border)',
                        }}
                    >
                        {[
                            { value: '5+', label: 'Projects Built' },
                            { value: '3+', label: 'Years Coding' },
                            { value: '2+', label: 'Security Certs' },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <div style={{
                                    fontFamily: 'var(--font-display)',
                                    fontSize: '28px',
                                    fontWeight: 800,
                                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}>
                                    {stat.value}
                                </div>
                                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                style={{
                    position: 'absolute',
                    bottom: '32px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
                    zIndex: 2,
                }}
            >
                <span style={{ fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Scroll
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                        width: 24,
                        height: 40,
                        border: '1px solid rgba(255,255,255,0.15)',
                        borderRadius: '12px',
                        display: 'flex',
                        justifyContent: 'center',
                        paddingTop: '6px',
                    }}
                >
                    <motion.div
                        animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        style={{
                            width: 3,
                            height: 8,
                            background: 'var(--accent-blue)',
                            borderRadius: '2px',
                        }}
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}