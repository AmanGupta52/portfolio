import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { personalInfo } from '../data/portfolioData'
import MorphBlob from './MorphBlob'

const traits = [
    { icon: '🔐', title: 'Security Minded', desc: 'Every project built with security-first principles and ethical hacking awareness.' },
    { icon: '⚡', title: 'Performance Focused', desc: 'Clean, optimized code that scales — from MVP to production-grade systems.' },
    { icon: '🎨', title: 'Design Driven', desc: 'UX/UI that merges function with beauty. Interfaces people love to use.' },
    { icon: '🧠', title: 'Continuous Learner', desc: 'Always exploring the frontier: AI, CV, cybersecurity, new frameworks.' },
]

const stats = [
    { number: '15+', label: 'Projects Built' },
    { number: '3+', label: 'Years Learning' },
    { number: '5+', label: 'Technologies' },
    { number: '100%', label: 'Passion Driven' },
]

const timeline = [
    { year: '2023', title: 'Started B.Sc. IT', desc: 'Enrolled at Sathaye College, Mumbai. Began MERN stack fundamentals.' },
    { year: '2024', title: 'Built MERN Stack Projects', desc: 'Shipped WhatsApp Clone, Gesture VFX system, and hand recognition tools.' },
    { year: '2025', title: 'Cybersecurity Internship', desc: 'Hands-on pentesting, vulnerability assessments and security tooling with Kali Linux.' },
    { year: '2026', title: 'Graduated & Building AI Apps', desc: 'Completed B.Sc. IT. Now building production AI and full-stack applications.' },
]

const techStack = [
    'React', 'Node.js', 'Express', 'MongoDB', 'Python',
    'JavaScript', 'Cybersecurity', 'Kali Linux', 'Machine Learning',
    'Git', 'Tailwind CSS', 'Bootstrap', 'REST APIs', 'Firebase',
]

const services = [
    { icon: '🌐', label: 'Web Applications' },
    { icon: '📱', label: 'Mobile Applications' },
    { icon: '🤖', label: 'AI Solutions' },
    { icon: '🔐', label: 'Cybersecurity Tools' },
    { icon: '💼', label: 'Portfolio Websites' },
    { icon: '📊', label: 'Business Dashboards' },
]

const values = [
    { icon: '🚀', title: 'Innovation' },
    { icon: '🎯', title: 'Problem Solving' },
    { icon: '🔒', title: 'Security' },
    { icon: '📚', title: 'Continuous Learning' },
]

const funFacts = [
    '💪 Bodybuilder & Developer',
    '⌨️ Left-Handed Programmer',
    '🔐 Cybersecurity Enthusiast',
    '🤖 AI Explorer',
    '📈 Stock Market Analytics Fan',
]

const certBadges = [
    { icon: '🏆', title: 'Cybersecurity Internship', color: '#ef4444' },
    { icon: '🏆', title: 'TryHackMe Labs', color: '#f59e0b' },
    { icon: '🏆', title: 'AI & Machine Learning', color: '#10b981' },
    { icon: '🏆', title: 'Web Development', color: '#3b82f6' },
]

export default function About() {
    const ref = useRef()
    const inView = useInView(ref, { once: true, margin: '-80px' })

    const fadeUp = (delay = 0) => ({
        initial: { opacity: 0, y: 30 },
        animate: inView ? { opacity: 1, y: 0 } : {},
        transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
    })

    return (
        <section id="about" className="section" ref={ref} style={{ position: 'relative', zIndex: 1, overflow: 'hidden' }}>

            {/* Ambient glows */}
            <div className="ambient-glow" style={{ width: 500, height: 500, background: '#8b5cf6', left: '60%', top: '10%' }} />
            <div className="ambient-glow" style={{ width: 300, height: 300, background: '#3b82f6', left: '-5%', top: '60%' }} />

            {/* MorphBlob — right side background accent */}
            <div style={{ position: 'absolute', right: '-8%', top: '5%', width: '48%', height: '60%', opacity: 0.55, pointerEvents: 'none', zIndex: 0 }}>
                <MorphBlob />
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>

                {/* ── Section header ── */}
                <motion.div {...fadeUp(0)} style={{ marginBottom: '72px' }}>
                    <p className="section-tag">About Me</p>
                    <h2 className="section-title">
                        Crafting code at the<br />
                        <span className="gradient-text">intersection of security</span><br />
                        and creativity
                    </h2>
                    <p className="section-subtitle">
                        Final-year B.Sc. IT graduate from Mumbai — building secure, scalable, and visually compelling digital experiences.
                    </p>
                </motion.div>

                {/* ── Top grid: profile card + bio ── */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '40px', alignItems: 'start', marginBottom: '64px' }} className="about-top-grid">

                    {/* Profile card */}
                    <motion.div {...fadeUp(0.1)} style={{ position: 'relative' }}>
                        <div style={{ position: 'relative', maxWidth: '420px' }}>
                            {/* Shadow card */}
                            <div style={{
                                position: 'absolute', inset: 0,
                                transform: 'rotate(3deg) translate(8px, 8px)',
                                background: 'rgba(139,92,246,0.1)',
                                border: '1px solid rgba(139,92,246,0.15)',
                                borderRadius: '24px',
                            }} />

                            <div className="glass" style={{ padding: '36px', borderRadius: '24px', position: 'relative' }}>
                                {/* Avatar */}
                                <div style={{
                                    width: '80px', height: '80px', borderRadius: '20px',
                                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '36px', marginBottom: '20px',
                                    boxShadow: '0 0 30px rgba(59,130,246,0.3)',
                                }}>
                                    👨‍💻
                                </div>

                                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 700, marginBottom: '4px' }}>
                                    {personalInfo.name}
                                </h3>
                                <p style={{ color: 'var(--accent-blue)', fontSize: '13px', fontWeight: 500, marginBottom: '4px' }}>
                                    Full Stack Developer · Cybersecurity Enthusiast
                                </p>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '13px', marginBottom: '20px' }}>
                                    B.Sc. Information Technology — Completed 2026<br />
                                    Sathaye College, Mumbai
                                </p>

                                {/* Tech tags — expanded */}
                                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '20px' }}>
                                    {techStack.map((tag) => (
                                        <motion.span
                                            key={tag}
                                            whileHover={{ scale: 1.08, y: -2 }}
                                            style={{
                                                padding: '3px 10px',
                                                background: 'rgba(59,130,246,0.08)',
                                                border: '1px solid rgba(59,130,246,0.18)',
                                                borderRadius: '100px',
                                                fontSize: '11px',
                                                color: 'var(--accent-blue)',
                                                cursor: 'default',
                                                transition: 'all 0.2s',
                                            }}
                                        >
                                            {tag}
                                        </motion.span>
                                    ))}
                                </div>

                                {/* Status */}
                                <div style={{
                                    paddingTop: '16px', borderTop: '1px solid var(--border)',
                                    display: 'flex', alignItems: 'center', gap: '8px',
                                    fontSize: '13px', color: 'var(--text-secondary)',
                                }}>
                                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981', display: 'inline-block' }} />
                                    {personalInfo.location} · Open to Work
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bio + stats + services */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                        <motion.div {...fadeUp(0.15)}>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.8, marginBottom: '16px' }}>
                                I'm a B.Sc. IT graduate from Mumbai with a passion for building secure, scalable, and visually compelling applications.
                                My journey spans full-stack development with the MERN stack, computer vision research using YOLOv8 and MediaPipe, and hands-on cybersecurity work with Kali Linux.
                            </p>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.8 }}>
                                I believe the best software is both beautiful and bulletproof — where thoughtful UX meets robust backend architecture and security-first thinking.
                            </p>
                        </motion.div>

                        {/* Stats grid */}
                        <motion.div {...fadeUp(0.2)} style={{
                            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px',
                        }}>
                            {stats.map((s, i) => (
                                <motion.div
                                    key={s.label}
                                    whileHover={{ y: -3, scale: 1.02 }}
                                    className="glass"
                                    style={{ padding: '18px 20px', borderRadius: '14px', cursor: 'default' }}
                                >
                                    <div style={{
                                        fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 800,
                                        background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                                        lineHeight: 1,
                                    }}>
                                        {s.number}
                                    </div>
                                    <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px', fontWeight: 500 }}>
                                        {s.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* What I build */}
                        <motion.div {...fadeUp(0.25)} className="glass" style={{ padding: '22px', borderRadius: '16px' }}>
                            <p style={{ fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '14px' }}>
                                What I Build
                            </p>
                            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                {services.map((s) => (
                                    <motion.span key={s.label} whileHover={{ scale: 1.05, y: -2 }} style={{
                                        display: 'flex', alignItems: 'center', gap: '6px',
                                        padding: '6px 12px',
                                        background: 'rgba(139,92,246,0.08)',
                                        border: '1px solid rgba(139,92,246,0.18)',
                                        borderRadius: '10px',
                                        fontSize: '12px', fontWeight: 500,
                                        color: 'var(--text-secondary)',
                                        cursor: 'default',
                                        transition: 'all 0.2s',
                                    }}>
                                        <span>{s.icon}</span> {s.label}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* ── Trait cards ── */}
                <motion.div {...fadeUp(0.25)} style={{ marginBottom: '64px' }}>
                    <p style={{ fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '20px' }}>
                        My Approach
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }} className="traits-grid">
                        {traits.map((t, i) => (
                            <motion.div
                                key={t.title}
                                initial={{ opacity: 0, y: 24 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="glass"
                                style={{ padding: '22px', borderRadius: '16px', cursor: 'default' }}
                            >
                                <span style={{ fontSize: '26px', marginBottom: '12px', display: 'block' }}>{t.icon}</span>
                                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: 700, marginBottom: '8px' }}>{t.title}</h4>
                                <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{t.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* ── Timeline ── */}
                <motion.div {...fadeUp(0.3)} style={{ marginBottom: '64px' }}>
                    <p style={{ fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '24px' }}>
                        My Journey
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0', position: 'relative' }} className="timeline-grid">
                        {/* Connector line */}
                        <div style={{
                            position: 'absolute', top: '22px', left: '12.5%', right: '12.5%', height: '1px',
                            background: 'linear-gradient(90deg, transparent, #3b82f6, #8b5cf6, #06b6d4, transparent)',
                            zIndex: 0,
                        }} />

                        {timeline.map((item, i) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.35 + i * 0.1 }}
                                style={{ textAlign: 'center', padding: '0 12px', position: 'relative', zIndex: 1 }}
                            >
                                {/* Dot */}
                                <div style={{
                                    width: 44, height: 44, borderRadius: '50%',
                                    background: `linear-gradient(135deg, #3b82f6, #8b5cf6)`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    margin: '0 auto 16px',
                                    boxShadow: `0 0 20px rgba(59,130,246,${0.3 + i * 0.1})`,
                                    fontFamily: 'var(--font-display)',
                                    fontSize: '11px', fontWeight: 800, color: 'white',
                                    letterSpacing: '0.02em',
                                }}>
                                    {item.year.slice(2)}
                                </div>
                                <div style={{ fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: 700, marginBottom: '6px', color: 'var(--text-primary)' }}>
                                    {item.title}
                                </div>
                                <div style={{ fontSize: '11px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                                    {item.desc}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* ── Currently Exploring + Values + Fun Facts ── */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '48px' }} className="bottom-cards-grid">

                    {/* Currently Exploring */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.45 }}
                        className="glass"
                        style={{ padding: '26px', borderRadius: '18px' }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
                            <span style={{
                                width: 8, height: 8, borderRadius: '50%', background: '#10b981',
                                boxShadow: '0 0 8px #10b981', display: 'inline-block',
                                animation: 'pulse 2s infinite',
                            }} />
                            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: 700 }}>
                                Currently Exploring
                            </h4>
                        </div>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {['AI & Machine Learning', 'Cybersecurity Research', 'Full-Stack Development', 'Cloud Technologies'].map((item) => (
                                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: 'var(--text-secondary)' }}>
                                    <span style={{
                                        width: 5, height: 5, borderRadius: '50%', flexShrink: 0,
                                        background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                                    }} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Personal Values */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.52 }}
                        className="glass"
                        style={{ padding: '26px', borderRadius: '18px' }}
                    >
                        <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: 700, marginBottom: '18px' }}>
                            Core Values
                        </h4>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                            {values.map((v) => (
                                <motion.div key={v.title} whileHover={{ scale: 1.05 }} style={{
                                    padding: '12px 10px',
                                    background: 'rgba(59,130,246,0.05)',
                                    border: '1px solid rgba(59,130,246,0.12)',
                                    borderRadius: '10px',
                                    textAlign: 'center',
                                    cursor: 'default',
                                }}>
                                    <div style={{ fontSize: '22px', marginBottom: '5px' }}>{v.icon}</div>
                                    <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-secondary)' }}>{v.title}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Fun Facts */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.59 }}
                        className="glass"
                        style={{ padding: '26px', borderRadius: '18px' }}
                    >
                        <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: 700, marginBottom: '18px' }}>
                            Fun Facts
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {funFacts.map((fact, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -12 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.6 + i * 0.07 }}
                                    whileHover={{ x: 4 }}
                                    style={{
                                        fontSize: '12px', color: 'var(--text-secondary)',
                                        padding: '8px 12px',
                                        background: 'rgba(255,255,255,0.025)',
                                        borderRadius: '8px',
                                        border: '1px solid var(--border)',
                                        cursor: 'default',
                                        transition: 'all 0.2s',
                                    }}
                                >
                                    {fact}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* ── Cert badges ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.65 }}
                    style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}
                >
                    {certBadges.map((c) => (
                        <motion.div key={c.title} whileHover={{ scale: 1.05, y: -3 }} style={{
                            display: 'flex', alignItems: 'center', gap: '8px',
                            padding: '8px 16px',
                            background: `${c.color}12`,
                            border: `1px solid ${c.color}28`,
                            borderRadius: '100px',
                            fontSize: '12px', fontWeight: 500,
                            color: c.color,
                            cursor: 'default',
                            boxShadow: `0 0 16px ${c.color}12`,
                        }}>
                            {c.icon} {c.title}
                        </motion.div>
                    ))}
                </motion.div>

            </div>

            <style>{`
                @keyframes pulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(1.3); }
                }
                @media (max-width: 1024px) {
                    .traits-grid { grid-template-columns: 1fr 1fr !important; }
                    .bottom-cards-grid { grid-template-columns: 1fr 1fr !important; }
                }
                @media (max-width: 900px) {
                    .about-top-grid { grid-template-columns: 1fr !important; }
                    .timeline-grid { grid-template-columns: 1fr 1fr !important; gap: 24px !important; }
                }
                @media (max-width: 600px) {
                    .traits-grid { grid-template-columns: 1fr !important; }
                    .timeline-grid { grid-template-columns: 1fr !important; }
                    .bottom-cards-grid { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </section>
    )
}