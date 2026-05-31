import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['About', 'Skills', 'Projects', 'Experience', 'Certifications', 'Contact']

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [active, setActive] = useState('')
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const scrollTo = (id) => {
        const el = document.getElementById(id.toLowerCase())
        if (el) el.scrollIntoView({ behavior: 'smooth' })
        setActive(id)
        setMobileOpen(false)
    }

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                padding: '0 24px',
                height: '72px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: scrolled
                    ? 'rgba(2, 4, 8, 0.85)'
                    : 'transparent',
                backdropFilter: scrolled ? 'blur(20px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
                transition: 'all 0.4s ease',
                maxWidth: '100%',
            }}
        >
            {/* Logo */}
            <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    background: 'none',
                    border: 'none',
                    cursor: 'none',
                    padding: 0,
                }}
            >
                <div style={{
                    width: 36,
                    height: 36,
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-display)',
                    fontSize: '16px',
                    fontWeight: 800,
                    color: 'white',
                    boxShadow: '0 0 20px rgba(59,130,246,0.4)',
                }}>
                    A
                </div>
                <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '16px',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.01em',
                }}>
                    Aman
                </span>
            </motion.button>

            {/* Desktop links */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
            }}
                className="nav-desktop"
            >
                {links.map((link) => (
                    <motion.button
                        key={link}
                        onClick={() => scrollTo(link)}
                        whileHover={{ y: -1 }}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'none',
                            padding: '8px 14px',
                            fontFamily: 'var(--font-body)',
                            fontSize: '14px',
                            fontWeight: 500,
                            color: active === link ? 'var(--accent-blue)' : 'var(--text-secondary)',
                            transition: 'color 0.2s ease',
                            position: 'relative',
                        }}
                    >
                        {link}
                        {active === link && (
                            <motion.span
                                layoutId="navIndicator"
                                style={{
                                    position: 'absolute',
                                    bottom: 2,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: 4,
                                    height: 4,
                                    borderRadius: '50%',
                                    background: 'var(--accent-blue)',
                                }}
                            />
                        )}
                    </motion.button>
                ))}

                <motion.a
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); scrollTo('Contact') }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    style={{
                        marginLeft: '8px',
                        padding: '9px 20px',
                        background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                        color: 'white',
                        borderRadius: '10px',
                        fontFamily: 'var(--font-body)',
                        fontSize: '13px',
                        fontWeight: 600,
                        textDecoration: 'none',
                        boxShadow: '0 0 20px rgba(59,130,246,0.3)',
                    }}
                >
                    Hire Me
                </motion.a>
            </div>

            {/* Mobile hamburger */}
            <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="nav-mobile-btn"
                style={{
                    display: 'none',
                    background: 'none',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    padding: '8px',
                    cursor: 'pointer',
                    flexDirection: 'column',
                    gap: '4px',
                    color: 'var(--text-primary)',
                }}
            >
                <span style={{ width: 20, height: 1.5, background: 'currentColor', display: 'block', transition: 'all 0.3s' }} />
                <span style={{ width: 14, height: 1.5, background: 'currentColor', display: 'block', transition: 'all 0.3s' }} />
                <span style={{ width: 20, height: 1.5, background: 'currentColor', display: 'block', transition: 'all 0.3s' }} />
            </button>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{
                            position: 'absolute',
                            top: '72px',
                            left: 0,
                            right: 0,
                            background: 'rgba(5, 11, 18, 0.98)',
                            backdropFilter: 'blur(20px)',
                            borderBottom: '1px solid var(--border)',
                            padding: '16px 24px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '4px',
                        }}
                    >
                        {links.map((link) => (
                            <button
                                key={link}
                                onClick={() => scrollTo(link)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    padding: '12px 0',
                                    textAlign: 'left',
                                    fontFamily: 'var(--font-body)',
                                    fontSize: '16px',
                                    color: 'var(--text-secondary)',
                                    borderBottom: '1px solid var(--border)',
                                }}
                            >
                                {link}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
        </motion.nav>
    )
}