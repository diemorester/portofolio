import { motion } from "framer-motion"
import img1 from "../assets/javascript-icon.png"
import img2 from "../assets/next-js-icon.png"
import img3 from "../assets/github-icon.png"
import img4 from "../assets/github-repo-icon.png"
import Service from "./ServiceSection"

export default function SkillsSection() {
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

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: i * 0.1 },
        }),
    };

    return (
        <div id="skill" className="min-h-screen flex flex-col justify-center pt-[130px] md:gap-10">
            <div>
                <p className="text-mono hover:text-white md:text-xl inline-flex">
                    &lt;&nbsp;Skills&nbsp; &nbsp; &gt;
                </p>
            </div>
            <div className="flex flex-col justify-center gap-10 px-2 md:flex-row md:justify-between">
                <div className="flex flex-col gap-10">
                    <div className="text-white md:text-3xl">
                        <motion.p
                            className="animate-fade-in"
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeIn}
                            custom={0}
                        >
                            {hoverWrapper("Skills i possess as a")}
                        </motion.p>
                        <motion.p
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeIn}
                            custom={1}
                        >
                            {hoverWrapper("web developer")}
                        </motion.p>
                    </div>
                    <div className="text-white text-sm">
                        {[
                            "● responsive website development",
                            "● user-centred design & UI/UX implementation",
                            "● back-end development",
                            "● component based development",
                            "● version control & collaboration",
                        ].map((skill, index) => (
                            <motion.p
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                variants={fadeIn}
                                custom={index + 2}
                            >
                                {hoverWrapper(skill)}
                            </motion.p>
                        ))}
                    </div>
                </div>
                <motion.div 
                    className="animate-fade-in grid grid-cols-4 md:max-w-[40%] gap-7"
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeIn}
                    custom={8}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 2048 2048"><path fill="#E44C25" d="M983 102h82l44 3 36 4 45 7 39 8 44 11 39 12 32 11 28 11 28 12 30 14 22 11 22 12 26 15 22 14 27 18 18 13 19 14 16 13 10 8 13 11 14 12 31 29 22 22 7 8 7 7 7 8 9 10 9 11 11 13 11 14 16 21 13 19 8 11 11 17 15 24 15 26 17 32 16 33 13 30 14 36 14 41 10 35 9 36 8 39 7 45 4 36 3 45v80l-3 45-4 36-7 45-8 39-11 44-12 39-11 32-11 28-12 28-14 30-11 22-12 22-15 26-14 22-18 27-13 18-14 19-13 16-8 10-11 13-9 10-7 8-9 10-16 17-22 22-8 7-7 7-8 7-10 9-11 9-13 11-14 11-21 16-19 13-11 8-17 11-24 15-26 15-32 17-33 16-30 13-36 14-41 14-35 10-36 9-39 8-45 7-37 4-25 2-20 1h-79l-45-3-36-4-45-7-39-8-44-11-39-12-40-14-39-16-35-16-26-13-22-12-26-15-22-14-27-18-18-13-19-14-16-13-10-8-13-11-14-12-31-29-22-22-7-8-7-7-7-8-9-10-9-11-11-13-11-14-16-21-13-19-8-11-11-17-15-24-15-26-17-32-16-33-13-30-14-36-14-41-12-42-9-38-7-36-6-39-4-36-3-44v-81l3-45 5-44 7-42 7-34 11-44 12-39 11-32 16-40 13-29 14-29 12-23 14-24 8-14 12-19 18-27 13-18 14-19 13-16 8-10 11-13 12-14 29-31 22-22 8-7 7-7 8-7 10-9 11-9 13-11 14-11 21-16 19-13 11-8 17-11 24-15 26-15 32-17 33-16 30-13 36-14 41-14 42-12 38-9 36-7 39-6 36-4z" /><path fill="#FEFEFE" d="M628 685h792l-1 17-24 269-31 348-15 168-2 7-314 87-7 2-9-1-248-69-68-19-2-6-30-337-41-460z" /><path fill="#E44C25" d="M773 847h498l1 3-8 100-1 1H883l9 81 1 17h359l-1 17-23 281-1 10-128 35-74 20-42-11-82-22-78-21-3-1-3-25-12-123v-10h99l2 4 7 67v7l16 4 81 23 11 3 10-1 98-28 4-1 1-2 10-118 1-7H801l-2-16-26-282z" /><path fill="#FEFEFE" d="M1032 465h53l13 22 13 21 5 8 2 1 2-5 13-22 15-24 1-1h52v150h-49v-73l-4 4-12 19-15 23-4 6h-2l-12-19-15-23-6-9-1 72h-49zM702 465h50v50h46v-50h50v150h-50v-50h-46v50h-50zM871 465h138v49h-44v101h-50l-1-100-43-1zM1227 465h50v101h71v49h-121z" /></svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 2048 2048"><path fill="#379AD6" d="M983 102h82l44 3 36 4 39 6 36 7 42 10 41 12 41 14 40 16 29 13 29 14 23 12 23 13 20 12 25 16 16 11 17 12 21 16 14 11 11 9 13 11 14 12 31 29 22 22 7 8 7 7 7 8 9 10 9 11 11 13 11 14 16 21 14 20 18 27 15 24 15 26 17 32 16 33 13 30 14 36 14 41 10 35 10 40 8 41 6 39 5 47 2 34v80l-3 45-5 43-7 43-9 43-11 42-12 38-12 34-15 37-18 39-12 24-12 22-14 24-13 21-20 30-12 17-16 21-11 14-9 11-11 13-12 14-29 31-22 22-8 7-7 7-8 7-10 9-11 9-13 11-17 13-18 14-19 13-11 8-17 11-24 15-28 16-28 15-22 11-36 16-35 14-34 12-32 10-41 11-41 9-49 8-43 5-46 3h-79l-45-3-43-5-43-7-43-9-42-11-38-12-34-12-39-16-35-16-26-13-23-13-20-11-24-15-30-20-18-13-19-14-16-13-10-8-13-11-14-12-31-29-22-22-7-8-7-7-7-8-9-10-9-11-11-13-13-17-14-18-13-19-8-11-11-17-15-24-12-21-12-22-12-23-12-25-13-30-14-36-14-41-10-35-10-40-8-41-6-39-4-36-3-45v-81l3-44 5-44 7-42 9-43 11-42 13-41 11-31 16-39 16-35 13-26 12-22 14-24 13-21 20-30 13-18 14-19 13-16 8-10 11-13 12-14 29-31 22-22 8-7 7-7 8-7 10-9 11-9 13-11 14-11 21-16 19-13 11-8 17-11 19-12 24-14 24-13 23-12 25-12 30-13 36-14 41-14 35-10 40-10 35-7 38-6 43-5z" /><path fill="#FEFEFE" d="M628 687h792v10l-26 281-25 271-22 239-1 5-319 86-9-1-75-20-156-42-63-17-22-6-2-16-22-238-32-347-18-195z" /><path fill="#379AD6" d="M1013 849h256v12l-6 81-1 5-85 36-130 55-21 9 227 1-1 20-23 277-1 7-86 24-115 32h-7l-195-57-3-2-12-143v-7h98l1 4 6 72 9 3 91 25 12 3 65-20 43-13 1-6 7-111 1-11H802l-2-21-4-61v-15l10-5 36-15 90-38 83-35 19-8-162 1h-86l-14-96v-2z" /><path fill="#FEFEFE" d="M963 469h123v52h-48l7 8 8 8 8 7 25 25v48H963v-47l1-1 46-1-47-47zM1137 469h122v52l-47 1 42 42 5 4v49h-122v-48l47-1-18-18-8-7-21-21zM789 469h122v52l-69 1-1 47h70v48H789z" /></svg>
                    </div>
                    <div>
                        <img src={img1} alt="js-icon" width={55} height={55} />
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 2048 2048" className="rounded-full"><path fill="#0179CB" d="M0 0h2048v2048H0z" /><path fill="#FEFEFE" d="M1444 746h27l45 3 24 3 26 5 24 7 20 8 20 10 17 11 12 9 11 9 15 14 7 7 7 8 10 11 11 14 11 15 6 10 2 7-5 5-16 12-18 12-43 29-22 14-17 11-18 11h-7l-8-6-9-11-10-11-7-8-13-13-13-10-16-8-12-4-21-3h-33l-17 4-16 8-11 8-5 5-7 8-7 14-4 17-1 10 1 22 4 16 7 14 8 10 10 9 16 11 21 12 28 14 23 11 33 15 13 5 35 17 36 18 22 12 20 12 21 14 16 12 13 11 10 9 16 16 9 11 10 14 9 15 8 16 8 19 7 24 6 29 3 24 1 12v35l-3 27-5 24-7 23-9 21-10 19-10 15-10 13-11 12-17 17-11 9-15 11-18 11-19 10-27 11-31 10-26 7-17 3-12 1h-112l-26-2-20-4-30-8-29-10-26-11-24-12-20-12-12-8-16-12-11-9-12-11-20-20-9-11-10-13-12-18-12-20-5-9 1-5 9-6 24-14 21-12 25-14 28-17 26-15 17-9 5-1 7 7 9 14 11 14 12 13 15 15 11 9 17 13 19 11 19 7 29 7 25 4h26l23-4 25-7 19-8 14-9 10-9 8-10 8-13 3-7 1-5v-42l-3-13-8-14-11-13-13-11-17-11-22-12-24-12-36-16-63-29-29-14-23-12-24-14-21-14-16-12-14-12-16-15-16-17-12-17-10-18-12-23-8-19-6-21-3-24-1-31v-45l1-20 3-18 6-18 9-21 10-21 10-17 8-10 10-11 7-8 14-14 11-9 18-13 18-10 16-8 25-10 26-8 27-6zM438 757h278l365 1 1 1v168l-1 1H816v755l-7 2-14 1H673l-23-1-23-2-3-1V928H358V759l1-1z" /></svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 2048 2048"><path fill="#00D8FE" d="M1405 171h14l23 2 20 4 21 7 16 8 16 10 15 13 10 10 11 14 12 18 13 25 9 23 6 18 8 32 5 29 4 38 1 17v64l-3 44-6 50-8 47-9 43-4 17 18 6 32 10 34 12 41 16 29 13 25 12 24 12 23 13 26 16 19 13 19 14 16 13 11 10 8 7 16 16 7 8 12 15 12 17 10 18 8 17 7 21 4 21 1 10v17l-2 18-5 21-8 21-10 20-11 17-12 16-11 13-11 12-16 16-8 7-13 11-17 13-18 13-20 13-25 15-18 10-27 14-25 12-30 13-36 14-34 12-34 11-7 2 11 50 7 39 6 44 4 44 1 19v64l-3 39-5 35-6 27-7 25-9 25-14 29-12 19-11 14-12 13-12 11-17 12-17 9-22 8-17 4-15 2-14 1h-17l-24-2-28-5-26-7-24-8-27-11-29-14-23-12-27-16-39-26-18-13-17-13-14-11-13-11-11-9-14-12-13-12-8-7-15-14-5-5-4 2-12 11-16 15-8 7-14 12-13 11-14 11-18 14-18 13-17 12-23 15-21 13-25 14-25 13-29 13-35 13-31 9-30 6-17 2-15 1h-16l-23-2-20-4-17-5-20-9-16-10-10-8-10-9-10-10-13-17-11-18-10-19-9-23-8-26-6-26-5-31-3-31-1-18v-51l2-35 4-39 7-48 8-42 10-44 1-3-16-4-49-16-37-14-33-14-28-13-30-15-23-13-23-14-18-12-17-12-14-11-11-9-14-12-17-16-14-15-9-11-10-13-10-15-10-18-7-15-8-24-4-20-1-10v-21l3-22 6-21 8-20 10-19 8-12 14-19 10-11 7-8 18-18 8-7 13-11 20-15 20-14 21-13 19-11 24-13 28-14 34-15 41-16 40-14 42-13 10-2-7-28-9-44-7-41-5-39-3-33-1-17-1-32v-14l1-31 3-34 5-33 7-30 7-23 9-22 8-17 11-18 12-16 11-12 9-9 16-12 18-10 15-6 21-6 18-3 11-1h29l27 3 29 6 25 7 28 10 26 11 31 15 23 13 14 8 24 15 22 15 18 13 19 14 16 13 10 8 13 11 11 9 13 12 8 7 13 12 7 7 4-2 9-9 8-7 15-14 8-7 28-24 28-22 20-15 20-14 18-12 19-12 24-14 32-17 29-13 29-11 31-9 29-6 17-2zm-10 83-24 4-23 6-23 8-26 11-30 15-24 14-21 13-19 13-14 10-19 14-16 13-10 8-13 11-14 12-13 12-8 7-16 15v4l8 8 7 8 10 11 9 11 10 11 9 11 12 14 11 14 13 16 10 13 14 18 28 38 13 18 6 9 72 8 63 9 57 10 53 11 12 2 2-5 9-42 7-39 5-36 4-42 1-18v-61l-3-35-5-32-7-28-6-18-8-18-7-13-10-14-7-8-13-10-12-6-15-4-6-1zm-774 1-20 3-16 6-11 7-10 9-9 11-8 13-9 19-9 27-6 27-4 28-2 24-1 28v14l1 30 3 38 6 46 8 44 10 46 2 8 9-1 53-11 58-10 63-9 63-7 10-1 4-4 12-17 14-19 16-21 12-16 13-16 10-13 14-17 11-13 9-11 9-10 9-11 14-15 7-8 9-10-1-4-8-7-7-7-8-7-11-10-11-9-14-12-14-11-15-12-18-13-17-12-15-10-19-12-21-12-24-13-24-11-26-10-18-6-24-6-19-3-11-1zm401 246-14 15-7 8-9 10-9 11-10 11-9 11-14 17-13 16-13 17-11 14-3 5h14l29-1h138l29 1h15l-2-4-12-16-11-14-13-16-11-14-11-13-9-11-9-10-9-11-14-15-7-8-3-3zm-11 214-58 1-67 3-30 2-8 1-11 15-26 40-12 19-13 21-17 28-15 26-10 17-15 27-15 28-28 54-13 27 5 12 23 46 10 19 14 26 15 27 16 28 17 29 13 21 16 26 13 20 29 44 5 6 28 2 46 2 34 1h127l56-2 52-3 7-2 7-10 13-20 14-22 15-24 17-28 16-27 15-26 14-25 13-23 14-27 10-19 17-33 8-17-1-5-19-38-12-22-13-25-10-18-14-25-14-24-15-26-14-23-15-24-12-19-14-22-21-31-1-1-21-2-55-3-29-1-58-1zm292 18 2 5 15 24 17 28 16 27 15 26 14 25 13 23 17 32 4 5 6-13 20-50 13-35 14-40 8-25v-2l-30-7-58-11-51-8-29-4zm-567 0-50 7-59 10-45 9-13 3 2 9 13 40 14 39 15 39 16 39 3-3 14-27 12-22 15-27 14-24 15-26 14-23 15-24 11-17v-2zm-250 50-40 12-38 13-41 16-33 15-25 12-23 13-16 9-30 20-17 13-11 9-12 11-19 19-11 14-10 15-10 21-4 15-1 16 2 14 6 18 10 19 12 17 11 13 12 13 7 7 8 7 14 12 16 12 20 14 21 13 23 13 23 12 29 14 38 16 41 15 37 12 10 3 4-1 18-55 13-37 18-47 16-39 16-37 12-27-1-7-12-26-18-42-18-45-15-40-13-37-15-46zm1070 1-12 36-13 38-17 45-15 37-18 42-13 29-5 11 3 9 12 25 16 36 18 43 15 38 14 38 16 47 3 8 11-3 40-13 40-15 35-15 30-14 27-14 27-16 22-14 16-12 13-10 13-11 12-11 14-14 9-11 9-12 8-13 8-17 4-13 1-6v-19l-4-16-7-16-9-15-10-13-11-12-7-8-13-12-13-11-20-15-24-16-20-12-18-10-23-12-25-12-38-16-35-13-36-12-26-8zm-140 334-14 27-12 22-15 27-14 25-13 22-19 32-13 21-14 22v1l14-1 56-8 52-9 53-11 4-1-3-11-14-41-15-40-17-42-15-35zm-787 4-13 31-17 44-14 39-17 51 1 4 44 9 53 9 59 8 19 2-6-11-14-22-16-26-13-22-14-24-13-23-15-27-15-28-8-14zm870 244-48 10-49 9-52 8-65 8-41 4-11 15-14 20-28 38-13 17-10 13-11 14-9 11-13 16-22 26-13 15-12 13-5 7 14 14 8 7 14 13 11 9 10 9 11 9 16 13 12 9 19 14 36 24 20 12 18 10 19 10 25 11 25 9 24 7 21 4 8 1h33l15-3 14-5 14-9 14-14 9-13 10-18 9-23 7-23 6-29 4-31 2-29v-50l-3-44-4-34-7-44-9-43-4-17zm-954 4-6 24-9 44-7 43-5 44-2 31v56l3 36 5 30 6 25 7 20 8 18 10 16 8 10 11 11 13 8 13 5 15 3 10 1h17l26-3 23-5 29-9 27-11 25-12 25-13 25-15 30-20 14-10 16-12 18-14 13-11 11-9 15-13 26-24 3-3-2-4-8-8-7-8-11-12-9-11-11-12-9-11-13-15-8-10-13-16-13-17-12-15-21-28-26-36-4-2-63-6-64-8-57-9-57-11-9-2zm366 43 2 4 12 16 13 16 11 14 14 17 11 13 9 11 10 11 9 11 16 17 7 8 7-6 9-10 9-11 10-11 9-11 11-13 8-10 22-28 13-17 14-19 1-2h-23l-34 1H960z" /><path fill="#00D8FE" d="M1014 851h17l19 2 25 6 20 8 17 9 17 12 12 11 13 13 11 15 9 15 8 17 6 18 4 19 2 20v13l-2 21-6 25-7 18-11 21-10 14-13 15-13 12-15 11-17 10-16 7-15 5-18 4-16 2h-26l-21-3-19-5-20-8-17-9-14-10-13-11-12-12-13-17-9-15-9-19-6-19-4-20-1-9v-28l3-21 5-19 8-20 8-15 11-16 12-14 9-9 14-11 15-10 16-8 15-6 17-5 18-3z" /></svg>
                    </div>
                    <div>
                        <img src={img2} alt="next-js" width={50} height={50} className="bg-white rounded-full border-[1px]" />
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 1200 1200"><path fill="#447AA1" d="M565 0h72l44 5 36 6 28 6 35 10 27 9 37 15 39 19 24 14 18 11 15 10 14 10 12 9 16 13 10 8v2l4 2 14 13 8 7 18 18 7 8 18 20 10 13 12 15 11 16 10 15 12 19 14 25 15 30 10 23 13 34 11 36 9 38 6 36 4 34 2 20v60l-5 49-6 37-6 28-8 30-12 36-14 34-16 33-10 19-12 20-10 16-9 13-13 18-9 11-11 14-15 16-7 8-2 3h-2l-2 4-14 14-8 7-13 12-8 7-16 13-17 13-14 10-20 13-20 12-25 14-29 14-29 12-24 9-29 9-40 10-34 6-38 5-22 2h-62l-53-6-36-6-31-7-31-9-32-11-29-12-25-12-20-10-24-14-22-14-20-14-13-10-15-12-8-7-13-12-10-9-12-11-7-7-7-8-12-13-9-10-11-14-12-15-14-20-16-25-15-26-9-17-11-23-13-32-7-19-10-32-7-27-5-25-4-24-3-23-3-29v-72l6-51 4-24 6-28 8-30 12-37 14-34 11-24 13-25 16-27 13-20 14-20 11-14 8-10 7-8 18-20 7-8 20-20h2v-2l8-7 10-9 8-7 13-10 14-11 14-10 15-10 11-7 15-9 14-8 19-10 27-13 35-14 36-12 30-8 34-7 33-5z" /><path fill="#E7862D" d="M748 582h29l16 4 14 7 11 9 8 11 7 15 5 19 2 23v22l-1 16-4 19-6 15-6 12-9 12h-2v2l-2 1v3l12 5 21 11 1 4-10 15-4 3-35-19-10-6h-8l-13 2h-11l-17-2-14-4-13-8-9-9-7-11-6-15-4-16-2-11v-47l4-21 6-16 9-16 9-10h2l1-3 9-6 14-7z" /><path fill="#FEFEFE" d="M187 584h37l3 3 7 21 14 43 23 70 2 9h2l1-9 26-78 14-43 5-14 2-2h37l2 2 3 25 6 62 4 55 2 55-5 1h-28l-1-4-4-84-4-49-1-20-6 16-8 27-10 31-12 37-14 45-1 1h-25l-3-5-21-66-14-45-9-28-4-12-2 29-4 90-1 36-1 1h-29l-1-1 1-30 3-58 4-50 4-38 3-21zM696 248h7l15 4 16 8 13 9 3 2 17 1 19 5 12 5 14 8 17 12 14 11 12 11 9 9 11 14 12 17 9 16 17 39 17 35 5 7 24 11 21 13 12 9 13 11 8 7 7 9-1 3-9 3-42 8 6 7 18 12 12 9 14 13 14 16v4l-5-2-11-9-17-10-24-13-12-9-8-8-6-10-1-7 5-3 17-5 19-3 13-1-5-5-23-16-13-8-15-6-17-6-6-4-6-8-9-17-15-33-12-27-11-19-10-14-11-13-11-12-11-9-16-12-15-9-15-7-13-4-25-3-5-3-10-7-16-8-12-4h-6l-3 3v7l6 11 12 16 8 14 7 17 6 18 8 17 7 9 4 6v9l-7 25-1 5-1 21 2 18 5 16 5 8 6 5 1-2 2-18 4-15 5-9 6-8 3 1 13 29 9 17 12 19 11 13 7 8 5 6v2l-5-2-8-8-8-7-12-11-7-8-9-13-9-16-1 3-2 17-4 11-6 4h-10l-5-3-6-5-8-13-5-16-3-17v-18l4-23 5-18v-5h-2l-9-14-8-17-12-33-6-11-10-13-8-12-3-9v-10l3-7 6-5z" /><path fill="#447AA1" d="M752 606h15l10 3 11 7 7 8 6 13 4 18 2 25v22l-3 20-4 13-6 11-9 9-12 6-4 1h-17l-11-4-6-4-5-5-4-5-6-13-4-16-2-15v-31l3-21 4-15 5-9 9-10 7-5z" /><path fill="#E7862D" d="M591 582h25l17 4 14 5 7 6-1 6-4 8-1 1-9-1-17-4-7-1h-12l-12 4-10 9-3 6v13l5 9 6 7 14 9 25 14 16 10 12 11 5 6 4 8 2 10v13l-4 15-7 12-7 8-14 9-13 5-12 3h-16l-17-3-16-5-14-7-4-4 1-7 5-8 5-1 16 6 12 3 6 1h10l13-3 12-6 5-7 3-7v-12l-5-10-7-7-10-7-25-14-14-8-11-9-7-8-5-10-2-8-1-9v-9l2-10 6-11 9-10 8-7 11-5z" /><path fill="#FEFEFE" d="M394 636h30l3 2 14 45 13 43 6 25 2 4 3-12 6-19 8-32 8-43 2-12 2-1h29l1 3-6 31-10 40-10 31-10 25-8 16-9 16-14 18-8 7-14 9-13 4h-15l-10-3-4-3v-14l2-3h18l11-3 8-6 6-9 2-7-1-12-5-19-20-62-18-57z" /><path fill="#E7862D" d="M872 584h27l2 2 1 173h60l2 3v22h-94l-1-2V586zM1024 759h6l2 3v17l-1 1-14 1-1-5 4-4 1-9zM1000 759h7l2 2v10l-2 11-2 1h-6l-1-1v-21zM985 758h10l1 5-3 11-1 9-1 1h-5l-1-1-1-24z" /><path fill="#FEFEFE" d="M750 308h7l8 5 3 5v8l-4 4h-3l-4-9-6-8z" /></svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="55" viewBox="0 0 2048 1228"><path fill="#06B6D4" d="M484 614h57l44 3 32 4 34 6 29 7 24 7 24 8 27 11 29 14 19 10 20 12 15 10 17 12 17 13 10 8 13 11 11 9 17 16 13 12 92 92 8 7 15 14 11 9 16 13 20 14 20 12 22 11 18 7 25 7 32 6 20 2h45l24-3 24-5 26-8 24-10 20-10 20-12 17-12 14-11 13-11 12-11 26-26 7-8 11-13 11-14 5-7 1 4-10 36-12 36-14 36-12 26-12 24-14 24-10 16-14 20-10 13-9 11-12 14-31 31-11 9-13 11-18 13-22 14-25 14-25 12-28 11-30 10-36 9-31 6-39 5-25 2-20 1h-56l-34-2-36-4-36-6-30-7-28-8-29-10-31-13-30-15-27-16-27-18-19-14-16-13-11-9-10-9-8-7-12-11-16-15-89-89-8-7-15-14-11-9-15-12-17-12-21-13-16-8-18-8-21-7-31-7-22-3-11-1h-45l-24 3-24 5-26 8-24 10-20 10-18 11-16 11-16 12-15 13-12 11-24 24-7 8-12 14-13 17-4 4 2-11 10-35 13-38 13-32 13-28 13-25 13-22 14-21 11-15 11-14 11-13 12-13 23-23 11-9 13-11 18-13 15-10 22-13 23-12 30-13 25-9 35-10 31-7 38-6 29-3zM996 0h56l34 2 36 4 36 6 30 7 28 8 29 10 31 13 30 15 27 16 27 18 19 14 16 13 11 9 10 9 8 7 10 9 17 16 90 90 8 7 15 14 11 9 15 12 17 12 21 13 16 8 18 8 21 7 31 7 22 3 11 1h44l25-3 24-5 26-8 24-10 27-14 17-11 14-10 13-10 14-12 12-11 24-24 7-8 12-14 13-17 4-4-2 11-10 35-13 38-13 32-13 28-13 25-15 25-12 18-14 19-13 16-9 10-7 8-25 25-11 9-13 11-18 13-15 10-24 14-21 11-28 12-27 10-35 10-27 6-35 6-36 4-34 2h-56l-34-2-36-4-36-6-31-7-27-8-24-8-29-12-25-12-21-11-20-12-15-10-17-12-17-13-10-8-13-11-11-9-17-16-13-12-92-92-8-7-15-14-11-9-16-13-17-12-21-13-24-12-24-9-28-7-23-4-20-2h-45l-24 3-24 5-26 8-24 10-20 10-20 12-17 12-13 10-14 12-12 11-26 26-7 8-12 14-13 17-3 3 1-8 10-35 12-36 14-35 11-24 12-24 14-24 10-16 14-20 10-13 9-11 12-14 10-10 2-3h2v-2h2v-2l8-7 8-8 11-9 16-13 20-14 21-13 24-13 21-10 28-11 30-10 36-9 31-6 39-5 24-2z" /></svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 2048 2048"><path fill="#539E43" d="M1012 104h24l20 3 18 5 18 8 24 14 156 90 24 14 28 16 24 14 156 90 24 14 182 105 24 14 26 15 17 10 14 11 8 7 7 8 10 13 9 16 7 16 5 18 2 12 1 11v791l-2 18-4 17-6 16-10 19-8 11-11 13-12 11-16 11-338 195-24 14-28 16-24 14-28 16-24 14-28 16-24 14-156 90-15 8-19 7-19 4-9 1h-23l-19-3-15-4-21-9-27-16-29-17-98-58-71-42-16-10-7-7-1-2v-6l6-5 46-17 20-9 27-14 18-10 5-1 8 2 29 17 25 15 29 17 25 15 29 17 25 15 16 9 3 1h9l16-8 52-30 24-14 28-16 24-14 28-16 24-14 28-16 24-14 416-240 17-10 5-5 3-6V628l-3-6-5-5-26-15-24-14-28-16-24-14-28-16-26-15-24-14-28-16-24-14-28-16-24-14-28-16-24-14-28-16-24-14-28-16-24-14-28-16-24-14-28-16-24-14-28-16-24-14-28-16-24-14-28-16-6-2h-8l-16 8-24 14-130 75-24 14-130 75-24 14-156 90-24 14-28 16-24 14-78 45-24 14-6 8-1 3v789l4 8 5 4 28 16 156 90 17 8 21 7 22 4h24l16-3 13-5 13-7 13-11 10-13 8-17 4-15 1-7 1-781 4-8 5-4 9-3h88l10 3 7 8 2 6v785l-2 25-4 25-6 22-8 21-8 16-10 16-11 13-9 10-11 9-12 9-18 10-16 7-19 6-18 4-22 3-17 1h-26l-26-2-25-5-36-12-32-14-19-9-24-14-28-16-130-75-16-12-11-10-9-11-9-13-10-19-7-21-3-16-1-12V628l2-18 4-17 6-16 10-19 10-14 14-15 15-12 22-13 130-75 24-14 156-90 24-14 156-90 24-14 130-75 21-12 15-7 20-6z" /><path fill="#539E43" d="M1191 661h30l44 2 38 4 29 5 30 7 22 7 21 8 21 10 20 12 13 10 13 11 14 14 11 14 10 15 12 23 8 20 7 24 5 26 2 15v17l-5 8-8 5h-99l-6-3-7-8-7-26-8-21-8-15-10-14-14-14-13-9-15-8-19-7-25-6-28-4-27-2h-69l-32 3-23 4-19 5-19 7-16 9-13 11-8 11-6 12-4 17v28l3 12 6 10 9 8 17 9 27 9 30 7 44 8 59 9 72 10 43 7 43 9 31 8 30 10 21 9 16 8 15 9 12 9 12 11 10 10 12 17 8 16 6 16 5 19 3 19 1 12v34l-3 25-5 22-7 20-9 19-10 16-10 13-11 12-13 13-17 13-15 10-24 13-26 11-31 10-34 8-30 5-39 4-16 1h-76l-41-3-32-4-28-5-36-9-32-11-20-9-21-11-21-14-11-9-10-9-15-15-10-13-11-17-8-15-9-23-6-21-4-23-2-21v-21l4-8 6-5 5-2h96l8 4 6 7 5 25 6 22 8 19 10 16 13 14 15 11 15 8 21 8 28 7 26 4 32 3 20 1h63l32-2 32-4 27-6 21-7 16-8 11-7 12-11 9-12 7-16 4-18v-29l-3-12-6-11-10-10-11-7-16-8-27-9-28-7-44-8-52-7-81-9-41-6-36-7-31-8-27-9-21-9-23-12-17-12-14-12-8-8-13-17-10-18-6-15-6-21-4-27v-41l4-27 6-21 6-15 8-16 9-14 10-13 12-13 12-11 13-10 17-11 27-14 23-9 22-7 24-6 27-5 34-4z" /></svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" className="bg-white rounded-full p-[1px]" viewBox="0 0 1676 2048"><path d="M841 15h17l15 2 15 4 16 7 14 9 14 12 10 12 9 15 13 27 13 28 18 38 400 850 17 36 13 28 19 40 192 408 15 32 5 15 3 16v27l-3 16-7 19-9 16-8 10-9 10-12 10-15 9-14 6-60 18-544 161-463 137-22 6-16 2h-14l-16-2-18-5-21-10-11-8-10-9-9-9-10-14-10-16-13-20-22-34-16-25-13-20-11-17-16-25-13-20-22-34-16-25-13-20-11-17-16-25-15-23-16-25-13-20-11-17-16-25-13-20-22-34-16-25-13-20-11-17-16-25-14-21v-123l16-26 13-21 16-26 13-21 16-26 13-21 16-26 13-21 16-26 13-21 16-26 13-21 16-26 13-21 16-26 13-21 16-26 26-42 16-26 13-21 16-26 13-21 16-26 13-21 16-26 13-21 16-26 13-21 16-26 13-21 16-26 13-21 16-26 26-42 16-26 13-21 16-26 13-21 16-26 13-21 16-26 13-21 16-26 13-21 16-26 13-21 16-26 13-21 16-26 13-21 7-11 8-10 7-8 14-11 14-8 12-5 14-4zm46 251-9 2-8 5-8 9-4 13-23 111-28 134-34 163-28 134-34 163-29 139-28 134-34 163-28 134-34 163-24 115v14l4 11 8 10 9 6 9 3h16l893-264 23-7 8-4 10-9 6-9 3-9 1-5v-10l-3-12-14-29-13-28-18-38-17-36-320-680-17-36-13-28-18-38-17-36-144-306-12-26-9-10-10-5-5-1z" /></svg>
                    </div>
                    {/* <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 2048 2048"><path fill="#336791" d="M1056 175h15l27 1 31 3 33 5 37 8 34 10 27 10 25 11 25 12 21 12 19 12 20 14 12 9 14 11 14 12 10 9 15 14 13 13 7 8 12 13 9 11 14 17 14 19 16 24 14 24 14 27 15 31 13 28 2 5v3l-68 1-30 3-23 5-24 8-21 11-14 10-12 11-8 9-9 14-8 16-6 19-3 15-2 23v13l2 28 4 28 6 27 8 28 9 26 15 36 13 28 19 39 20 39 18 35 13 23 15 28 16 33 13 23 12 18 20 26 14 18v2l-28 13-12 8-10 9-7 8-8 14-5 12-4 14-2 14-2 34-10 98-15 124-13 98-9 60-6 30-6 23-7 21-7 16-11 18-11 14-13 13-13 10-16 10-17 8-33 11-32 9-31 6-8 1h-35l-17-3-17-5-19-9-13-9-10-9-10-10-10-14-10-17-9-17-6-15-5-16-5-30-4-32-5-59-3-46-1-102v-201l-3-18-5-15-8-16-12-16-13-13-15-10-16-7-13-4-32-1-1-2 14-42 30-75 19-48 12-31 7-24 5-24 3-27 2-41 1-36v-20l-1-23-5-39-10-60-8-38-8-24-8-16-8-12-9-11-8-8-15-11-16-9-18-7-22-5-21-2h-20l-25 2-24 4-24 6-33 11-30 13-23 11h-2l1-21 9-56 8-39 10-37 11-33 11-27 12-26 11-21 12-20 8-12 10-14 9-11 12-14 25-25 11-9 16-12 19-12 16-9 20-9 24-9 29-8 26-5 30-3z" /><path fill="#336791" d="M505 179h24l57 4 38 4 37 6 42 9 45 12 32 10-2 5-11 13-11 14-14 18-13 18-10 15-10 18-12 23-13 30-11 29-10 30-10 37-8 36-5 28-5 40-5 56-1 34 4 91v63l-3 46-7 75-1 29 1 21 4 28 6 25 8 24 8 18 8 16 10 17 12 17 13 16 12 13 7 7 6 5-6 8-10 11-7 8-18 20-7 8-10 11-7 8-11 12-7 8-12 14-9 10-9 11-12 13-9 11-14 15-7 8-13 13-15 11-11 5-14 3-16-2-12-5-11-7-13-10-13-12-10-11-13-17-13-20-13-22-13-23-14-28-18-41-18-44-13-35-17-49-17-52-17-58-15-57-20-81-14-63-12-60-13-83-3-31v-64l2-34 4-34 6-31 8-30 9-26 11-25 9-17 12-19 11-14 9-10 7-8 11-11 11-9 13-10 19-12 21-11 25-10 25-8 27-6 19-3z" /><path fill="#336791" d="M1357 48h174l26 6 53 11 31 8 36 12 24 10 26 12 23 12 27 16 18 12 19 14 14 12 11 9 15 14 8 7 16 15 16 17 10 11 11 14 12 17 10 18 9 21 6 18 5 21 4 36 2 27v41l-2 43-3 36-5 38-7 39-11 49-12 47-15 52-12 38-16 46-14 36-15 36-21 49-12 27-14 29-18 36-12 22-14 27-12 22-18 34 1 1 38-4 41-7 27-4 21-2h26l14 2 16 5 16 8 12 9 12 12 9 14 6 14 4 18v27l-3 15-6 16-8 15-10 13-10 11-7 8-16 15-14 11-16 12-19 12-26 15-22 11-23 9-24 7-39 9-38 7-27 3-19 1-64 1-2 2-2 15-2 54-5 60-5 50-8 54-6 27-10 36-15 46-10 24-12 23-12 19-10 14-11 14-11 12-5 6-8 7-11 10-18 13-21 13-24 12-26 10-26 8-40 10-35 7-26 3h-30l-21-2-26-5-19-6-17-7-17-9-17-12-14-12-15-15-9-11-10-14-9-15-8-16-12-28-11-31-10-34-7-31-6-45-7-71-1-16-2-75-1-24v-17l-25 9-29 8-21 4-16 2-34 2h-17l-35-3-32-5-25-6-27-9-29-14-14-9-15-12-7-8-2-2-6 1-11 9-20 12-17 8-22 7-23 4h-35l-22-4-24-8-17-8-19-12-12-9-13-11-15-14-12-13-11-13-12-16-14-20-17-28-15-27-17-33-15-32-15-36-14-37-21-58-14-41-15-49-18-64-15-55-11-44-14-63-14-67-9-45-7-42-4-32 1-7 2-5-1-7-6-4V487l7-6-1-9-2-5 1-11 7-45 7-33 8-29 10-29 11-25 8-17 10-18 12-19 12-17 11-14 12-14 24-24 11-9 17-13 21-14 17-10 25-13 27-11 30-10 31-8 32-6 34-4 15-1h71l35 2 42 4 38 5 26 5 37 9 39 10 50 14 6 1h8l10-3 24-13 24-10 36-12 26-7 36-7 24-3 14-1h57l79 4 38 5 16 1 14-2 32-9 32-7 38-6 20-3zm62 50-48 3-36 4-33 6-65 15-19 5-8 3h-9l-35-7-46-6-35-3h-32l-49 3-30 4-30 7-36 12-26 11-27 14-18 11h-8l-69-22-41-11-41-9-35-6-67-8-13-1h-73l-30 2-29 4-34 7-29 8-27 10-29 14-19 11-19 13-14 11-12 11-10 9-9 10-12 14-14 19-13 21-14 27-11 26-11 33-6 25-6 38-6 48-2 25-1 38 1 30 3 31 11 77 10 52 13 61 15 65 12 48 19 70 17 57 17 52 19 53 15 41 15 36 13 29 19 38 13 23 14 23 10 15 10 14 11 14 9 10 7 8 9 9 11 9 13 10 15 9 14 6 13 4 11 2h30l18-4 16-6 14-8 12-9 12-11 12-12 7-8 12-14 13-15 12-14 11-12 7-8 12-14 11-12 7-8 9-10 7-8 9-10 7-8 18-20 12-13 5-3 8 1 27 11 24 7 24 4 24 3-12 15-10 13-9 11-12 12-13 8-25 8-38 10-38 9-21 7-17 8-9 7-9 9-7 14-2 8v13l4 13 7 11 11 11 15 10 16 9 23 9 24 6 26 4 21 2h36l39-3 24-5 21-7 25-12 29-17 21-13 2-1v24l1 74 2 75 3 65 4 53 5 44 5 30 5 19 8 22 12 25 13 21 10 13 9 11 11 12 10 9 17 12 16 9 19 8 22 6 20 3 13 1h34l27-3 31-7 26-7 30-10 25-11 18-10 16-11 11-9 10-9 11-11 13-17 9-14 12-23 9-23 8-26 7-33 8-49 7-51 7-53 7-56 11-90 4-36v-3l38 6 23 1h18l25-1 40-4 33-5 30-7 22-7 19-7 20-9 19-10 19-12 12-9 10-8 14-12 20-20 7-10 6-12 3-14-1-13-4-10-6-8-8-7-12-5-12-2h-14l-24 3-36 6-56 7-11 1h-34l-27-3-16-4-16-8 2-6 14-22 12-19 17-28 14-25 10-18 14-26 18-35 19-38 16-36 17-40 15-37 15-39 14-40 15-45 14-47 13-49 9-40 7-38 5-35 6-59 1-16v-31l-3-43-3-28-5-19-7-19-8-16-10-16-11-13-9-10-11-12-22-22-11-9-12-11-11-9-18-14-18-12-20-12-24-13-28-13-31-12-31-10-40-10-33-6-30-4-25-2z" /><path fill="#336791" d="M1421 154h42l32 2 34 4 34 6 40 10 30 10 22 9 25 12 20 11 24 16 18 13 19 14 11 9 10 9 8 7 8 8 7 8 13 15 13 17 7 12 6 17 3 16 3 37 1 24v21l-2 33-6 46-10 57-9 41-11 44-14 48-13 40-16 44-14 35-19 46-13 30-16 36-18 38-13 26-12 22-14 26-16 27-15 25-11 18-2 3-5-2-3-3 2-6 14-30 11-28 6-22 4-22 3-34 1-21v-12l-2-33-9-92-2-28v-57l5-40 7-51 2-23 2-35 1-10v-18l-3-19-6-21-11-30-11-25-12-25-14-26-16-26-13-19-13-18-10-13-11-14-14-17-12-14-18-20-19-19-8-7-10-9-11-9-14-11-19-14-26-17-24-14-29-16-14-8 4-2 44-6 53-5zM841 618h33l20 4 13 5 12 7 11 10 9 13 7 16 6 25 7 37 6 39 3 26 3 50v35l-2 27-5 33-6 26-12 36-18 42-18 43-13 34-12 35-7 23h-12l-25-4-24-7-18-8-15-8-12-8-13-10-12-11-6-5-7-8-10-12-12-18-10-18-10-24-7-23-4-19-2-17v-38l7-57 1-14 2-55 1-57-1-42-2-24v-15l4-6 11-8 25-14 25-12 24-9 23-7 28-6zm6 28-13 5-7 6-3 8 1 9 7 14 8 10 7 6 14 7 9 2h19l12-3 11-6 10-9 6-10 1-4v-7l-4-8-7-7-10-6-15-5-12-2z" /><path fill="#336791" d="M1503 609h37l36 1 7 1 3 3v12l-7 59-6 49-3 42v39l5 51 5 49 3 55v29l-2 22-5 25-9 27-5 11h-2l-18-38-12-22-15-28-12-22-15-28-17-33-15-32-15-36-16-42-7-21-6-24-4-24-2-23 1-21 4-21 5-13 6-10 11-12 14-9 12-6 19-6 16-3zm-4 22-21 3-16 5-9 5-5 5-3 4-1 3v7l3 7 7 8 7 6 13 6 5 1h16l11-3 14-7 10-10 6-11 2-5v-11l-4-6-9-4-16-3zM946 1253h14l8 4 10 9 8 9 7 14 2 7v18l-4 11-13 16-11 12-14 14-17 13-15 9-19 9-21 7-18 4-22 3h-44l-27-4-25-6-15-5-14-7 2-4 73-17 28-8 20-8 15-8 11-8 10-9 9-9 9-11 11-13 9-11 12-14 13-13zM1589 1248h14l10 4 12 7 19 7 18 4 37 4h27l54-5 34-4 19-3h5v3l-44 29-25 13-24 9-25 7-29 6-20 3-26 2-21 1h-26l-20-2-28-7-5-5 1-19 3-19 4-11 4-6 7-7 11-6 10-4z" /></svg>
                        </div> */}
                    <div>
                        <img src={img3} width={53} height={50} />
                    </div>
                    <div>
                        <img src={img4} width={55} height={55} />
                    </div>
                </motion.div>
            </div>
            <div>
                <Service />
            </div>
        </div >
    )
}