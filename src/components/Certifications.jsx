import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const certifications = [
    {
        title: 'Cyber Security Internship',
        issuer: 'Tech Security Group',
        year: '2025',
        icon: '🛡️',
        color: '#ef4444',
        category: 'Security',
        featured: true,
        level: 'Professional',
    },
    {
        title: 'Jr Penetration Tester',
        issuer: 'TryHackMe',
        year: '2024',
        icon: '🔓',
        color: '#f97316',
        category: 'Security',
        featured: true,
        level: 'Intermediate',
    },
    {
        title: 'Ethical Hacking Essentials',
        issuer: 'EC-Council',
        year: '2024',
        icon: '🎯',
        color: '#ef4444',
        category: 'Security',
        featured: false,
        level: 'Intermediate',
    },
    {
        title: 'Network Security Fundamentals',
        issuer: 'Cisco / Coursera',
        year: '2024',
        icon: '🌐',
        color: '#f97316',
        category: 'Security',
        featured: false,
        level: 'Beginner',
    },
    {
        title: 'React.js Development',
        issuer: 'Udemy',
        year: '2023',
        icon: '⚛️',
        color: '#06b6d4',
        category: 'Frontend',
        featured: true,
        level: 'Advanced',
    },
    {
        title: 'MERN Stack Development',
        issuer: 'Udemy',
        year: '2024',
        icon: '🧱',
        color: '#3b82f6',
        category: 'Full Stack',
        featured: true,
        level: 'Advanced',
    },
    {
        title: 'Node.js Development',
        issuer: 'Udemy',
        year: '2023',
        icon: '🟢',
        color: '#10b981',
        category: 'Backend',
        featured: false,
        level: 'Intermediate',
    },
    {
        title: 'MongoDB Essentials',
        issuer: 'MongoDB University',
        year: '2023',
        icon: '🍃',
        color: '#10b981',
        category: 'Backend',
        featured: false,
        level: 'Intermediate',
    },
    {
        title: 'Python Programming',
        issuer: 'IBM / Coursera',
        year: '2023',
        icon: '🐍',
        color: '#8b5cf6',
        category: 'AI / ML',
        featured: false,
        level: 'Intermediate',
    },
    {
        title: 'Machine Learning Fundamentals',
        issuer: 'Stanford / Coursera',
        year: '2024',
        icon: '🤖',
        color: '#8b5cf6',
        category: 'AI / ML',
        featured: true,
        level: 'Intermediate',
    },
    {
        title: 'AI Fundamentals',
        issuer: 'IBM / Coursera',
        year: '2024',
        icon: '🧠',
        color: '#a855f7',
        category: 'AI / ML',
        featured: false,
        level: 'Beginner',
    },
    {
        title: 'Computer Vision Fundamentals',
        issuer: 'DeepLearning.AI',
        year: '2024',
        icon: '👁️',
        color: '#a855f7',
        category: 'AI / ML',
        featured: false,
        level: 'Intermediate',
    },
    {
        title: 'TensorFlow Basics',
        issuer: 'Google / Coursera',
        year: '2024',
        icon: '🔶',
        color: '#f59e0b',
        category: 'AI / ML',
        featured: false,
        level: 'Beginner',
    },
    {
        title: 'Git & GitHub',
        issuer: 'GitHub Learning Lab',
        year: '2023',
        icon: '🐙',
        color: '#64748b',
        category: 'Tools',
        featured: false,
        level: 'Intermediate',
    },
    {
        title: 'React Native Development',
        issuer: 'Udemy',
        year: '2025',
        icon: '📱',
        color: '#06b6d4',
        category: 'Frontend',
        featured: false,
        level: 'Intermediate',
    },
]

const categories = ['All', 'Security', 'Full Stack', 'Frontend', 'Backend', 'AI / ML', 'Tools']

const levelColors = {
    Beginner: { bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.25)', text: '#10b981' },
    Intermediate: { bg: 'rgba(59,130,246,0.1)', border: 'rgba(59,130,246,0.25)', text: '#3b82f6' },
    Advanced: { bg: 'rgba(139,92,246,0.1)', border: 'rgba(139,92,246,0.25)', text: '#8b5cf6' },
    Professional: { bg: 'rgba(239,68,68,0.1)', border: 'rgba(239,68,68,0.25)', text: '#ef4444' },
}

const categoryStats = [
    { label: 'Total Certs', value: certifications.length, icon: '🏆' },
    { label: 'Security', value: certifications.filter(c => c.category === 'Security').length, icon: '🔐' },
    { label: 'AI / ML', value: certifications.filter(c => c.category === 'AI / ML').length, icon: '🤖' },
    { label: 'Dev', value: certifications.filter(c => ['Frontend', 'Backend', 'Full Stack'].includes(c.category)).length, icon: '💻' },
]

function CertCard({ cert, i, inView }) {
    const [hovered, setHovered] = useState(false)
    const lvl = levelColors[cert.level]

    return (
        <motion.div
            key={i}
            initial={{ opacity: 0, y: 32, scale: 0.94 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.55, delay: i * 0.055, ease: [0.22, 1, 0.36, 1] }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            whileHover={{ y: -7, scale: 1.02 }}
            style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                background: hovered ? 'rgba(255,255,255,0.055)' : 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(20px)',
                border: `1px solid ${hovered ? cert.color + '45' : 'rgba(255,255,255,0.07)'}`,
                transition: 'background 0.3s ease, border-color 0.3s ease',
                cursor: 'default',
            }}
        >
            {/* Featured ribbon */}
            {cert.featured && (
                <div style={{
                    position: 'absolute',
                    top: 14, right: -22,
                    background: `linear-gradient(135deg, ${cert.color}, ${cert.color}cc)`,
                    color: 'white',
                    fontSize: '9px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    padding: '4px 28px',
                    transform: 'rotate(35deg)',
                    zIndex: 2,
                    boxShadow: `0 0 14px ${cert.color}60`,
                }}>
                    KEY
                </div>
            )}

            {/* Top color bar */}
            <div style={{
                height: '3px',
                background: `linear-gradient(90deg, ${cert.color}, ${cert.color}55)`,
                boxShadow: `0 0 12px ${cert.color}70`,
            }} />

            {/* Corner glow */}
            <motion.div
                animate={{ opacity: hovered ? 1 : 0.4 }}
                transition={{ duration: 0.3 }}
                style={{
                    position: 'absolute', top: 0, right: 0,
                    width: 100, height: 100,
                    background: `radial-gradient(circle at top right, ${cert.color}22, transparent 70%)`,
                    pointerEvents: 'none',
                }}
            />

            <div style={{ padding: '22px' }}>
                {/* Icon + level row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                    <div style={{
                        width: 48, height: 48, borderRadius: '13px',
                        background: cert.color + '18',
                        border: `1px solid ${cert.color}30`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '22px',
                        boxShadow: `0 0 18px ${cert.color}20`,
                    }}>
                        {cert.icon}
                    </div>

                    <span style={{
                        fontSize: '10px', fontWeight: 600,
                        padding: '3px 9px', borderRadius: '100px',
                        background: lvl.bg, border: `1px solid ${lvl.border}`,
                        color: lvl.text, letterSpacing: '0.04em',
                    }}>
                        {cert.level}
                    </span>
                </div>

                {/* Title */}
                <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '14px', fontWeight: 700,
                    marginBottom: '5px', lineHeight: 1.35,
                    color: 'var(--text-primary)',
                }}>
                    {cert.title}
                </h3>

                {/* Issuer */}
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '16px' }}>
                    {cert.issuer}
                </p>

                {/* Footer: year + verified */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{
                        fontSize: '11px', color: cert.color,
                        background: cert.color + '14',
                        padding: '3px 10px', borderRadius: '100px',
                        border: `1px solid ${cert.color}24`,
                        fontWeight: 600,
                    }}>
                        {cert.year}
                    </span>

                    <span style={{
                        fontSize: '10px', color: '#10b981',
                        display: 'flex', alignItems: 'center', gap: '4px',
                        background: 'rgba(16,185,129,0.08)',
                        padding: '3px 9px', borderRadius: '100px',
                        border: '1px solid rgba(16,185,129,0.2)',
                    }}>
                        ✓ Verified
                    </span>
                </div>
            </div>
        </motion.div>
    )
}

export default function Certifications() {
    const ref = useRef()
    const inView = useInView(ref, { once: true, margin: '-80px' })
    const [activeCategory, setActiveCategory] = useState('All')

    const filtered = activeCategory === 'All'
        ? certifications
        : certifications.filter(c => c.category === activeCategory)

    const featured = certifications.filter(c => c.featured)

    return (
        <section id="certifications" className="section" ref={ref} style={{ position: 'relative', zIndex: 1, overflow: 'hidden' }}>

            {/* Ambient glows */}
            <div className="ambient-glow" style={{ width: 450, height: 450, background: '#8b5cf6', right: '-5%', top: '10%' }} />
            <div className="ambient-glow" style={{ width: 300, height: 300, background: '#3b82f6', left: '-5%', bottom: '10%' }} />

            <div className="container">

                {/* ── Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    style={{ marginBottom: '56px' }}
                >
                    <p className="section-tag">Credentials</p>
                    <h2 className="section-title">
                        Certifications &<br />
                        <span className="gradient-text">achievements</span>
                    </h2>
                    <p className="section-subtitle">
                        Continuously upskilling across cybersecurity, AI, and full-stack development.
                    </p>
                </motion.div>

                {/* ── Stats bar ── */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '12px',
                        marginBottom: '40px',
                    }}
                    className="cert-stats-grid"
                >
                    {categoryStats.map((s, i) => (
                        <motion.div
                            key={s.label}
                            whileHover={{ y: -3, scale: 1.02 }}
                            className="glass"
                            style={{
                                padding: '18px 20px',
                                borderRadius: '14px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '14px',
                                cursor: 'default',
                            }}
                        >
                            <span style={{ fontSize: '24px' }}>{s.icon}</span>
                            <div>
                                <div style={{
                                    fontFamily: 'var(--font-display)',
                                    fontSize: '24px', fontWeight: 800,
                                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                                    lineHeight: 1,
                                }}>
                                    {s.value}
                                </div>
                                <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '3px' }}>
                                    {s.label}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* ── Featured certs highlight row ── */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    style={{ marginBottom: '40px' }}
                >
                    <p style={{
                        fontSize: '11px', color: 'var(--text-muted)',
                        letterSpacing: '0.15em', textTransform: 'uppercase',
                        marginBottom: '16px',
                    }}>
                        ⭐ Key Certifications
                    </p>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                        {featured.map((cert) => (
                            <motion.div
                                key={cert.title}
                                whileHover={{ scale: 1.05, y: -3 }}
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '8px',
                                    padding: '8px 16px',
                                    background: cert.color + '12',
                                    border: `1px solid ${cert.color}30`,
                                    borderRadius: '100px',
                                    fontSize: '12px', fontWeight: 600,
                                    color: cert.color,
                                    cursor: 'default',
                                    boxShadow: `0 0 16px ${cert.color}15`,
                                    backdropFilter: 'blur(10px)',
                                }}
                            >
                                <span>{cert.icon}</span>
                                {cert.title}
                                <span style={{
                                    fontSize: '10px',
                                    background: cert.color + '22',
                                    padding: '1px 7px',
                                    borderRadius: '100px',
                                    border: `1px solid ${cert.color}30`,
                                }}>
                                    {cert.year}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* ── Category filter ── */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}
                >
                    {categories.map((cat) => (
                        <motion.button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            style={{
                                padding: '7px 16px',
                                borderRadius: '100px',
                                border: '1px solid',
                                borderColor: activeCategory === cat ? 'transparent' : 'rgba(255,255,255,0.08)',
                                background: activeCategory === cat
                                    ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)'
                                    : 'rgba(255,255,255,0.03)',
                                color: activeCategory === cat ? 'white' : 'var(--text-secondary)',
                                fontSize: '12px', fontWeight: 500,
                                fontFamily: 'var(--font-body)',
                                cursor: 'none',
                                transition: 'all 0.25s ease',
                                backdropFilter: 'blur(10px)',
                            }}
                        >
                            {cat}
                            <span style={{
                                marginLeft: '6px',
                                fontSize: '10px',
                                opacity: 0.7,
                            }}>
                                {cat === 'All' ? certifications.length : certifications.filter(c => c.category === cat).length}
                            </span>
                        </motion.button>
                    ))}
                </motion.div>

                {/* ── Cert cards grid ── */}
                <motion.div
                    layout
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                        gap: '14px',
                    }}
                >
                    <AnimatePresence mode="popLayout">
                        {filtered.map((cert, i) => (
                            <motion.div
                                key={cert.title}
                                layout
                                initial={{ opacity: 0, scale: 0.92 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.88 }}
                                transition={{ duration: 0.3 }}
                            >
                                <CertCard cert={cert} i={i} inView={inView} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* ── Bottom progress summary ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="glass"
                    style={{
                        marginTop: '48px',
                        padding: '28px 32px',
                        borderRadius: '20px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '20px',
                    }}
                >
                    <div>
                        <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 700, marginBottom: '4px' }}>
                            Always Learning
                        </h4>
                        <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                            Actively pursuing more certifications in AI, Cloud, and Advanced Security.
                        </p>
                    </div>

                    {/* Domain progress bars */}
                    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                        {[
                            { label: 'Security', pct: 80, color: '#ef4444' },
                            { label: 'AI / ML', pct: 65, color: '#8b5cf6' },
                            { label: 'Full Stack', pct: 90, color: '#3b82f6' },
                        ].map((bar) => (
                            <div key={bar.label} style={{ minWidth: '100px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginBottom: '6px' }}>
                                    <span style={{ color: 'var(--text-secondary)' }}>{bar.label}</span>
                                    <span style={{ color: bar.color, fontWeight: 600 }}>{bar.pct}%</span>
                                </div>
                                <div style={{
                                    height: '4px', background: 'rgba(255,255,255,0.06)',
                                    borderRadius: '2px', overflow: 'hidden',
                                }}>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={inView ? { width: `${bar.pct}%` } : {}}
                                        transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                        style={{
                                            height: '100%',
                                            background: `linear-gradient(90deg, ${bar.color}, ${bar.color}99)`,
                                            borderRadius: '2px',
                                            boxShadow: `0 0 8px ${bar.color}60`,
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>

            <style>{`
                @media (max-width: 768px) {
                    .cert-stats-grid { grid-template-columns: 1fr 1fr !important; }
                }
                @media (max-width: 480px) {
                    .cert-stats-grid { grid-template-columns: 1fr 1fr !important; }
                }
            `}</style>
        </section>
    )
}