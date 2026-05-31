import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { personalInfo } from '../data/portfolioData'

export default function Contact() {
    const ref = useRef()
    const inView = useInView(ref, { once: true, margin: '-80px' })
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [sent, setSent] = useState(false)
    const [focused, setFocused] = useState(null)

    const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const onSubmit = (e) => {
        e.preventDefault()
        setSent(true)
        setTimeout(() => setSent(false), 3500)
        setForm({ name: '', email: '', message: '' })
    }

    const inputStyle = (field) => ({
        width: '100%',
        padding: '14px 16px',
        background: focused === field ? 'rgba(59,130,246,0.05)' : 'rgba(255,255,255,0.03)',
        border: `1px solid ${focused === field ? 'rgba(59,130,246,0.4)' : 'rgba(255,255,255,0.08)'}`,
        borderRadius: '12px',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-body)',
        fontSize: '15px',
        outline: 'none',
        transition: 'all 0.25s ease',
        boxSizing: 'border-box',
    })

    return (
        <section id="contact" className="section" ref={ref} style={{ position: 'relative', zIndex: 1 }}>
            <div className="ambient-glow" style={{ width: 500, height: 500, background: '#3b82f6', left: '30%', top: '20%' }} />

            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    style={{ textAlign: 'center', marginBottom: '64px' }}
                >
                    <p className="section-tag" style={{ justifyContent: 'center' }}>Get In Touch</p>
                    <h2 className="section-title" style={{ textAlign: 'center' }}>
                        Let's build something<br />
                        <span className="gradient-text">remarkable together</span>
                    </h2>
                    <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto' }}>
                        Whether it's a freelance project, internship, or just a conversation — I'm always open to new opportunities.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1.6fr',
                    gap: '32px',
                    alignItems: 'start',
                }}
                    className="contact-grid"
                >
                    {/* Left info cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
                    >
                        {[
                            { icon: '✉️', label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                            { icon: '🐙', label: 'GitHub', value: 'github.com/aman', href: personalInfo.github },
                            { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/aman', href: personalInfo.linkedin },
                            { icon: '📍', label: 'Location', value: personalInfo.location, href: null },
                        ].map((item) => (
                            <motion.a
                                key={item.label}
                                href={item.href || '#'}
                                target={item.href && !item.href.startsWith('mailto') ? '_blank' : undefined}
                                rel="noopener noreferrer"
                                whileHover={{ x: 4, scale: 1.01 }}
                                className="glass"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '16px',
                                    padding: '18px 20px',
                                    borderRadius: '16px',
                                    textDecoration: 'none',
                                    color: 'inherit',
                                }}
                            >
                                <span style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: '10px',
                                    background: 'rgba(59,130,246,0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '18px',
                                    flexShrink: 0,
                                }}>
                                    {item.icon}
                                </span>
                                <div>
                                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                                        {item.label}
                                    </div>
                                    <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                                        {item.value}
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="glass"
                        style={{ padding: '36px', borderRadius: '24px' }}
                    >
                        {sent ? (
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                style={{ textAlign: 'center', padding: '32px 0' }}
                            >
                                <div style={{ fontSize: '48px', marginBottom: '16px' }}>🚀</div>
                                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>
                                    Message sent!
                                </h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                                    I'll get back to you within 24 hours.
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                                    <div>
                                        <label style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '6px', display: 'block', letterSpacing: '0.05em' }}>
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={onChange}
                                            onFocus={() => setFocused('name')}
                                            onBlur={() => setFocused(null)}
                                            placeholder="Your name"
                                            required
                                            style={inputStyle('name')}
                                        />
                                    </div>
                                    <div>
                                        <label style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '6px', display: 'block', letterSpacing: '0.05em' }}>
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={onChange}
                                            onFocus={() => setFocused('email')}
                                            onBlur={() => setFocused(null)}
                                            placeholder="your@email.com"
                                            required
                                            style={inputStyle('email')}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '6px', display: 'block', letterSpacing: '0.05em' }}>
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={onChange}
                                        onFocus={() => setFocused('message')}
                                        onBlur={() => setFocused(null)}
                                        placeholder="Tell me about your project or opportunity..."
                                        required
                                        rows={5}
                                        style={{ ...inputStyle('message'), resize: 'vertical', minHeight: '120px' }}
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    style={{
                                        padding: '15px',
                                        background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '12px',
                                        fontFamily: 'var(--font-body)',
                                        fontSize: '15px',
                                        fontWeight: 600,
                                        cursor: 'none',
                                        boxShadow: '0 8px 32px rgba(59,130,246,0.3)',
                                        letterSpacing: '0.01em',
                                    }}
                                >
                                    Send Message →
                                </motion.button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    )
}