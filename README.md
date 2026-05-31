# ✦ Aman — Developer Portfolio

<div align="center">

![Portfolio Preview](https://img.shields.io/badge/Status-Live-10b981?style=for-the-badge&logoColor=white)
![React](https://img.shields.io/badge/React-18-3b82f6?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-8b5cf6?style=for-the-badge&logo=vite&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-R3F-06b6d4?style=for-the-badge&logo=threedotjs&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Latest-ef4444?style=for-the-badge&logo=framer&logoColor=white)

**A premium 3D developer portfolio built with React, Three.js, and Framer Motion.**  
Dark theme · Glassmorphism · Interactive 3D Globe · Smooth Animations

[🌐 Live Demo](#) · [📬 Contact](#contact) · [⭐ Star this repo](#)

</div>

---

## 📸 Overview

A fully interactive, production-grade portfolio website for **Aman** — Full Stack Developer & Cybersecurity Enthusiast. Designed with an Apple + Stripe + Linear inspired aesthetic: deep dark backgrounds, neon blue/purple accents, glassmorphism cards, and immersive 3D visuals.

---

## ✨ Features

- **3D Interactive Globe** — React Three Fiber scene with distorted mesh, wireframe overlay, torus rings, floating orbs, and star field
- **Custom Cursor** — Smooth-following dot + ring cursor with mix-blend-mode
- **Particle Background** — Canvas-based animated particle network with connection lines
- **Floating Shapes** — SVG animated rings, dot grids, and geometric decorators
- **Glassmorphism Cards** — Frosted glass UI throughout all sections
- **Framer Motion Animations** — Page load, scroll reveal, stagger effects, hover interactions
- **Mouse Parallax** — Hero section responds to cursor position with 3D tilt
- **Fully Responsive** — Optimized for desktop, tablet, and mobile
- **Section Filter** — Skills filtered by category (Frontend, Backend, Security, etc.)
- **Contact Form** — Animated form with success feedback state
- **Smooth Scrolling** — Navbar links with active state indicator

---

## 🗂️ Project Structure

```
src/
├── App.jsx                   # Root component, cursor logic, layout
├── main.jsx                  # React entry point
├── index.css                 # Global styles, CSS variables, utilities
│
├── data/
│   └── portfolioData.js      # All portfolio content (edit this!)
│
└── components/
    ├── Loader.jsx             # Animated intro loader
    ├── Navbar.jsx             # Sticky glassmorphic navigation
    ├── Hero.jsx               # Full-screen hero with 3D globe
    ├── About.jsx              # About section with trait cards
    ├── Skills.jsx             # Filterable animated skill bars
    ├── Projects.jsx           # Color-accented project cards
    ├── Experience.jsx         # Animated vertical timeline
    ├── Certifications.jsx     # Certificate badge cards
    ├── Contact.jsx            # Contact info + live form
    ├── Footer.jsx             # Footer with nav links
    ├── ParticleBackground.jsx # Canvas particle network
    ├── FloatingShapes.jsx     # SVG floating decorators
    └── ThreeScene.jsx         # React Three Fiber 3D scene
```

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18 + Vite |
| 3D Graphics | Three.js, React Three Fiber, Drei |
| Animations | Framer Motion |
| Styling | Pure CSS with CSS Variables |
| Canvas | HTML5 Canvas API (particles) |
| Fonts | Syne (display) + DM Sans (body) |
| Build Tool | Vite |

---

## 📦 Dependencies

```json
{
  "dependencies": {
    "react": "^18.x",
    "react-dom": "^18.x",
    "framer-motion": "^11.x",
    "three": "^0.160.x",
    "@react-three/fiber": "^8.x",
    "@react-three/drei": "^9.x"
  },
  "devDependencies": {
    "vite": "^5.x",
    "@vitejs/plugin-react": "^4.x"
  }
}
```

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/aman/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## ✏️ Customization

All portfolio content lives in a single file — **`src/data/portfolioData.js`**.

### Personal Info
```js
export const personalInfo = {
  name: "Aman",
  title: "Full Stack Developer",
  subtitle: "& Cybersecurity Enthusiast",
  tagline: "Building secure, scalable, and stunning digital experiences.",
  email: "aman@example.com",
  github: "https://github.com/aman",
  linkedin: "https://linkedin.com/in/aman",
  location: "Mumbai, India",
}
```

### Adding a Project
```js
{
  id: 6,
  title: "Your Project",
  description: "A short description of what it does.",
  tech: ["React", "Node.js", "MongoDB"],
  color: "#3b82f6",      // card accent color
  accent: "#60a5fa",     // tech tag color
  github: "https://github.com/...",
  live: "https://yourproject.com",
  featured: true,
}
```

### Changing Theme Colors
Edit the CSS variables at the top of `src/index.css`:

```css
:root {
  --accent-blue: #3b82f6;
  --accent-purple: #8b5cf6;
  --accent-cyan: #06b6d4;
  --bg-primary: #020408;
}
```

---

## 📐 Sections

| Section | Description |
|---|---|
| **Hero** | Name, roles, CTA buttons, stats, 3D globe |
| **About** | Bio, education, personality trait cards |
| **Skills** | Animated progress bars with category filter |
| **Projects** | 5 project cards with tech stack and links |
| **Experience** | Vertical timeline of roles and internships |
| **Certifications** | Certificate badge grid |
| **Contact** | Contact info cards + message form |
| **Footer** | Nav links, social links, credits |

---

## 🌐 Deployment

### Vercel (recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the /dist folder to netlify.com/drop
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
# Add to package.json scripts:
# "deploy": "gh-pages -d dist"
npm run build && npm run deploy
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| `< 768px` | Single column, hidden custom cursor, mobile nav |
| `768px – 900px` | Stacked about/contact grids |
| `> 900px` | Full two-column layouts, 3D globe visible |

---

## ⚡ Performance Tips

- The Three.js scene is rendered only after the loader completes
- Particle count is kept at 80 for smooth 60fps on most devices
- `useInView` ensures animations only trigger when sections are visible
- All ambient glow effects use CSS `filter: blur()` — GPU accelerated

---

## 📄 License

MIT License — free to use, modify, and deploy for personal and commercial projects.

---

<div align="center">

Built with ❤️ by **Aman** · Mumbai, India 🇮🇳

*If you found this useful, consider giving it a ⭐*

</div>