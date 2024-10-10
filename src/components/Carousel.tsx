import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface CarouselItem {
    image: string;
    slug: string;
}

interface CarouselProps {
    items: CarouselItem[];
}

export default function Carousel({ items }: CarouselProps) {
    const [slidesToScroll, setSlidesToScroll] = useState(1);
    const [emblaRef, emblaAPI] = useEmblaCarousel({ slidesToScroll, loop: false });
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesLength, setSlidesLength] = useState(0);

    const updateSlidesToScroll = () => {
        if (window.innerWidth < 768) {
            setSlidesToScroll(1);
        } else {
            setSlidesToScroll(2);
        }
    };

    const scrollPrev = useCallback(() => {
        if (emblaAPI) emblaAPI.scrollPrev();
    }, [emblaAPI]);

    const scrollNext = useCallback(() => {
        if (emblaAPI) emblaAPI.scrollNext();
    }, [emblaAPI]);

    const scrollTo = useCallback((index: number) => {
        if (emblaAPI) emblaAPI.scrollTo(index);
    }, [emblaAPI]);

    useEffect(() => {
        updateSlidesToScroll();
        window.addEventListener("resize", updateSlidesToScroll);

        return () => {
            window.removeEventListener("resize", updateSlidesToScroll);
        };
    }, []);

    useEffect(() => {
        if (emblaAPI) {
            setSlidesLength(Math.ceil(items.length / slidesToScroll));

            emblaAPI.on("select", () => {
                setCurrentIndex(emblaAPI.selectedScrollSnap());
            });
            emblaAPI.reInit();
        }
    }, [emblaAPI, items.length, slidesToScroll]);

    return (
        <div className="relative flex flex-col justify-center gap-2 md:gap-8 min-h-screen">
            <div>
                <p className="md:text-xl text-mono hover:text-white inline-flex">
                    &lt;&nbsp;Projects&nbsp; &nbsp; &gt;
                </p>
            </div>
            <div>
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex gap-x-5">
                        {items.map((item, index) => (
                            <div key={index} className={`embla__slide flex-none ${slidesToScroll === 1 ? 'w-full' : 'w-1/2'}`}>
                                <a
                                    href={`/project/${item.slug}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={item.image}
                                        alt={`Slide ${index}`}
                                        className="w-full md:h-[350px] object-cover"
                                    />
                                </a>
                            </div>
                        ))}
                    </div>
                    <div>
                        <button
                            onClick={scrollPrev}
                            disabled={currentIndex === 0}
                            className={`absolute -left-[5%] top-[50%] max-md:hidden rounded-full p-2 z-30 text-mono 
                                ${currentIndex === 0 ? 'opacity-50 cursor-pointer' : 'hover:text-white'}`}>
                            <FaArrowLeft size={28} />
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={scrollNext}
                            disabled={currentIndex === slidesLength - 1}
                            className={`absolute -right-[5%] top-[50%] max-md:hidden rounded-full p-2 z-30 text-mono 
                                ${currentIndex === slidesLength - 1 ? 'opacity-50 cursor-pointer' : 'hover:text-white'}`}>
                            <FaArrowRight size={28} />
                        </button>
                    </div>
                </div>
                <div className="flex justify-center gap-1 pt-2 md:pt-5">
                    {Array.from({ length: slidesLength }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollTo(index)}
                            className={`h-2 md:h-3 rounded-full border md:border-2 border-mono ${currentIndex === index ? 'w-3 md:w-6' : 'w-2 md:w-3'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}