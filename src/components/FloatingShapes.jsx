import { motion } from 'framer-motion'

const shapes = [
    { type: 'ring', size: 120, x: '8%', y: '20%', delay: 0, duration: 8 },
    { type: 'dot-grid', size: 80, x: '88%', y: '15%', delay: 1, duration: 10 },
    { type: 'ring', size: 60, x: '92%', y: '65%', delay: 2, duration: 7 },
    { type: 'cross', size: 40, x: '5%', y: '72%', delay: 0.5, duration: 9 },
    { type: 'square', size: 50, x: '50%', y: '88%', delay: 1.5, duration: 11 },
]

function Shape({ type, size, x, y, delay, duration }) {
    const floatVariant = {
        animate: {
            y: [0, -18, 0],
            rotate: [0, 8, 0],
            transition: {
                duration,
                delay,
                repeat: Infinity,
                ease: 'easeInOut',
            },
        },
    }

    const base = {
        position: 'absolute',
        left: x,
        top: y,
        opacity: 0.12,
        pointerEvents: 'none',
    }

    if (type === 'ring') {
        return (
            <motion.div variants={floatVariant} animate="animate" style={base}>
                <svg width={size} height={size} viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="url(#ringGrad)" strokeWidth="1.5" />
                    <defs>
                        <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                    </defs>
                </svg>
            </motion.div>
        )
    }

    if (type === 'dot-grid') {
        const dots = []
        for (let r = 0; r < 4; r++) {
            for (let c = 0; c < 4; c++) {
                dots.push(
                    <circle key={`${r}-${c}`} cx={c * 12 + 6} cy={r * 12 + 6} r="1.5" fill="#8b5cf6" />
                )
            }
        }
        return (
            <motion.div variants={floatVariant} animate="animate" style={base}>
                <svg width="50" height="50" viewBox="0 0 50 50">{dots}</svg>
            </motion.div>
        )
    }

    if (type === 'cross') {
        return (
            <motion.div variants={floatVariant} animate="animate" style={base}>
                <svg width={size} height={size} viewBox="0 0 40 40">
                    <line x1="20" y1="0" x2="20" y2="40" stroke="#06b6d4" strokeWidth="1" />
                    <line x1="0" y1="20" x2="40" y2="20" stroke="#06b6d4" strokeWidth="1" />
                </svg>
            </motion.div>
        )
    }

    if (type === 'square') {
        return (
            <motion.div variants={floatVariant} animate="animate" style={base}>
                <svg width={size} height={size} viewBox="0 0 50 50">
                    <rect x="5" y="5" width="40" height="40" fill="none" stroke="#3b82f6" strokeWidth="1" rx="4"
                        strokeDasharray="4 4" />
                </svg>
            </motion.div>
        )
    }
}

export default function FloatingShapes() {
    return (
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 1 }}>
            {shapes.map((s, i) => (
                <Shape key={i} {...s} />
            ))}
        </div>
    )
}