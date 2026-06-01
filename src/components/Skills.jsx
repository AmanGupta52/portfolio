import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '../data/portfolioData'
import NeuralNetwork from './NeuralNetwork'

const categories = ['All', 'Frontend', 'Backend', 'Database', 'Language', 'Security']

function SkillBar({ skill, inView, delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
            className="glass"
            whileHover={{ scale: 1.02, y: -2 }}
            style={{ padding: '20px', borderRadius: '16px', cursor: 'default' }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '22px' }}>{skill.icon}</span>
                    <div>
                        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '15px' }}>
                            {skill.name}
                        </div>
                        <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '1px' }}>
                            {skill.category}
                        </div>
                    </div>
                </div>
                <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '14px',
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                }}>
                    {skill.level}%
                </span>
            </div>

            {/* Progress bar */}
            <div style={{
                height: '4px',
                background: 'rgba(255,255,255,0.06)',
                borderRadius: '2px',
                overflow: 'hidden',
            }}>
                <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: delay + 0.2, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                        height: '100%',
                        background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                        borderRadius: '2px',
                        boxShadow: '0 0 8px rgba(59,130,246,0.5)',
                    }}
                />
            </div>
        </motion.div>
    )
}

export default function Skills() {
    const ref = useRef()
    const inView = useInView(ref, { once: true, margin: '-80px' })
    const [activeCategory, setActiveCategory] = useState('All')

    const filtered = activeCategory === 'All'
        ? skills
        : skills.filter(s => s.category === activeCategory)

    return (
        <section id="skills" className="section" ref={ref} style={{ position: 'relative', zIndex: 1 }}>
            <NeuralNetwork />
            <div className="ambient-glow" style={{ width: 400, height: 400, background: '#3b82f6', left: '-5%', top: '30%' }} />

            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    style={{ marginBottom: '60px' }}
                >
                    <p className="section-tag">Expertise</p>
                    <h2 className="section-title">
                        Technologies I<br />
                        <span className="gradient-text">work with</span>
                    </h2>
                    <p className="section-subtitle">
                        A curated set of tools and technologies I use to build modern, secure, and scalable products.
                    </p>
                </motion.div>

                {/* Category filter */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    style={{ display: 'flex', gap: '8px', marginBottom: '40px', flexWrap: 'wrap' }}
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            style={{
                                padding: '7px 16px',
                                borderRadius: '100px',
                                border: '1px solid',
                                borderColor: activeCategory === cat ? 'transparent' : 'var(--border)',
                                background: activeCategory === cat
                                    ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)'
                                    : 'transparent',
                                color: activeCategory === cat ? 'white' : 'var(--text-secondary)',
                                fontSize: '13px',
                                fontWeight: 500,
                                fontFamily: 'var(--font-body)',
                                cursor: 'none',
                                transition: 'all 0.25s ease',
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Skills grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '12px',
                }}>
                    {filtered.map((skill, i) => (
                        <SkillBar key={skill.name} skill={skill} inView={inView} delay={i * 0.06} />
                    ))}
                </div>

                {/* Marquee logos row */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 }}
                    style={{
                        marginTop: '60px',
                        padding: '24px',
                        background: 'rgba(255,255,255,0.02)',
                        border: '1px solid var(--border)',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        position: 'relative',
                    }}
                >
                    <p style={{ fontSize: '11px', color: 'var(--text-muted)', textAlign: 'center', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
                        Also familiar with
                    </p>
                    <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        {['Socket.IO', 'YOLOv8', 'MediaPipe', 'OpenCV', 'TensorFlow', 'Tailwind CSS', 'Three.js', 'Git'].map((tech) => (
                            <span key={tech} style={{
                                fontSize: '13px',
                                color: 'var(--text-muted)',
                                padding: '6px 14px',
                                background: 'rgba(255,255,255,0.03)',
                                borderRadius: '8px',
                                border: '1px solid var(--border)',
                                whiteSpace: 'nowrap',
                            }}>
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}