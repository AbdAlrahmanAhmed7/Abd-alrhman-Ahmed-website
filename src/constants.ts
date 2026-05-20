import carvoImg from "./assets/images/carvo.png";
import jukoImg from "./assets/images/juko.png";
import mortalImg from "./assets/images/mortal.png";
import shinoImg from "./assets/images/shino.png";

export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const SKILLS = [
  { name: "HTML", level: 95, icon: "Code2" },
  { name: "CSS", level: 90, icon: "Palette" },
  { name: "JavaScript", level: 92, icon: "Cpu" },
  { name: "React", level: 88, icon: "Atom" },
  { name: "Next.js", level: 85, icon: "Zap" },
  { name: "Tailwind CSS", level: 95, icon: "Layers" },
  { name: "Firebase", level: 80, icon: "Flame" },
  { name: "Node.js", level: 75, icon: "Server" },
  { name: "Git & GitHub", level: 88, icon: "Github" },
];

export const PROJECTS = [
  {
    title: "Carvo - Premium Rentals",
    description: "A high-performance car rental platform with a modern dark interface and smooth animations.",
    image: carvoImg,
    tags: ["React", "Tailwind", "Vercel"],
    demo: "https://carvo-phi.vercel.app",
    github: "#",
  },
  {
    title: "Jukoo Store",
    description: "A premium e-commerce experience for digital products, featuring glassmorphism and seamless navigation.",
    image: jukoImg,
    tags: ["React", "E-Commerce", "Motion"],
    demo: "https://jukoo-store.vercel.app/",
    github: "#",
  },
  {
    title: "Mortal Gym",
    description: "An aggressive and immersive fitness landing page designed to showcase elite performance.",
    image: mortalImg,
    tags: ["Frontend", "UI/UX", "Responsive"],
    demo: "https://mortal-gym.vercel.app/",
    github: "#",
  },
  {
    title: "shino",
    description: "An advanced analytics interface featuring real-time data visualization and AI-driven insights.",
    image: shinoImg,
    tags: ["D3.js", "Analytics", "React"],
    demo: "#",
    github: "#",
  },
];

export const SOCIAL_LINKS = [
  { name: "GitHub", href: "https://github.com/AbdAlrahmanAhmed7", icon: "Github" },
  { name: "LinkedIn", href: "https://linkedin.com/in/AbdelrahmanAhmed", icon: "Linkedin" },
  { name: "WhatsApp", href: "https://wa.me/201277466029", icon: "MessageCircle" },
  { name: "Email", href: "mailto:abdelrahman.hmed77@gmail.com", icon: "Mail" },
];
