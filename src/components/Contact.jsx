import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser'
import WarpTunnel from './WarpTunnel'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const contactInfo = [
    {
        icon: '📱',
        label: 'Phone',
        value: '+91 90222 51303',
        href: 'tel:+919022251303',
        color: '#10b981',
    },
    {
        icon: '✉️',
        label: 'Email',
        value: 'amangupta032005@gmail.com',
        href: 'mailto:amangupta032005@gmail.com',
        color: '#3b82f6',
    },
    {
        icon: '🐙',
        label: 'GitHub',
        value: 'github.com/AmanGupta52',
        href: 'https://github.com/AmanGupta52',
        color: '#8b5cf6',
    },
    {
        icon: '💼',
        label: 'LinkedIn',
        value: 'linkedin.com/in/aman-gupta-pro',
        href: 'https://www.linkedin.com/in/aman-gupta-pro',
        color: '#06b6d4',
    },
    {
        icon: '📍',
        label: 'Location',
        value: 'Mumbai, India',
        href: null,
        color: '#f59e0b',
    },
]

const quickReplies = [
    "I have a freelance project for you 🚀",
    "Let's collaborate on something! 🤝",
    "I'd like to discuss an internship 💼",
    "Just want to connect 👋",
]

export default function Contact() {
    const ref = useRef()
    const formRef = useRef()
    const inView = useInView(ref, { once: true, margin: '-80px' })

    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
    const [status, setStatus] = useState('idle')
    const [focused, setFocused] = useState(null)

    const setQuickReply = (text) => setForm((f) => ({ ...f, message: text }))

    const onSubmit = async (e) => {
        e.preventDefault()
        setStatus('sending')
        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                EMAILJS_PUBLIC_KEY
            )
            setStatus('sent')
            setForm({ name: '', email: '', subject: '', message: '' })
            setTimeout(() => setStatus('idle'), 5000)
        } catch (err) {
            console.error('EmailJS error:', err)
            setStatus('error')
            setTimeout(() => setStatus('idle'), 4000)
        }
    }

    const inputStyle = (field) => ({
        width: '100%',
        padding: '13px 16px',
        background: focused === field ? 'rgba(59,130,246,0.06)' : 'rgba(255,255,255,0.03)',
        border: `1px solid ${focused === field ? 'rgba(59,130,246,0.45)' : 'rgba(255,255,255,0.08)'}`,
        borderRadius: '12px',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-body)',
        fontSize: '14px',
        outline: 'none',
        transition: 'all 0.25s ease',
        boxSizing: 'border-box',
        boxShadow: focused === field ? '0 0 0 3px rgba(59,130,246,0.08)' : 'none',
    })

    return (
        <section
            id="contact"
            className="section"
            ref={ref}
            style={{ position: 'relative', zIndex: 1, overflow: 'hidden' }}
        >
            <WarpTunnel />

            <div className="ambient-glow" style={{ width: 500, height: 500, background: '#3b82f6', left: '25%', top: '10%' }} />
            <div className="ambient-glow" style={{ width: 300, height: 300, background: '#8b5cf6', right: '-5%', bottom: '10%' }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>

                {/* ── Header ── */}
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
                        Whether it's a freelance project, internship, or just a conversation —<br />
                        I'm always open to new opportunities.
                    </p>
                </motion.div>

                <div
                    style={{ display: 'grid', gridTemplateColumns: '1fr 1.65fr', gap: '28px', alignItems: 'start' }}
                    className="contact-grid"
                >
                    {/* ── Left: contact info ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
                    >
                        {/* Availability badge */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="glass"
                            style={{
                                padding: '16px 20px',
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                marginBottom: '4px',
                                border: '1px solid rgba(16,185,129,0.2)',
                                background: 'rgba(16,185,129,0.04)',
                            }}
                        >
                            <span style={{
                                width: 10, height: 10, borderRadius: '50%',
                                background: '#10b981',
                                boxShadow: '0 0 10px #10b981',
                                display: 'inline-block',
                                animation: 'contactPulse 2s infinite',
                                flexShrink: 0,
                            }} />
                            <div>
                                <div style={{ fontSize: '13px', fontWeight: 600, color: '#10b981' }}>
                                    Available for Work
                                </div>
                                <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '1px' }}>
                                    Typically replies within 24 hours
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact items */}
                        {contactInfo.map((item) => (
                            <motion.a
                                key={item.label}
                                href={item.href || '#'}
                                target={
                                    item.href &&
                                        !item.href.startsWith('mailto') &&
                                        !item.href.startsWith('tel')
                                        ? '_blank'
                                        : undefined
                                }
                                rel="noopener noreferrer"
                                whileHover={{ x: 5, scale: 1.01 }}
                                className="glass"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '14px',
                                    padding: '15px 18px',
                                    borderRadius: '14px',
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    cursor: item.href ? 'pointer' : 'default',
                                }}
                            >
                                <span style={{
                                    width: 40, height: 40,
                                    borderRadius: '10px',
                                    background: item.color + '15',
                                    border: `1px solid ${item.color}25`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '17px',
                                    flexShrink: 0,
                                }}>
                                    {item.icon}
                                </span>
                                <div style={{ minWidth: 0 }}>
                                    <div style={{
                                        fontSize: '10px',
                                        color: 'var(--text-muted)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.1em',
                                        marginBottom: '2px',
                                    }}>
                                        {item.label}
                                    </div>
                                    <div style={{
                                        fontSize: '13px',
                                        color: 'var(--text-secondary)',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap',
                                    }}>
                                        {item.value}
                                    </div>
                                </div>
                                {item.href && (
                                    <span style={{
                                        marginLeft: 'auto',
                                        fontSize: '14px',
                                        color: item.color,
                                        opacity: 0.7,
                                        flexShrink: 0,
                                    }}>
                                        ↗
                                    </span>
                                )}
                            </motion.a>
                        ))}

                        {/* Quick reply chips */}
                        <div style={{ marginTop: '8px' }}>
                            <p style={{
                                fontSize: '10px',
                                color: 'var(--text-muted)',
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                                marginBottom: '10px',
                            }}>
                                Quick Message
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                {quickReplies.map((text) => (
                                    <motion.button
                                        key={text}
                                        onClick={() => setQuickReply(text)}
                                        whileHover={{ x: 4, scale: 1.01 }}
                                        whileTap={{ scale: 0.98 }}
                                        style={{
                                            background: 'rgba(255,255,255,0.02)',
                                            border: '1px solid rgba(255,255,255,0.07)',
                                            borderRadius: '10px',
                                            padding: '9px 14px',
                                            textAlign: 'left',
                                            fontFamily: 'var(--font-body)',
                                            fontSize: '12px',
                                            color: 'var(--text-secondary)',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s',
                                        }}
                                        onMouseEnter={e => {
                                            e.currentTarget.style.borderColor = 'rgba(59,130,246,0.3)'
                                            e.currentTarget.style.color = 'var(--text-primary)'
                                            e.currentTarget.style.background = 'rgba(59,130,246,0.05)'
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                                            e.currentTarget.style.color = 'var(--text-secondary)'
                                            e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                                        }}
                                    >
                                        {text}
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* ── Right: form card ── */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="glass"
                        style={{ padding: '36px', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}
                    >
                        {/* Top gradient bar */}
                        <div style={{
                            position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                            background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)',
                        }} />

                        {/* ── SENT state ── */}
                        {status === 'sent' && (
                            <motion.div
                                initial={{ scale: 0.85, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                style={{ textAlign: 'center', padding: '40px 0' }}
                            >
                                <motion.div
                                    animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
                                    transition={{ duration: 0.6 }}
                                    style={{ fontSize: '56px', marginBottom: '20px' }}
                                >
                                    🚀
                                </motion.div>
                                <h3 style={{
                                    fontFamily: 'var(--font-display)',
                                    fontSize: '22px', fontWeight: 700, marginBottom: '10px',
                                }}>
                                    Message Sent!
                                </h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6 }}>
                                    Thanks for reaching out!<br />
                                    I'll reply to{' '}
                                    <span style={{ color: 'var(--accent-blue)' }}>
                                        amangupta032005@gmail.com
                                    </span>{' '}
                                    within 24 hours.
                                </p>
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 5, ease: 'linear' }}
                                    style={{
                                        height: '2px',
                                        background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                                        borderRadius: '2px',
                                        marginTop: '28px',
                                    }}
                                />
                            </motion.div>
                        )}

                        {/* ── ERROR state ── */}
                        {status === 'error' && (
                            <motion.div
                                initial={{ scale: 0.85, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                style={{ textAlign: 'center', padding: '32px 0' }}
                            >
                                <div style={{ fontSize: '48px', marginBottom: '16px' }}>⚠️</div>
                                <h3 style={{
                                    fontFamily: 'var(--font-display)',
                                    fontSize: '18px', fontWeight: 700, marginBottom: '8px',
                                }}>
                                    Something went wrong
                                </h3>
                                <p style={{
                                    color: 'var(--text-secondary)',
                                    fontSize: '13px', marginBottom: '16px',
                                }}>
                                    Please email me directly at
                                </p>

                                href="mailto:amangupta032005@gmail.com"
                                style={{
                                    color: 'var(--accent-blue)',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    textDecoration: 'none',
                                }}

                                amangupta032005@gmail.com

                            </motion.div>
                        )}

                        {/* ── FORM (idle + sending) ── */}
                        {(status === 'idle' || status === 'sending') && (
                            <form
                                ref={formRef}
                                onSubmit={onSubmit}
                                style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}
                            >
                                <div style={{ marginBottom: '4px' }}>
                                    <h3 style={{
                                        fontFamily: 'var(--font-display)',
                                        fontSize: '18px', fontWeight: 700, marginBottom: '4px',
                                    }}>
                                        Send a Message
                                    </h3>
                                    <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                                        Fill out the form and I'll respond promptly.
                                    </p>
                                </div>

                                {/* Name + Email row */}
                                <div
                                    style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}
                                    className="form-row"
                                >
                                    <div>
                                        <label style={{
                                            fontSize: '11px', color: 'var(--text-muted)',
                                            marginBottom: '7px', display: 'block',
                                            letterSpacing: '0.08em', textTransform: 'uppercase',
                                        }}>
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="from_name"
                                            value={form.name}
                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            onFocus={() => setFocused('name')}
                                            onBlur={() => setFocused(null)}
                                            placeholder="Your name"
                                            required
                                            style={inputStyle('name')}
                                        />
                                    </div>
                                    <div>
                                        <label style={{
                                            fontSize: '11px', color: 'var(--text-muted)',
                                            marginBottom: '7px', display: 'block',
                                            letterSpacing: '0.08em', textTransform: 'uppercase',
                                        }}>
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="from_email"
                                            value={form.email}
                                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                                            onFocus={() => setFocused('email')}
                                            onBlur={() => setFocused(null)}
                                            placeholder="your@email.com"
                                            required
                                            style={inputStyle('email')}
                                        />
                                    </div>
                                </div>

                                {/* Subject */}
                                <div>
                                    <label style={{
                                        fontSize: '11px', color: 'var(--text-muted)',
                                        marginBottom: '7px', display: 'block',
                                        letterSpacing: '0.08em', textTransform: 'uppercase',
                                    }}>
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={form.subject}
                                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                                        onFocus={() => setFocused('subject')}
                                        onBlur={() => setFocused(null)}
                                        placeholder="What's this about?"
                                        style={inputStyle('subject')}
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label style={{
                                        fontSize: '11px', color: 'var(--text-muted)',
                                        marginBottom: '7px', display: 'block',
                                        letterSpacing: '0.08em', textTransform: 'uppercase',
                                    }}>
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                                        onFocus={() => setFocused('message')}
                                        onBlur={() => setFocused(null)}
                                        placeholder="Tell me about your project, opportunity, or just say hello..."
                                        required
                                        rows={5}
                                        style={{
                                            ...inputStyle('message'),
                                            resize: 'vertical',
                                            minHeight: '130px',
                                            lineHeight: 1.6,
                                        }}
                                    />
                                    <div style={{
                                        textAlign: 'right',
                                        fontSize: '11px',
                                        color: form.message.length > 400 ? '#ef4444' : 'var(--text-muted)',
                                        marginTop: '5px',
                                    }}>
                                        {form.message.length} / 500
                                    </div>
                                </div>

                                {/* Submit button */}
                                <motion.button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    whileHover={status !== 'sending' ? { scale: 1.02, y: -2 } : {}}
                                    whileTap={status !== 'sending' ? { scale: 0.98 } : {}}
                                    style={{
                                        padding: '15px',
                                        background: status === 'sending'
                                            ? 'rgba(59,130,246,0.4)'
                                            : 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '12px',
                                        fontFamily: 'var(--font-body)',
                                        fontSize: '15px',
                                        fontWeight: 600,
                                        cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                                        boxShadow: status === 'sending'
                                            ? 'none'
                                            : '0 8px 32px rgba(59,130,246,0.3)',
                                        letterSpacing: '0.01em',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '10px',
                                        transition: 'all 0.3s ease',
                                    }}
                                >
                                    {status === 'sending' ? (
                                        <>
                                            <motion.span
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                                style={{ display: 'inline-block', fontSize: '16px' }}
                                            >
                                                ⟳
                                            </motion.span>
                                            Sending...
                                        </>
                                    ) : (
                                        'Send Message →'
                                    )}
                                </motion.button>

                                {/* Privacy note */}
                                <p style={{
                                    fontSize: '11px',
                                    color: 'var(--text-muted)',
                                    textAlign: 'center',
                                    marginTop: '-4px',
                                }}>
                                    🔒 Your information is kept private and never shared.
                                </p>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>

            <style>{`
                @keyframes contactPulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(1.4); }
                }
                @media (max-width: 768px) {
                    .contact-grid { grid-template-columns: 1fr !important; }
                    .form-row { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </section >
    )
}