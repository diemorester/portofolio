import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import WhyMeSection from "./WhyMeSection";

export default function WhatIDoContainer() {
    const [isWhiteText, setIsWhiteText] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const containerWhatWeDo = document.getElementById("container-what-i-do");

            if (containerWhatWeDo) {
                const midPoint = window.innerHeight / 4;
                const aboutUsTop = containerWhatWeDo.getBoundingClientRect().top;

                if (aboutUsTop <= midPoint) {
                    setIsWhiteText(true);
                } else {
                    setIsWhiteText(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="">
            <div>
                <WhyMeSection isWhiteText={isWhiteText} />
            </div>
            <motion.div
                id="container-what-i-do"
                animate={{
                    backgroundColor: isWhiteText ? "#000000" : "#F0F4F8",
                    color: isWhiteText ? "#F0F4F8" : "",
                }}
                initial={{
                    backgroundColor: "#F0F4F8",
                    color: "#000000",
                }}
                transition={{ duration: 0.2 }}
                className="min-h-screen relative z-20 md:p-11"
            >
                <div className="text-lg md:text-2xl text-mono hover:text-neutral-600 px-5 md:px-[137px] text-end z-20 md:right-12 absolute bottom-1/2 md:bottom-1/4">
                    &lt;&nbsp;What I Do&nbsp; &nbsp; &gt;
                </div>
            </motion.div>
        </div>
    );
}