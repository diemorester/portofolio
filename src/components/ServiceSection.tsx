type Item = {
    id: number;
    name: string;
    description: string;
    image: JSX.Element;
};

const items: Item[] = [
    {
        id: 1,
        name: "Web Design",
        description: "I create responsive web designs that are both visually appealing and user-friendly, ensuring seamless navigation across all devices.",
        image: (<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 -960 960 960"><path d="M0-160v-66.67h147.33V-268q-27 0-46.83-19.83-19.83-19.84-19.83-46.84v-438.66q0-27 19.83-46.84Q120.33-840 147.33-840h665.34q27 0 46.83 19.83 19.83 19.84 19.83 46.84v438.66q0 27-19.83 46.84Q839.67-268 812.67-268v41.33H960V-160H0Zm147.33-174.67h665.34v-438.66H147.33v438.66Zm0 0v-438.66 438.66Z"/></svg>)
    },
    {
        id: 2,
        name: "Maintenance",
        description: "I provide ongoing maintenance, keeping your website secure, updated, and performing at its best with regular checkups and enhancements.",
        image: (<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M6 13c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-3 .5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM6 5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm15 5.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM14 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-3.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm-11 10c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm7 7c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm0-17c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM10 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 5.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm8 .5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm3 8.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM14 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-4-12c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0 8.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4-4.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-4c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/></svg>),
    },
    {
        id: 3,
        name: "Branding",
        description: "I help build strong brand identities through tailored logos and visuals that resonate with your target audience and set you apart.",
        image: (<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 20 20"><path fill="none" d="M0 0h20v20H0z"/><path d="M17.85 8.5h-1.54c-.48-2.03-1.93-3.68-3.82-4.48v.48C12.5 5.33 11.83 6 11 6H9v1c0 .55-.45 1-1 1H7v2h1v2H7L3.64 8.64c-.09.44-.14.89-.14 1.36 0 3.58 2.92 6.5 6.5 6.5V18c-4.42 0-8-3.58-8-8s3.58-8 8-8c3.91 0 7.15 2.8 7.85 6.5zm.15 7.94-1.06 1.06-2.56-2.56c-.54.35-1.19.56-1.88.56-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5S16 10.07 16 12c0 .69-.21 1.34-.56 1.88L18 16.44zM14.5 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z"/></svg>),
    },
    {
        id: 4,
        name: "Remote Working",
        description: "I collaborate efficiently from any location, ensuring smooth communication and timely project completion, no matter where you are.",
        image: (<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 -960 960 960"><path d="M691.33-615.33H758V-682h-66.67v66.67Zm0 167.33H758v-66.67h-66.67V-448Zm0 166.67H758V-348h-66.67v66.67ZM654-120v-66.67h199.33v-586.66H470V-680l-66.67-47.33V-840H920v720H654Zm-614 0v-393.33l274-196 273.33 196V-120H362.67v-200.67h-97.34V-120H40Zm66.67-66.67h92v-200.66h230.66v200.66h91.34v-292.66L314-627.33 106.67-479.05v292.38ZM654-550ZM429.33-186.67v-200.66H198.67v200.66-200.66h230.66v200.66Z"/></svg>),
    },
    {
        id: 5,
        name: "Good Laugh",
        description: "I keep the process fun and enjoyable, bringing lighthearted moments to every project while delivering great results.",
        image: (<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><circle cx="15.5" cy="9.5" r="1.5"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M12 16c-1.48 0-2.75-.81-3.45-2H6.88a5.495 5.495 0 0 0 10.24 0h-1.67c-.7 1.19-1.97 2-3.45 2zm-.01-14C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>),
    },
    {
        id: 6,
        name: "SEO Optimization",
        description: "I optimise websites to rank higher on search engines, boosting visibility, traffic, and engagement with key audiences.",
        image: (<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 -960 960 960"><path d="M480-120 80-600l120-240h560l120 240-400 480ZM373.67-633.33h212.66l-70-140h-72.66l-70 140Zm73 369.66v-303h-252l252 303Zm66.66 0 252-303h-252v303Zm147.34-369.66h126l-70-140h-126l70 140Zm-487.34 0h126l70-140h-126l-70 140Z"/></svg>),
    },
];

export default function Service() {
    return (
        <div id="service" className="flex flex-col justify-center md:gap-10">
            <div>
                <p className="text-mono hover:text-white md:text-xl">
                    &lt;&nbsp;Perks&nbsp; &nbsp; &nbsp;&gt;
                </p>
            </div>
            <div className="grid md:grid-cols-3 text-white gap-5 md:gap-12">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="border rounded-sm border-mono h-[250px] flex flex-col items-center justify-center px-5"
                    >
                        <div className="w-12 pb-2 text-mono hover:text-white transition duration-300">
                            {item.image}
                        </div>
                        <h3 className="text-lg font-semibold flex flex-wrap justify-center">
                            {item.name.split(" ").map((word, index) => (
                                <span
                                    key={index}
                                    className="hover:text-mono transition duration-200 ease-in-out mx-1"
                                >
                                    {word}
                                </span>
                            ))}
                        </h3>
                        <p className="text-center text-xs py-1 flex flex-wrap justify-center">
                            {item.description.split(" ").map((word, index) => (
                                <span
                                    key={index}
                                    className="hover:text-mono transition duration-200 ease-in-out mx-1"
                                >
                                    {word}
                                </span>
                            ))}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}  