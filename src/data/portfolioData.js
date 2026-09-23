export const personalInfo = {
    name: "Aman",
    title: "Full Stack Developer",
    subtitle: "& Cybersecurity Enthusiast",
    tagline: "Building secure, scalable, and intelligent digital experiences.",
    email: "amangupta032005@gmail.com",
    github: "github.com/AmanGupta52",
    linkedin: "www.linkedin.com/in/aman-gupta-pro",
    location: "Mumbai, Maharashtra, India",
};

export const skills = [
    { name: "HTML5", level: 95, category: "Frontend", icon: "🌐" },
    { name: "CSS3", level: 92, category: "Frontend", icon: "🎨" },
    { name: "JavaScript", level: 90, category: "Language", icon: "⚡" },
    { name: "React.js", level: 88, category: "Frontend", icon: "⚛️" },
    { name: "React Native", level: 84, category: "Frontend", icon: "📱" },
    { name: "Bootstrap", level: 90, category: "Frontend", icon: "🅱️" },
    { name: "Tailwind CSS", level: 82, category: "Frontend", icon: "💨" },

    { name: "Node.js", level: 86, category: "Backend", icon: "🟢" },
    { name: "Express.js", level: 84, category: "Backend", icon: "🚀" },
    { name: "REST APIs", level: 85, category: "Backend", icon: "🔗" },
    { name: "JWT Authentication", level: 80, category: "Backend", icon: "🔐" },

    { name: "MongoDB", level: 85, category: "Database", icon: "🍃" },
    { name: "Firebase", level: 78, category: "Database", icon: "🔥" },

    { name: "Python", level: 88, category: "Language", icon: "🐍" },
    { name: "Java", level: 72, category: "Language", icon: "☕" },

    { name: "Cybersecurity", level: 82, category: "Security", icon: "🛡️" },
    { name: "Kali Linux", level: 85, category: "Security", icon: "🐉" },
    { name: "Network Security", level: 78, category: "Security", icon: "🌐" },
    { name: "Penetration Testing", level: 75, category: "Security", icon: "🎯" },

    { name: "TensorFlow", level: 76, category: "AI/ML", icon: "🧠" },
    { name: "Machine Learning", level: 80, category: "AI/ML", icon: "🤖" },
    { name: "OpenCV", level: 78, category: "AI/ML", icon: "👁️" },
    { name: "YOLOv8", level: 75, category: "AI/ML", icon: "🎯" },
    { name: "MediaPipe", level: 74, category: "AI/ML", icon: "✋" },

    { name: "Git", level: 85, category: "Tools", icon: "📦" },
    { name: "GitHub", level: 88, category: "Tools", icon: "🐙" },
    { name: "Postman", level: 84, category: "Tools", icon: "📬" },
    { name: "Android Studio", level: 80, category: "Tools", icon: "📱" },
];

// NOTE ON LIVE LINKS: a few "live" fields below are left as "" because you
// haven't shared the deployed URL yet (Fire Safety Platform, Kishori Saree
// Center, Achat, OCR Document Scanner). Send those over and I'll fill them in.
export const projects = [
    {
        id: 1,
        title: "Fire Safety Platform",
        description:
            "Production-ready fire safety management platform with secure REST APIs, role-based access control, equipment management, AMC service tracking, order processing, and real-time notifications.",
        tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Render"],
        color: "#0ea5e9",
        accent: "#38bdf8",
        github: "https://github.com/AmanGupta52/fire-safety-platform-audited",
        live: "",
        featured: true,
    },
    {
        id: 2,
        title: "Kishori Saree Center",
        description:
            "Full-stack e-commerce web application for a saree business, featuring an admin dashboard, secure authentication, database integration, and Cloudinary-powered image management.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Cloudinary"],
        color: "#ec4899",
        accent: "#f472b6",
        github: "https://github.com/AmanGupta52/Kishori-Saree-Center-Full-Stack-Web-Application-with-Admin-Dashboard",
        live: "",
        featured: true,
    },
    {
        id: 3,
        title: "Achat — WhatsApp Clone",
        description:
            "Full-stack real-time messaging app on the MERN stack with instant delivery, JWT + Google OAuth authentication, email OTP verification, and a connection system with read/delivery status.",
        tech: ["React", "Vite", "Node.js", "Express", "MongoDB", "Socket.IO", "JWT", "Google OAuth", "Email OTP"],
        color: "#22c55e",
        accent: "#4ade80",
        github: "https://github.com/AmanGupta52/Achat",
        live: "",
        featured: true,
    },
    {
        id: 4,
        title: "Real-Time Chat",
        description:
            "Lightweight real-time chat application with instant messaging and live user presence.",
        tech: ["React", "Node.js", "Socket.IO"],
        color: "#6366f1",
        accent: "#818cf8",
        github: "",
        live: "https://amanchat.netlify.app",
        featured: false,
    },
    {
        id: 5,
        title: "OCR Document Scanner",
        description:
            "Modern OCR scanner that extracts and structures text from images and PDFs, with export support for TXT, hOCR, and searchable PDF formats.",
        tech: ["React", "TypeScript", "FastAPI", "Tesseract OCR", "Docker"],
        color: "#f59e0b",
        accent: "#fbbf24",
        github: "https://github.com/AmanGupta52/ocr-scanner",
        live: "",
        featured: true,
    },
    {
        id: 6,
        title: "Balanced Minds Consultancy",
        description:
            "Mental-health consultancy platform connecting users with certified experts — video consultations via ZEGOCLOUD, admin/expert role management, and an appointment booking system.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "ZEGOCLOUD"],
        color: "#8b5cf6",
        accent: "#a78bfa",
        github: "https://github.com/AmanGupta52/balancedmindsconsultancy_fullstack",
        live: "https://balancedmindsconsultancy.netlify.app",
        featured: true,
    },
    {
        id: 7,
        title: "Personal Portfolio",
        description:
            "3D developer portfolio built with interactive elements, smooth animations, and a glassmorphism UI.",
        tech: ["React", "Vite", "Framer Motion", "Three.js", "React Three Fiber", "EmailJS"],
        color: "#06b6d4",
        accent: "#22d3ee",
        github: "https://github.com/AmanGupta52/portfolio",
        live: "https://aman-developer.netlify.app/",
        featured: false,
    },
    {
        id: 8,
        title: "Stock Trend Predictor",
        description:
            "AI-powered NSE stock analysis and prediction system with technical indicators and trend forecasting.",
        tech: ["Python", "yFinance", "LSTM", "XGBoost", "SVM", "Logistic Regression"],
        color: "#10b981",
        accent: "#34d399",
        github: "https://github.com/AmanGupta52/Stock-Trend-Predictor-",
        live: "",
        featured: true,
    },
    {
        id: 9,
        title: "AI Powered Phishing Detection",
        description:
            "Machine learning-based phishing URL detector using statistical URL features, with a real-time classification interface.",
        tech: ["Python", "Scikit-learn", "Flask", "React", "NLP"],
        color: "#ef4444",
        accent: "#f87171",
        github: "https://github.com/AmanGupta52/phishing-url-detector",
        live: "",
        featured: true,
    },
    {
        id: 10,
        title: "Fake Login Page Detector",
        description:
            "Tool to detect fake/phishing login pages by analyzing page structure and content.",
        tech: ["Python", "Streamlit", "BeautifulSoup", "Scikit-learn"],
        color: "#f97316",
        accent: "#fb923c",
        github: "https://github.com/AmanGupta52/Fake_Login_Pages_Detector",
        live: "",
        featured: false,
    },
    {
        id: 11,
        title: "SOC Log Anomaly Detector",
        description:
            "ML-based SOC dashboard that detects anomalous system/web logs across 1.57M+ log entries, with real-time analytics, attack explanations, and CSV reporting.",
        tech: ["Python", "Pandas", "Isolation Forest", "One-Class SVM"],
        color: "#14b8a6",
        accent: "#2dd4bf",
        github: "https://github.com/AmanGupta52/soc-log-anomaly-detector",
        live: "",
        featured: false,
    },
    {
        id: 12,
        title: "Auto Resume Builder",
        description:
            "Intelligent resume generation tool that crafts ATS-optimized resumes using AI. Supports multiple templates and exports to PDF/DOCX.",
        tech: ["React", "Python", "OpenAI API", "PDF.js"],
        color: "#06b6d4",
        accent: "#22d3ee",
        github: "#",
        live: "#",
        featured: false,
    },
    {
        id: 13,
        title: "Pachisi Game",
        description:
            "A fully interactive digital recreation of the classic Indian board game Pachisi with multiplayer support, animations, and custom AI opponents.",
        tech: ["JavaScript", "Canvas API", "Node.js", "WebSockets"],
        color: "#f59e0b",
        accent: "#fbbf24",
        github: "#",
        live: "#",
        featured: false,
    },
    {
        id: 14,
        title: "AutoRed",
        description:
            "AI-powered Breach and Attack Simulation framework leveraging reinforcement learning techniques and integrations with security tools for automated security assessments.",
        tech: ["Python", "AI", "Cybersecurity", "CALDERA"],
        color: "#8b5cf6",
        accent: "#a78bfa",
        github: "#",
        live: "#",
        featured: false,
    },
];

export const experience = [
    {
        role: "Cybersecurity Intern",
        company: "RedKross Research Foundation & Shivaradhya Foundation",
        period: "Dec 2025 – Feb 2026",
        description:
            "Completed a 120-hour cybersecurity internship (Grade A) covering penetration testing, vulnerability assessments, and security auditing. Developed internal tools for automated scanning and reporting using Python and Kali Linux.",
        skills: ["Penetration Testing", "Kali Linux", "Python", "Network Security"],
    },
    {
        role: "Full Stack Developer (Freelance)",
        company: "Self-Employed",
        period: "2023 – Present",
        description:
            "Designed and developed multiple client projects including e-commerce platforms, portfolio sites, and custom web apps using the MERN stack.",
        skills: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    },
    {
        role: "Computer Vision Researcher",
        company: "Sathaye College Project",
        period: "2024",
        description:
            "Built gesture recognition and VFX systems using YOLOv8, MediaPipe, and OpenCV. Developed real-time gesture-to-action pipelines with cinematic effect rendering.",
        skills: ["Python", "OpenCV", "YOLOv8", "MediaPipe", "Computer Vision"],
    },
];

// NOTE ON CERTIFICATION LINKS: "link" points to your Google Drive
// verification copy where you've shared one. "Python & Python Libraries"
// has no issuer/date/link yet — send those and I'll complete the entry.
export const certifications = [
    {
        title: "Advanced Software Engineering Job Simulation",
        issuer: "Walmart Global Tech (Forage)",
        year: "2026",
        detail: "Advanced Data Structures, Software Architecture, Relational DB Design, Data Munging",
        link: "https://drive.google.com/file/d/19swaIpXXs7dUaitsK4358khPwRb9zWZs/view?usp=sharing",
        icon: "🧩",
        color: "#0071ce",
    },
    {
        title: "Software Engineering Job Simulation",
        issuer: "Commonwealth Bank (Forage)",
        year: "2026",
        detail: ".NET backend, React/Redux frontend, code review & pull requests",
        link: "https://drive.google.com/file/d/1kqsQHKSE1jTYEs6YdXmIj8u-H8Ctimkx/view?usp=sharing",
        icon: "🏦",
        color: "#ffcc00",
    },
    {
        title: "Data Analytics Job Simulation",
        issuer: "Deloitte (Forage)",
        year: "2026",
        detail: "Data analysis, forensic technology",
        link: "https://drive.google.com/file/d/16l-5VIMhrR1cEPQSrJkcmG_SGU9T7m1M/view?usp=sharing",
        icon: "📊",
        color: "#86bc25",
    },
    {
        title: "Data Visualisation: Empowering Business with Effective Insights",
        issuer: "",
        year: "",
        link: "https://drive.google.com/file/d/1LJ_VXoyXXA-L4R9fUNJFQ5C9b3eMvU0O/view?usp=sharing",
        icon: "📈",
        color: "#06b6d4",
    },
    {
        title: "Python & Python Libraries",
        issuer: "",
        year: "",
        icon: "🐍",
        color: "#10b981",
    },
    {
        title: "Cybersecurity Internship",
        issuer: "RedKross Research Foundation & Shivaradhya Foundation",
        year: "Dec 2025 – Feb 2026",
        detail: "120 hours • Grade A",
        icon: "🛡️",
        color: "#6366f1",
    },
    {
        title: "Cybersecurity Fundamentals",
        issuer: "IBM / Coursera",
        year: "2024",
        icon: "🛡️",
        color: "#6366f1",
    },
    {
        title: "React – The Complete Guide",
        issuer: "Udemy",
        year: "2023",
        icon: "⚛️",
        color: "#06b6d4",
    },
    {
        title: "Python for Data Science & AI",
        issuer: "IBM / Coursera",
        year: "2024",
        icon: "🐍",
        color: "#10b981",
    },
    {
        title: "TryHackMe Security Labs",
        issuer: "TryHackMe",
        year: "2025",
        icon: "🔐",
        color: "#ef4444",
    },
    {
        title: "Machine Learning Fundamentals",
        issuer: "Coursera",
        year: "2025",
        icon: "🤖",
        color: "#10b981",
    },
    {
        title: "Ethical Hacking Essentials",
        issuer: "EC-Council",
        year: "2024",
        icon: "🔐",
        color: "#ef4444",
    },
    {
        title: "MongoDB Developer Path",
        issuer: "MongoDB University",
        year: "2023",
        icon: "🍃",
        color: "#f59e0b",
    },
];