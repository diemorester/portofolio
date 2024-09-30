import { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { IoLogoGithub } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClose = (): void => setIsOpen(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <div className="fixed w-full z-50 top-0 left-0">
            <div className="flex justify-between px-8 py-5">
                <div className="z-50" onClick={() => setIsOpen(!isOpen)}>
                    {!isOpen ? (
                        <button className="fill-mono hover:fill-white" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 2048 2048"><path d="M49 38h1964v40l-1 2 1 2 1 348v233l-8 7-18 12-13 9-6 6-7 2-11 9-5 3-11 7-22 16-6 5-11 6-9 7-11 7-17 12-15 10-17 12-8 6-16 10-10 8-16 10-18 13-12 8-14 9-14 10-18 13-10 7-4 3-8 4-12 9-20 14-11 8-5 4-13 8-8 6-16 10-18 13-8 6-11 7-15 10-16 11-20 14-12 8-6 5-8 4-16 12-18 12-23 16-14 10-14 9-14 10-10 7-19 13-15 10-20 14-14 10-18 12-5 4-15 10-14 10-33 22-17 12-15 10-13 9-16 11-15 11-5 4-10 6-12 8-13 9-11 7-22 16-5 1-3 19 1 5-1 2v25h8l7-1h5l3 2 3-2 6 1v2l7-3 4 2 8-2 4 1v2l6-1 2 1 5-3 9 1 2-1 4 2h5l3-2 6 1 7 1 3-2 6 1 7 1 1-1h6l5 1h14l1-1h9l7-1 9 1 8 1 1-1h15l1 1h9l1-1h34l2 1 3-1h12l8 1 1-1h9l8-1 3 1h13l4 1 2-2h8l5 1 1-1h7l4 1h15l4-1 12 2 3-2 13 1v2l4-2h7v2l6-3h8l5 3v-2h6l3 1 5-2 8 1 3-1 7 2 1-1h8l4-1h15l7 1 5-1 10 2 4-2h17l6 1 5-1 5 1 10 1 2-1h10l3-1 9 2 5-2 2 1 20 1 3-2 7 1h13l4-1 4 2 11-1h8l4 1 4-2 10 3v-2l3-1 10 2 2-2 8 1h26l4 1 3-2 10 1 4-1 8 2 4-2h9l6 1 5-1 9 3v-2l11-1 5 2 5-2 9 2 2-2h8l4 1 5-1 5 1 3-1 5 2 3-2h8l5 2 5-2 4 2 6-1 3 1 3-1 5 1 5-2 9 2 6-2 17 1 5 1 1-1h15l7 2 1 2v16l2 4-2 6v19l2 3-1 4-1 3 2 5-2 4 2 3-1 5-1 4v8l2 3-2 9 1 6 1 2-1 11-1 5 2 3-2 8v9l2 3v6l-2 2-1 6h2l1 4-2 7 1 6 1 4-2 4 2 3-2 8v29l2 3v5l-2 3v21l2 3-1 4v4l1 4-2 5 2 5-2 6v8l2 5-2 5 1 1v13l-1 3v16l1 1-1 48 2 5-1 2-1 19 2 5-2 5v20l1 4v12l-1 16 2 5-2 5v39l2 5-2 6 2 7-2 6v18l1 1v20l-1 4v8l2 4v5l-2 3 1 6 1 4-2 3v5l2 2-1 5-1 1v5l2 2-1 4-2 6H34l-4-5-1-49-1-1v-5h2l-1-20-1-6 1-1v-12l-1-9 1-4v-112l-1-4 1-1 1-139v-256l2-4 11-9 43-30 14-10 12-8 14-10 18-13 12-9 30-20 30-22 14-9 28-20 19-13 12-9 11-8 27-18 18-13 10-7 14-10 18-12 16-12 25-17 20-14 14-10 15-11 36-24 13-10 12-8 15-11 20-14 33-23 19-13 12-9 21-14 13-10 12-8 11-8 24-16 4-5 14-8 14-10 13-9 22-16 11-7 10-7 17-12 10-8 9-5 10-8 18-12 8-6 21-14 14-10 11-8 8-6 16-10 13-10 2-1 1-5 1-33v-13H50l-1-1-1-11-1-4 2-3-1-5-1-6 1-1v-16l-1-5 1-5-1-5 2-4-2-12 1-5-1-5 1-1v-24l-1-5 2-3-2-13 2-3-1-21-1-3v-11l2-3-2-20 2-4-2-10 2-2-1-6-1-5 2-2-1-9-1-5 1-5-1-5 1-15v-30l-1-6 1-2v-14l-1-7 1-2v-28l-1-6 1-1v-65l-1-6 1-1v-24l-1-13 2-4-2-8 1-5-1-7 1-17-1-2v-7l2-5-2-3 1-4V90l-1-2v-8l1-1-1-9 1-6-1-4 2-8-1-10z" /></svg>
                        </button>
                    ) : (
                        <button>
                            <ImCross size={30} className="fill-mono hover:fill-white" />
                        </button>)}
                </div>
            </div>
            <div className={`transition-all ease-in-out duration-700 fixed inset-0 bg-black z-40 ${isOpen ? 'w-screen h-screen' : 'h-0 overflow-hidden'}`}>
                <div className={`flex flex-col justify-center gap-3 text-3xl font-bold items-center absolute w-full h-full px-8 transition-opacity duration-700 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                    <div>
                        <a href="/" className="text-mono hover:text-white" onClick={handleClose}>HOME</a>
                    </div>
                    <div>
                        <a href="#about" className="text-mono hover:text-white" onClick={handleClose}>ABOUT</a>
                    </div>
                    <div>
                        <a href="" className="text-mono hover:text-white" onClick={handleClose}>SKILLS</a>
                    </div>
                    <div>
                        <a href="" className="text-mono hover:text-white" onClick={handleClose}>PROJECTS</a>
                    </div>
                    <div>
                        <a href="" className="text-mono hover:text-white" onClick={handleClose}>SERVICES</a>
                    </div>
                    <div className="flex gap-6 pt-3">
                        <a href="https://github.com/diemorester" target="_blank" rel="noopener noreferrer">
                            <IoLogoGithub size={35} className="fill-mono hover:fill-white" />
                        </a>
                        <a href="http://discordapp.com/users/388771161208782860" target="_blank" rel="noopener noreferrer">
                            <FaDiscord size={35} className="fill-mono hover:fill-white" />
                        </a>
                        <a href="https://wa.link/fw9mfb" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp size={35} className="fill-mono hover:fill-white" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}