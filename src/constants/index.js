import { crosstech, meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Front End Developer",
        company_name: "Coco",
        icon: crosstech,
        iconBg: "#accbe1",
        date: "October 2024",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YangHyperData',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/giang-nguyễn-95a230318',
    }
];

export const projects = [
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Loop Clone',
        description: 'Created a full-stack replica of the popular Collaborate platform "Loop," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/YangHyperData/CollaborativeWorkspace-Reasonable-AI',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Business Directory App',
        description: 'Built a complete app allowing users to share photos and connect with business in a familiar social media environment.',
        link: 'https://github.com/YangHyperData/BusinessDirectoryApp',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'AI FormBuilder',
        description: 'AI Formbuilder is a smart application that helps you create complex forms quickly and easily with just a few clicks, thanks to the power of artificial intelligence.',
        link: 'https://github.com/YangHyperData/AI-FormBuilder',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Content Generator',
        description: 'AI Content Generator is a powerful assistant that helps you create high-quality content quickly and easily. Just provide some basic information, AI will automatically create articles, posts, or even creative scripts.',
        link: 'https://github.com/YangHyperData/AiContentGenerator',
    }
];