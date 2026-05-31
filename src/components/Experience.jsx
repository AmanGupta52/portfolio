import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { experience } from '../data/portfolioData'

export default function Experience() {
    const ref = useRef()
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="experience" className="section" ref={ref} style={{ position: 'relative', zIndex: 1 }}>
            <div className="ambient-glow" style={{ width: 400, height: 400, background: '#06b6d4', left: '-5%', top: '40%' }} />

            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    style={{ marginBottom: '60px' }}
                >
                    <p className="section-tag">Journey</p>
                    <h2 className="section-title">
                        Experience &<br />
                        <span className="gradient-text">background</span>
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div style={{ position: 'relative', maxWidth: '760px' }}>
                    {/* Vertical line */}
                    <motion.div
                        initial={{ scaleY: 0, originY: 0 }}
                        animate={inView ? { scaleY: 1 } : {}}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            position: 'absolute',
                            left: '19px',
                            top: 0,
                            bottom: 0,
                            width: '1px',
                            background: 'linear-gradient(to bottom, #3b82f6, #8b5cf6, transparent)',
                        }}
                    />

                    {experience.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                            style={{
                                paddingLeft: '56px',
                                paddingBottom: i < experience.length - 1 ? '48px' : '0',
                                position: 'relative',
                            }}
                        >
                            {/* Dot */}
                            <div style={{
                                position: 'absolute',
                                left: '11px',
                                top: '6px',
                                width: '17px',
                                height: '17px',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                                border: '3px solid var(--bg-primary)',
                                boxShadow: '0 0 12px rgba(59,130,246,0.5)',
                                zIndex: 1,
                            }} />

                            <motion.div
                                className="glass"
                                whileHover={{ y: -4, scale: 1.01 }}
                                style={{ padding: '28px', borderRadius: '20px' }}
                            >
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                    marginBottom: '12px',
                                    flexWrap: 'wrap',
                                    gap: '8px',
                                }}>
                                    <div>
                                        <h3 style={{
                                            fontFamily: 'var(--font-display)',
                                            fontSize: '18px',
                                            fontWeight: 700,
                                            marginBottom: '4px',
                                        }}>
                                            {exp.role}
                                        </h3>
                                        <p style={{ color: 'var(--accent-blue)', fontSize: '14px', fontWeight: 500 }}>
                                            {exp.company}
                                        </p>
                                    </div>

                                    <span style={{
                                        padding: '4px 12px',
                                        background: 'rgba(59,130,246,0.1)',
                                        border: '1px solid rgba(59,130,246,0.2)',
                                        borderRadius: '100px',
                                        fontSize: '12px',
                                        color: 'var(--accent-blue)',
                                        whiteSpace: 'nowrap',
                                    }}>
                                        {exp.period}
                                    </span>
                                </div>

                                <p style={{
                                    fontSize: '14px',
                                    color: 'var(--text-secondary)',
                                    lineHeight: 1.7,
                                    marginBottom: '16px',
                                }}>
                                    {exp.description}
                                </p>

                                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                                    {exp.skills.map((sk) => (
                                        <span key={sk} style={{
                                            padding: '3px 10px',
                                            background: 'rgba(255,255,255,0.04)',
                                            border: '1px solid var(--border)',
                                            borderRadius: '6px',
                                            fontSize: '11px',
                                            color: 'var(--text-secondary)',
                                        }}>
                                            {sk}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}