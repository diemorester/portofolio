import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface WhyMeSectionProps {
    isWhiteText: boolean;
}

export default function WhyMeSection({ isWhiteText }: WhyMeSectionProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isColourActive, setIsColourActive] = useState<Boolean[]>(Array(5).fill(false));

    const paragraph = [
        "< Why Me >",
        "i will capture your ideas",
        `\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u00A0refine them`,
        "spice them up\u2003\u00A0\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003",
        "and i turn\u2003\u2003\u2003\u2003them",
        "into a trend"
    ];

    const handleScroll = () => {
        if (!ref.current) return;

        const windowHeight = window.innerHeight;
        const midPoint = windowHeight / 2;
        const scrollPosition = window.scrollY;

        const newActiveColour = [...isColourActive];

        Array.from(ref.current.children).forEach((child, index) => {
            const topMidPoint = (child as HTMLElement).getBoundingClientRect().top;

            if (topMidPoint < midPoint) {
                newActiveColour[index] = true;
            } else {
                newActiveColour[index] = false;
            }
        });

        if (scrollPosition < 50) {
            setIsColourActive(Array(5).fill(false));
        } else {
            setIsColourActive(newActiveColour);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isColourActive]);

    const getTextAlignmentClass = (index: number) => {
        switch (index) {
            case 0:
                return "text-center";
            case 1:
                return "text-center";
            case 2:
                return "text-center";
            case 3:
                return "text-center";
            case 4:
                return "text-center";
            default:
                return "text-center";
        }
    };

    return (
        <div id="why-me-section" className="flex flex-col justify-between relative text-neutral-300 z-30">
            <div ref={ref}>
                {paragraph.map((text, index) => (
                    <motion.div
                        key={index}
                        initial={{ color: '#D4D4D4', backgroundColor: '#f0f4f8 ' }}
                        animate={
                            isColourActive[index]
                                ? {
                                    color: isWhiteText ? '#ffffff' : '#000000',
                                    backgroundColor: isWhiteText ? '#000000' : '#f0f4f8 '
                                }
                                : { color: '#D4D4D4' }
                        }
                        transition={{ duration: 0.2 }}
                        className={`md:text-2xl font-semibold pb-2 md:pb-8 md:px-28 ${getTextAlignmentClass(index)}`}
                    >
                        {text}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}