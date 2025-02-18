import { createContext, useContext, useEffect, useState } from "react";

const ScrollContext = createContext<{ isPassing: boolean } | null>(null);

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
    const [isPassing, setIsPassing] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById("about-section");
            if (aboutSection) {
                const rect = aboutSection.getBoundingClientRect();
                setIsPassing(rect.top < -50);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return <ScrollContext.Provider value={{ isPassing }}>{children}</ScrollContext.Provider>;
};

export const useScroll = () => {
    const context = useContext(ScrollContext);
    if (!context) throw new Error("useScroll must be used within a ScrollProvider");
    return context;
};