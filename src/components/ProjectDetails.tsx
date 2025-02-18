import { useParams } from "react-router-dom";
import { useState } from "react";
import img0 from '../assets/bg-noise.png';
import img1 from '../assets/headerkopikalyan.png';
import img2 from '../assets/thumbnail-thesept-1.png';
import img3 from '../assets/header-arcanistlabs.png';
import img4 from '../assets/erp-aksata.jpeg';

type ProjectDetail = {
    title: string;
    image: string;
    description: string;
    url: string;
    additionalInfo: string[];
};

const projectDetails: Record<string, ProjectDetail> = {
    'erp-aksata': {
        title: 'ERP Aksata',
        image: img4,
        description: "Aksata ERP is a lightweight and efficient enterprise resource planning system designed for seamless business management. With its optimized performance, Aksata runs smoothly even on low-spec devices, ensuring accessibility and reliability for businesses of all sizes.",
        url: "https://erp.ristoan.id/dashboard",
        additionalInfo: [
            "UI/UX Design",
            "Front-end Development",
            "Back-end Development and API Design",
            "Database Management and Optimization",
            "System Deployment and Infrastructure Management"
        ]
    },
    'arcanist-labs-companyprofile': {
        title: 'ArcanistLabs',
        image: img3,
        description: "ArcanistLabs is a web development startup focused on creating sleek, responsive websites. With a modern design approach, the site offers easy navigation and showcases the company's expertise in building custom web solutions, making it an ideal platform for clients seeking to elevate their online presence.",
        url: "https://arcanist-labs.vercel.app/",
        additionalInfo: [
            "UI/UX Design",
            "Landing Page Development",
            "Manage Responsiveness",
            "Scroll-Based Animations",
            "Performance Optimization"
        ],
    },
    'kopikalyan-companyprofile': {
        title: 'Kopikalyan',
        image: img1,
        description: "The Kopikalyan website showcases its family-like atmosphere coffeeshop. With a modern, responsive design, the site provides easy navigation and detailed information about the coffeeshop's history, menu, and services, making it an ideal platform for attracting customers and enhancing their online experience.",
        url: "https://companyprofile-weld.vercel.app/",
        additionalInfo: [
            "Responsive design for seamless mobile and desktop experience",
            "Easy navigation with a user-friendly interface",
            "Informative sections about the coffee shop's history, menu, and services",
            "Creative UI/UX design to enhance user engagement",
            "Engaging photo gallery showcasing the ambiance and offerings"
        ],
    },
    'the-sept': {
        title: 'the sept',
        image: img2,
        description: 'loremloremloremlreomrloemrelomreomrelomreom',
        url: "https://portofolio-ochre-chi.vercel.app/",
        additionalInfo: [
            "Responsive design for seamless mobile and desktop experience",
            "Easy navigation with a user-friendly interface",
            "Informative sections about the coffee shop's history, menu, and services",
            "Creative UI/UX design to enhance user engagement",
            "Engaging photo gallery showcasing the ambiance and offerings"
        ],
    },
    'project-5': {
        title: 'Project Five',
        image: 'https://via.placeholder.com/800x500',
        description: 'please order my service so i can add more to my portofolio lol :(',
        url: "https://portofolio-ochre-chi.vercel.app/",
        additionalInfo: [
            "xixixixi",
            "lol",
            ":(",
            "lol",
            "xixixixi"
        ],
    },
    'project-6': {
        title: 'Project Six',
        image: 'https://via.placeholder.com/800x500',
        description: 'please order my service so i can add more to my portofolio lol :(',
        url: "https://portofolio-ochre-chi.vercel.app/",
        additionalInfo: [
            "xixixixi",
            "lol",
            ":(",
            "lol",
            "xixixixi"
        ],
    },

};

export default function ProjectDetails() {
    const { slug } = useParams<{ slug: string }>();

    const project = slug && projectDetails[slug];

    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    if (!project) {
        return <div>Project not found!</div>;
    }

    const hoverWrapper = (sentence: string) => {
        return sentence.split(/(\s+|(?=\W))/).map((part, idx) => {
            if (part.trim() === '') {
                return part;
            }
            return (
                <span key={idx} className="hover:text-mono transition duration-200">
                    {part}
                </span>
            );
        });
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        const target = e.currentTarget as HTMLElement;
        const { offsetWidth, offsetHeight } = target;
        const x = (e.nativeEvent.offsetX / offsetWidth) * 100;
        const y = (e.nativeEvent.offsetY / offsetHeight) * 100;

        const rotateX = ((y - 50) / 5) * -1;
        const rotateY = ((x - 50) / 5);

        setRotateX(rotateX);
        setRotateY(rotateY);
    };

    const resetRotation = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <div className="relative w-full h-full z-0 bg-black font-space-mono cursor-default">
            <div
                className="absolute inset-0 bg-repeat animate-noise"
                style={{
                    backgroundImage: `url(${img0})`,
                    zIndex: -10,
                    opacity: 0.05
                }}>
            </div>
            <div className="z-30 mx-5 md:mx-[137px] flex flex-col gap-8 justify-center min-h-screen">
                <div className="">
                    <p className="md:text-xl text-mono hover:text-white inline-flex">
                        &lt;&nbsp;Projects&nbsp; &nbsp; &gt;
                    </p>
                </div>
                <div className="flex flex-col-reverse justify-start md:flex-row gap-10">
                    <div className="flex flex-col gap-5 justify-between text-white md:w-1/2">
                        <h1 className="text-xl md:text-3xl font-bold">{hoverWrapper(project.title)}</h1>
                        <p className="text-sm">{hoverWrapper(project.description)}</p>
                        <p className="text-sm md:text-xl">{hoverWrapper("My Scope of Work")}</p>
                        <ul className="list-disc list-inside">
                            {project.additionalInfo.map((info, index) => (
                                <li key={index} className="text-xs">
                                    {hoverWrapper(info)}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="md:w-1/2 px-11">
                        <a href={project.url} rel="noopener noreferrer" >
                            <div className="card-3d" onMouseMove={handleMouseMove} onMouseLeave={resetRotation} >
                                <div
                                    className="card-3d-inner border border-white shadow-lg overflow-hidden"
                                    style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)` }}
                                >
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" style={{ imageRendering: 'auto' }} />
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <a href="https://wa.link/fw9mfb" target="_blank" rel="noopener noreferrer" className="">
                    <button className="relative border border-mono text-mono py-3 px-5 min-w-[300px] min-h-[50px] overflow-hidden group text-lg active:scale-95 transition-transform duration-300 ease-in-out">
                        <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:translate-x-full group-active:scale-90" >
                            LET'S WORK TOGETHER
                        </span>
                        <span
                            className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out -translate-x-full group-hover:translate-x-0 group-hover:bg-white group-hover:text-black group-active:scale-90" >
                            ORDER NOW
                        </span>
                    </button>
                </a>
            </div>
        </div>
    );
}