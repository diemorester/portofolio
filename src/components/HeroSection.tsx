import img1 from "../assets/hero.gif";
import { useEffect, useState } from "react";

export default function HeroSection() {
    const text: string[] = [
        "JavaScript", "React", "Next.JS", "HTML", "CSS",
        "TypeScript", "Tailwind", "MySQL", "Node.JS",
        "Express", "Prisma"
    ];
    const [heading, setHeading] = useState<number>(0);

    useEffect(() => {
        const changeHeading = setInterval(
            () => setHeading((idx) => (idx === text.length - 1 ? 0 : idx + 1)),
            666
        );
        return () => clearInterval(changeHeading);
    }, []);

    // Function to wrap each word and punctuation in a span
    const wrapWithHoverEffect = (sentence: string) => {
        return sentence.split(/(\s+|(?=\W))/).map((part, idx) => {
            if (part.trim() === '') {
                return part; // return whitespace as is
            }
            return (
                <span key={idx} className="hover:text-mono transition duration-200">
                    {part}
                </span>
            );
        });
    };

    return (
        <div className="flex flex-col-reverse md:flex-row min-h-screen justify-center md:gap-16 items-center text-white">
            <div className="flex flex-col px-5 gap-2 md:gap-5">
                <p className="md:text-xl text-mono hover:text-white">
                    &lt; &nbsp; Hello. &nbsp; &gt;
                </p>
                <div className="md:text-xl px-[6px]">
                    <p>
                        {wrapWithHoverEffect("My name is")}&nbsp;
                        <span className="font-bold hover:text-mono transition duration-200">
                            Rahadian Nirwan Zulfikar
                        </span>.
                    </p>
                    <p>{wrapWithHoverEffect("I am a Web Developer based in Bandung, Indonesia.")}</p>
                    <p>{wrapWithHoverEffect("My areas of specialisation are:")}</p>
                </div>
                <p className="text-6xl md:text-8xl">
                    <span className="hover:text-mono transition duration-200">
                        {text[heading]}
                    </span>
                </p>
            </div>
            <div className="place-content-center">
                <img src={img1} alt="hero" width={400} height={300} />
            </div>
        </div>
    );
}