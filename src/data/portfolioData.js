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

export const projects = [
    {
        id: 1,
        title: "MindConnect",
        description:
            "A mental health platform connecting users with certified therapists. Features real-time chat, mood tracking, and AI-powered mental health insights.",
        tech: ["React", "Node.js", "MongoDB", "Socket.IO", "AI"],
        color: "#6366f1",
        accent: "#818cf8",
        github: "#",
        live: "#",
        featured: true,
    },
    {
        id: 2,
        title: "Auto Resume Builder",
        description:
            "Intelligent resume generation tool that crafts ATS-optimized resumes using AI. Supports multiple templates and exports to PDF/DOCX.",
        tech: ["React", "Python", "OpenAI API", "PDF.js"],
        color: "#06b6d4",
        accent: "#22d3ee",
        github: "#",
        live: "#",
        featured: true,
    },
    {
        id: 3,
        title: "Stock Prediction System",
        description:
            "ML-powered NSE stock analysis and prediction system with real-time data, technical indicators, and trend forecasting visualizations.",
        tech: ["Python", "TensorFlow", "FastAPI", "React", "Chart.js"],
        color: "#10b981",
        accent: "#34d399",
        github: "#",
        live: "#",
        featured: true,
    },
    {
        id: 4,
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
        id: 5,
        title: "AI Powered Phishing Detection",
        description:
            "A real-time phishing URL and email detector using machine learning. Achieves 96%+ accuracy with NLP-based feature extraction and threat scoring.",
        tech: ["Python", "Scikit-learn", "Flask", "React", "NLP"],
        color: "#ef4444",
        accent: "#f87171",
        github: "#",
        live: "#",
        featured: true,
    },
    {
        id: 6,
        title: "AutoRed",
        description:
            "AI-powered Breach and Attack Simulation framework leveraging reinforcement learning techniques and integrations with security tools for automated security assessments.",
        tech: ["Python", "AI", "Cybersecurity", "CALDERA"],
        color: "#8b5cf6",
        accent: "#a78bfa",
        github: "#",
        live: "#",
        featured: true,
    },
    {
        id: 7,
        title: "Believe Consultancy Website",
        description:
            "Modern consultancy platform built with responsive design, interactive UI components, client testimonials, authentication, and service management features.",
        tech: ["React", "Bootstrap", "Node.js"],
        color: "#ec4899",
        accent: "#f472b6",
        github: "#",
        live: "#",
        featured: false,
    },
];

export const experience = [
    {
        role: "Cybersecurity Intern",
        company: "Tech Security Group",
        period: "2024 – 2025",
        description:
            "Worked on penetration testing, vulnerability assessments, and security auditing. Developed internal tools for automated scanning and reporting using Python and Kali Linux.",
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

export const certifications = [
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
        title: "Cybersecurity Internship",
        issuer: "Digisuraksha Parhari Foundation",
        year: "2025",
        icon: "🛡️",
        color: "#6366f1",
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