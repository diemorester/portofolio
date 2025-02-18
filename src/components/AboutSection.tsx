import { useEffect, useState, useRef } from "react";
// import { motion } from "framer-motion";
import img1 from "../assets/foto-porto.jpg";
import hoverWrapper from "./HoverWrapper";

interface AboutSectionProps {
    isWhiteMode: boolean;
}

export default function AboutSection({ isWhiteMode }: AboutSectionProps) {
    const [isPassing, setIsPassing] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();

                // Saat bagian atas section mulai keluar dari viewport, ubah warna
                if (rect.top < -50) {
                    setIsPassing(true);
                } else {
                    setIsPassing(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // const textColor = isPassing ? "#000000" : isWhiteMode ? "#000000" : "#F0F4F8";

    return (
        <div
            id="about-section"
            ref={sectionRef}
            className={`w-full flex relative z-30 flex-col justify-center px-5 md:px-[137px] pt-3 md:pt-6 pb-16 md:pb-96 transition-colors duration-75 ${isPassing ? "bg-off-white" : isWhiteMode ? "bg-off-white" : "text-off-white bg-black"
                }`}
        >
            {/* <div
                className="animate-fade-in"
                initial="hidden"
                whileInView="visible"
                variants={fadeInOut}
                custom={0}
                viewport={{ once: false, amount: 0.1 }}
                style={{
                    color: textColor,
                    transition: "color 0.5s ease-in-out",
                }}
            > */}
            <p className="pb-2 text-mono hover:text-neutral-600 text-lg md:text-2xl inline-flex">
                &lt;&nbsp;About&nbsp; &nbsp; &gt;
            </p>
            {/* </div> */}

            <div className="px-2 max-sm:text-sm block gap-5">
                <div
                    className="animate-fade-in float-left object-cover w-[35%] md:w-[200px] mr-6 my-2"
                // initial="hidden"
                // whileInView="visible"
                // variants={fadeInOut}
                // custom={0}
                // viewport={{ once: false, amount: 0.1 }}
                >
                    <img src={img1} alt="foto-porto" />
                </div>
                <div>
                    <p>
                        {hoverWrapper("Hello! My name is Rahadian Nirwan Zulfikar. I'm a full-stack web developer from Bandung, Indonesia. Despite being relatively new to the field, I've quickly gained hands-on experience in both front-end and back-end web development, delivering a variety of websites and projects that showcase my technical skills and creativity. My journey so far has been marked by a passion for crafting responsive, user-focused web applications while constantly pushing myself to learn and grow with each project.")}
                    </p>
                    <p className="pt-5 pb-6">
                        {hoverWrapper("As someone who thrives on learning, I'm constantly seeking new opportunities to enhance my skills and grow as a developer. My ability to learn quickly and adapt to new challenges has allowed me to make significant strides in a short amount of time, and I am eager to continue improving. Whether refining my coding techniques or finding innovative solutions to complex problems, I'm passionate about delivering web applications that meet the needs of both users and clients while also pushing the boundaries of my own capabilities.")}
                    </p>
                    <p>
                        {hoverWrapper("In a world where technology is ever-evolving, I'm not just keeping up—I'm ready to set the pace. Let's build something extraordinary together.")}
                    </p>
                </div>
            </div>
        </div>
    );
}
