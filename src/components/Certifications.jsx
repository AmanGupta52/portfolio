import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { certifications } from '../data/portfolioData'

export default function Certifications() {
    const ref = useRef()
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="certifications" className="section" ref={ref} style={{ position: 'relative', zIndex: 1 }}>
            <div className="ambient-glow" style={{ width: 400, height: 400, background: '#8b5cf6', right: '0', top: '30%' }} />

            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    style={{ marginBottom: '60px' }}
                >
                    <p className="section-tag">Credentials</p>
                    <h2 className="section-title">
                        Certifications &<br />
                        <span className="gradient-text">achievements</span>
                    </h2>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                    gap: '14px',
                }}>
                    {certifications.map((cert, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                            whileHover={{ y: -6, scale: 1.03 }}
                            className="glass"
                            style={{
                                padding: '28px',
                                borderRadius: '20px',
                                position: 'relative',
                                overflow: 'hidden',
                                cursor: 'default',
                                borderColor: hovered => hovered ? cert.color + '40' : undefined,
                            }}
                        >
                            {/* Corner gradient */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                width: '80px',
                                height: '80px',
                                background: `radial-gradient(circle at top right, ${cert.color}20, transparent 70%)`,
                                pointerEvents: 'none',
                            }} />

                            {/* Icon */}
                            <div style={{
                                width: 52,
                                height: 52,
                                borderRadius: '14px',
                                background: cert.color + '18',
                                border: `1px solid ${cert.color}30`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '24px',
                                marginBottom: '16px',
                            }}>
                                {cert.icon}
                            </div>

                            <h3 style={{
                                fontFamily: 'var(--font-display)',
                                fontSize: '15px',
                                fontWeight: 700,
                                marginBottom: '8px',
                                lineHeight: 1.3,
                            }}>
                                {cert.title}
                            </h3>

                            <p style={{
                                fontSize: '13px',
                                color: 'var(--text-secondary)',
                                marginBottom: '16px',
                            }}>
                                {cert.issuer}
                            </p>

                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <span style={{
                                    fontSize: '12px',
                                    color: cert.color,
                                    background: cert.color + '15',
                                    padding: '3px 10px',
                                    borderRadius: '100px',
                                    border: `1px solid ${cert.color}25`,
                                }}>
                                    {cert.year}
                                </span>

                                <span style={{
                                    fontSize: '11px',
                                    color: 'var(--text-muted)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '4px',
                                }}>
                                    ✓ Verified
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}