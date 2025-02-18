import { StickyScroll } from './ui/stickyScroll';
import img1 from '../assets/ui-design.jpg';
import img2 from '../assets/front-end.jpg';
import img3 from '../assets/back-end.jpg';
import img4 from '../assets/api.jpeg';

const content = [
    {
        title: "UI/UX design",
        description:
            "i will help you translate your ideas into reality, crafting designs that are not only user-friendly but also visually compelling, ensuring seamless navigation across all devices.",
        content: (
            <img
                src={img1}
                width={666}
                height={666}
                className='w-full h-full object-cover'
                alt='ui-design'
            />
        ),
    },
    {
        title: "front-end development",
        description:
            "i will craft you a high-performing front-end that delivers a seamless user experience, grabs attention, and drives engagement with clean code, responsive design, and smooth interactions.",
        content: (
            <img
                src={img2}
                width={666}
                height={666}
                className='w-full h-full object-cover'
                alt='front-end'
            />
        ),
    },
    {
        title: "back-end development",
        description:
            "i will build you a powerful and scalable back-end that ensures seamless data handling, high performance, and secure operations—laying the foundation for a smooth and efficient digital experience.",
        content: (
            <img
                src={img3}
                width={666}
                height={666}
                className='w-full h-full object-cover'
                alt='back-end'
            />
        ),
    },
    {
        title: "API development",
        description:
            "i design and develop robust, scalable APIs that enable seamless communication between front-end and back-end systems, ensuring efficient data flow, security, and high performance.",
        content: (
            <img
                src={img4}
                width={666}
                height={666}
                className='w-full h-full object-cover'
                alt='api'
            />
        ),
    },
];

const WhatIDoSection = () => {
    return (
        <div id='what-i-do-section' className='relative z-30'>
            <StickyScroll content={content} />
        </div>
    )
}

export default WhatIDoSection