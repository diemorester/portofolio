import { useEffect, useState } from "react";
import hoverWrapper from "./HoverWrapper";

export default function HeroSection() {
    const text: string[] = [
        "JavaScript", "React", "Next.JS", "HTML", "CSS",
        "TypeScript", "Tailwind", "MySQL", "Node.JS",
        "Express", "Prisma", "MongoDB"
    ];

    const [header, setHeader] = useState<number>(0);

    useEffect(() => {
        const changeHeader = setInterval(
            () => setHeader((idx) => (idx === text.length - 1 ? 0 : idx + 1)),
            1168
        );
        return () => clearInterval(changeHeader);
    }, []);

    return (
        <div id="hero-section" className="flex flex-row w-full relative z-30 bg-black h-screen px-5 justify-center items-center text-off-white">
            <div className="flex flex-col gap-2 md:gap-5">
                <div>
                    <p className="text-lg md:text-2xl text-mono hover:text-off-white inline-flex">
                        &lt;&nbsp;Hello. &nbsp; &gt;
                    </p>
                </div>
                <div className="md:text-xl px-2">
                    <p>
                        {hoverWrapper("my name is")}&nbsp;
                        <span className="font-bold hover:text-mono transition duration-200">
                            Rahadian
                        </span>&nbsp;
                        <span className="font-bold hover:text-mono transition duration-200">
                            Nirwan
                        </span>&nbsp;
                        <span className="font-bold hover:text-mono transition duration-200">
                            Zulfikar
                        </span>.
                    </p>
                    <p>{hoverWrapper("i am a full-stack web developer based in Bandung, Indonesia.")}</p>
                    <p>{hoverWrapper("my areas of specialisation are")}</p>
                </div>
                <p className="mx-auto md:mx-0 py-11 md:py-0 text-5xl md:text-7xl">
                    <span className="hover:text-mono transition duration-200">
                        {text[header]}
                    </span>
                </p>
            </div>
        </div>
    );
};