import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { projects } from '../data/portfolioData'

function ProjectCard({ project, index, inView }) {
    const [hovered, setHovered] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                cursor: 'none',
                background: 'var(--bg-card)',
                backdropFilter: 'blur(20px)',
                border: `1px solid ${hovered ? project.color + '40' : 'rgba(255,255,255,0.07)'}`,
                transition: 'border-color 0.3s ease',
            }}
            whileHover={{ y: -8, scale: 1.01 }}
        >
            {/* Color accent bar */}
            <div style={{
                height: '3px',
                background: `linear-gradient(90deg, ${project.color}, ${project.accent})`,
                boxShadow: `0 0 20px ${project.color}80`,
            }} />

            {/* Glow background */}
            <div style={{ padding: '28px' }}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                    <div style={{
                        width: 48,
                        height: 48,
                        borderRadius: '14px',
                        background: project.color + '20',
                        border: `1px solid ${project.color}30`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '22px',
                    }}>
                        {['🧠', '📄', '📈', '🎲', '🛡️'][index]}
                    </div>

                    <div style={{ display: 'flex', gap: '8px' }}>
                        <motion.a
                            href={project.github}
                            whileHover={{ scale: 1.1 }}
                            style={{
                                width: 34, height: 34,
                                borderRadius: '8px',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid var(--border)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: 'var(--text-secondary)',
                                textDecoration: 'none',
                                fontSize: '14px',
                                transition: 'all 0.2s',
                            }}
                        >
                            ⌥
                        </motion.a>
                        <motion.a
                            href={project.live}
                            whileHover={{ scale: 1.1 }}
                            style={{
                                width: 34, height: 34,
                                borderRadius: '8px',
                                background: project.color + '15',
                                border: `1px solid ${project.color}30`,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: project.color,
                                textDecoration: 'none',
                                fontSize: '14px',
                            }}
                        >
                            ↗
                        </motion.a>
                    </div>
                </div>

                <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '20px',
                    fontWeight: 700,
                    marginBottom: '10px',
                    letterSpacing: '-0.01em',
                }}>
                    {project.title}
                </h3>

                <p style={{
                    fontSize: '14px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    marginBottom: '20px',
                }}>
                    {project.description}
                </p>

                {/* Tech stack */}
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {project.tech.map((t) => (
                        <span key={t} style={{
                            padding: '3px 10px',
                            background: project.color + '12',
                            border: `1px solid ${project.color}25`,
                            borderRadius: '6px',
                            fontSize: '11px',
                            fontWeight: 500,
                            color: project.accent,
                            letterSpacing: '0.02em',
                        }}>
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default function Projects() {
    const ref = useRef()
    const inView = useInView(ref, { once: true, margin: '-80px' })
    const [showAll, setShowAll] = useState(false)

    const displayed = showAll ? projects : projects.slice(0, 4)

    return (
        <section id="projects" className="section" ref={ref} style={{ position: 'relative', zIndex: 1 }}>
            <div className="ambient-glow" style={{ width: 500, height: 500, background: '#8b5cf6', right: '-5%', top: '0%' }} />

            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px', flexWrap: 'wrap', gap: '24px' }}
                >
                    <div>
                        <p className="section-tag">Work</p>
                        <h2 className="section-title">
                            Projects I've<br />
                            <span className="gradient-text">built & shipped</span>
                        </h2>
                    </div>
                    <p className="section-subtitle" style={{ maxWidth: '360px' }}>
                        From AI-powered tools to multiplayer games — real projects solving real problems.
                    </p>
                </motion.div>

                {/* Featured badge + grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                    gap: '16px',
                }}>
                    <AnimatePresence>
                        {displayed.map((project, i) => (
                            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
                        ))}
                    </AnimatePresence>
                </div>

                {!showAll && projects.length > 4 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.6 }}
                        style={{ textAlign: 'center', marginTop: '40px' }}
                    >
                        <motion.button
                            whileHover={{ scale: 1.04, y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => setShowAll(true)}
                            style={{
                                padding: '13px 32px',
                                background: 'transparent',
                                color: 'var(--text-primary)',
                                border: '1px solid var(--border-bright)',
                                borderRadius: '12px',
                                fontFamily: 'var(--font-body)',
                                fontSize: '14px',
                                fontWeight: 500,
                                cursor: 'none',
                            }}
                        >
                            View all projects →
                        </motion.button>
                    </motion.div>
                )}
            </div>
        </section>
    )
}