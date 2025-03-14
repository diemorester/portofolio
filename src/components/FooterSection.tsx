export default function FooterSection() {
    return (
        <>
            <footer id="footer-section" className="w-full h-screen z-0 place-content-center items-center fixed bottom-0 left-0 right-0 pointer-events-auto bg-off-white text-black">
                <div className="flex flex-wrap gap-10 justify-center md:gap-[120px] md:text-3xl text-center">
                    <a href="https://wa.link/fw9mfb" target="_blank" className="relative group">
                        <button>
                            <span className="relative">WhatsApp</span>
                            <span className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                        </button>
                    </a>
                    <a href="http://discordapp.com/users/388771161208782860" target="_blank" className="relative group">
                        <button>
                            <span className="relative">Discord</span>
                            <span className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                        </button>
                    </a>
                    <a href="https://x.com/diemorester" target="_blank" className="relative group">
                        <button>
                            <span className="relative">Twitter</span>
                            <span className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                        </button>
                    </a>
                    <a href="https://www.instagram.com/rahadianfikar/" target="_blank" className="relative group">
                        <button>
                            <span className="relative">Instagram</span>
                            <span className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                        </button>
                    </a>
                    <a href="https://github.com/diemorester" target="_blank" className="relative group">
                        <button>
                            <span className="relative">GitHub</span>
                            <span className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                        </button>
                    </a>
                </div>
                <div className='absolute bottom-0 w-full'>
                    <div className='flex justify-between p-8 text-xs md:text-lg'>
                        <p>&#169; 2025 diemorester all rights reserved. </p>
                        <p>rahadianfikar@gmail.com</p>
                    </div>
                </div>
            </footer>
        </>
    );
}