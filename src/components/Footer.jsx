import { motion } from 'framer-motion'
import { personalInfo } from '../data/portfolioData'

const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Certifications', 'Contact']

export default function Footer() {
    const scrollTo = (id) => {
        document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <footer style={{
            position: 'relative',
            zIndex: 1,
            borderTop: '1px solid var(--border)',
            padding: '56px 24px 32px',
            background: 'rgba(2,4,8,0.7)',
            backdropFilter: 'blur(10px)',
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto 1fr',
                    gap: '48px',
                    alignItems: 'start',
                    marginBottom: '48px',
                }}
                    className="footer-grid"
                >
                    {/* Brand */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                            <div style={{
                                width: 36, height: 36,
                                borderRadius: '10px',
                                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontFamily: 'var(--font-display)',
                                fontSize: '16px',
                                fontWeight: 800,
                                color: 'white',
                                boxShadow: '0 0 20px rgba(59,130,246,0.3)',
                            }}>
                                A
                            </div>
                            <span style={{
                                fontFamily: 'var(--font-display)',
                                fontSize: '16px',
                                fontWeight: 700,
                                color: 'var(--text-primary)',
                            }}>
                                Aman
                            </span>
                        </div>
                        <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '260px' }}>
                            Full Stack Developer & Cybersecurity Enthusiast. Building secure, scalable digital experiences.
                        </p>
                    </div>

                    {/* Nav links */}
                    <div>
                        <p style={{
                            fontSize: '11px',
                            color: 'var(--text-muted)',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            marginBottom: '16px',
                        }}>
                            Navigation
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {navLinks.map((link) => (
                                <button
                                    key={link}
                                    onClick={() => scrollTo(link)}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'none',
                                        textAlign: 'left',
                                        padding: 0,
                                        fontSize: '14px',
                                        color: 'var(--text-secondary)',
                                        fontFamily: 'var(--font-body)',
                                        transition: 'color 0.2s',
                                    }}
                                    onMouseEnter={e => e.target.style.color = 'var(--accent-blue)'}
                                    onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
                                >
                                    {link}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Social */}
                    <div style={{ textAlign: 'right' }}>
                        <p style={{
                            fontSize: '11px',
                            color: 'var(--text-muted)',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            marginBottom: '16px',
                        }}>
                            Connect
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
                            {[
                                { label: 'GitHub', href: personalInfo.github },
                                { label: 'LinkedIn', href: personalInfo.linkedin },
                                { label: 'Email', href: `mailto:${personalInfo.email}` },
                            ].map((item) => (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ x: -4 }}
                                    style={{
                                        fontSize: '14px',
                                        color: 'var(--text-secondary)',
                                        textDecoration: 'none',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                        transition: 'color 0.2s',
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-blue)'}
                                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                                >
                                    {item.label} ↗
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                {/* Bottom bar */}
                <div style={{
                    paddingTop: '24px',
                    borderTop: '1px solid var(--border)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '12px',
                }}>
                    <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                        © 2026 Aman. Crafted with React, Three.js & Framer Motion.
                    </p>

                    {/* Resume download in footer */}
                    <motion.a
                        href="/resume.pdf"
                        download="Aman_Gupta_Resume.pdf"
                        whileHover={{ scale: 1.04, y: -1 }}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '7px 14px',
                            background: 'rgba(59,130,246,0.08)',
                            border: '1px solid rgba(59,130,246,0.2)',
                            borderRadius: '8px',
                            fontSize: '12px',
                            fontWeight: 500,
                            color: 'var(--accent-blue)',
                            textDecoration: 'none',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                        }}
                    >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        Download Resume
                    </motion.a>

                    <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                        Mumbai, India 🇮🇳
                    </p>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
          .footer-grid > div:last-child {
            text-align: left !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
        </footer>
    )
}