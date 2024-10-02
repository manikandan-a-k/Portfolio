import hot from "../assets/projects/hot.png";
import netflix from "../assets/projects/netflix.png";
import nostra from "../assets/projects/nostra.jpg";
import portfolio from "../assets/projects/art.webp";
import udemy from "../assets/projects/udemy.png";

export const HERO_CONTENT = `I am an experienced MERN stack developer specializing in building scalable and robust web applications. My expertise spans across modern technologies including React, Node.js, Express, and MongoDB, enabling the delivery of high-performance solutions.`;

export const ABOUT_TEXT = `Hello! I am a versatile MERN Stack developer with a focus on delivering efficient and user-centric web applications. With solid skills in HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, and Redux, I have developed a strong foundation in full stack development. My journey in this field is driven by a deep interest in modern web technologies, and I thrive in collaborative environments that present new challenges and opportunities for impactful contributions.`;

export const PROJECTS = [
  {
    title: "Hot E-Commerce Platform",
    image: hot,
    description:
      "A comprehensive ecommerce platform featuring an admin panel for product and order management, and a seamless user shopping experience with dynamic product listings, a shopping cart, cash on delivery, and order tracking functionality.",
    technologies: ["React", "MongoDB", "Node.js", "Express.js"],
    live: "https://hot-shop-ecommerce.onrender.com",
    github: "https://github.com/manikandan-a-k/hot-shop-ecommerce",
  },
  {
    title: "Netflix Clone",
    image: netflix,
    description:
      "A full-stack Netflix clone providing user authentication, trending content, now playing and top-rated movies, upcoming releases, and popular TV shows airing today.",
    technologies: ["React", "Redux", "MongoDB", "Node.js", "Express.js"],
    live: "https://netflix-mern-6raz.onrender.com",
    github: "https://github.com/manikandan-a-k/netflix-mern",
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A professional portfolio website showcasing my projects, technical skills, and contact information in an organized and visually appealing format.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    live: "https://manikandan-ak-portfolio.vercel.app",
    github: "https://github.com/manikandan-a-k/Portfolio",
  },
  {
    title: "Udemy Clone",
    image: udemy,
    description:
      "A static Udemy platform featuring top recommended and most popular courses, built to replicate a modern online learning interface.",
    technologies: ["React", "Tailwind CSS"],
    live: "https://udemy-react-dusky.vercel.app/",
    github: "https://github.com/manikandan-a-k/udemy-react",
  },
  {
    title: "Nostra E-Commerce",
    image: nostra,
    description:
      "A static ecommerce platform highlighting New Arrivals, Most Wanted items, and collections for Summer, Party, and Beach, with a dedicated contact page.",
    technologies: ["HTML", "CSS", "JavaScript"],
    live: "https://nostra-ecommerce.vercel.app/",
    github: "https://github.com/manikandan-a-k/nostra-ecommerce",
  },
];

export const CONTACT = {
  email: "manikandanalagesan08@gmail.com",
};
