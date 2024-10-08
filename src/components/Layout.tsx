import img0 from '../assets/bg-noise.png'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative min-h-screen w-full bg-black z-0">
            <div
                className="absolute inset-0 bg-repeat animate-noise pointer-events-none"
                style={{
                    backgroundImage: `url(${img0})`,
                    zIndex: -10,
                    opacity: 0.05,
                }}
            ></div>
            <div className="relative z-30 font-space-mono cursor-default px-5 md:px-[137px]">
                {children}
            </div>
        </div>
    );
}