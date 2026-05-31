import { motion } from 'framer-motion'

export default function Loader({ onComplete }) {
    return (
        <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            onAnimationComplete={onComplete}
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 9999,
                background: 'var(--bg-primary)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '32px',
            }}
        >
            {/* Logo mark */}
            <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{
                    width: 72,
                    height: 72,
                    borderRadius: '20px',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '28px',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    color: 'white',
                    boxShadow: '0 0 60px rgba(59,130,246,0.5)',
                }}
            >
                A
            </motion.div>

            {/* Progress bar */}
            <div
                style={{
                    width: '200px',
                    height: '2px',
                    background: 'rgba(255,255,255,0.06)',
                    borderRadius: '2px',
                    overflow: 'hidden',
                }}
            >
                <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                    style={{
                        height: '100%',
                        background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                        borderRadius: '2px',
                        boxShadow: '0 0 8px rgba(139,92,246,0.6)',
                    }}
                />
            </div>

            <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '12px',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                }}
            >
                Initializing portfolio...
            </motion.p>
        </motion.div>
    )
}