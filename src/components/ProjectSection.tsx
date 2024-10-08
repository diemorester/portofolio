import Carousel from "./Carousel";

const projectItems = [
    { image: 'https://via.placeholder.com/800x400', slug: 'kopikalyan-companyprofile' },
    { image: 'https://via.placeholder.com/800x400', slug: 'the-sept' },
    { image: 'https://via.placeholder.com/800x400', slug: 'project-3' },
    { image: 'https://via.placeholder.com/800x400', slug: 'project-4' },
    { image: 'https://via.placeholder.com/800x400', slug: 'project-5' },
    { image: 'https://via.placeholder.com/800x400', slug: 'project-6' },
];

export default function ProjectSection() {
    return (
        <div className="">
            <Carousel items={projectItems} />
        </div>
    )
}