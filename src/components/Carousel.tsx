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
        <div className="relative flex flex-col justify-center gap-2 md:gap-10 min-h-screen">
            <div>
                <p className="md:text-xl text-mono hover:text-white">
                    &lt;&nbsp;Projects&nbsp; &nbsp; &gt;
                </p>
            </div>
            <div>
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex gap-x-3">
                        {items.map((item, index) => (
                            <div key={index} className={`embla__slide flex-none ${slidesToScroll === 1 ? 'w-full' : 'w-1/2'}`}>
                                <a
                                    href={`/projects/${item.slug}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={item.image}
                                        alt={`Slide ${index}`}
                                        className="w-full max-h-[600px] object-fill"
                                    />
                                </a>
                            </div>
                        ))}
                    </div>
                    <div>
                        <button
                            onClick={scrollPrev}
                            className="absolute -left-[5%] top-[50%] max-md:hidden rounded-full p-2 z-30 text-white">
                            <FaArrowLeft size={28} />
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={scrollNext}
                            className="absolute -right-[5%] top-[50%] max-md:hidden rounded-full p-2 z-30 text-white">
                            <FaArrowRight size={28} />
                        </button>
                    </div>
                </div>
                <div className="flex justify-center gap-1 md:pt-5">
                    {Array.from({ length: slidesLength }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollTo(index)}
                            className={`h-3 rounded-full border-2 border-mono ${currentIndex === index ? 'w-6' : 'w-3'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}