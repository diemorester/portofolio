import Carousel from "./Carousel";
import img1 from '../assets/thumbnail-kopikalyan.png'
import img2 from '../assets/thumbnail-thesept-1.png'
import img3 from '../assets/thumbnail-arcanistlabs.png'

const projectItems = [
    { image: img3, slug: 'arcanist-labs-companyprofile' },
    { image: img1, slug: 'kopikalyan-companyprofile' },
    { image: img2, slug: 'the-sept' },
    { image: 'https://via.placeholder.com/800x400', slug: 'project-4' },
    { image: 'https://via.placeholder.com/800x400', slug: 'project-5' },
    { image: 'https://via.placeholder.com/800x400', slug: 'project-6' },
];

export default function ProjectSection() {
    return (
        <div id="project" className="">
            <Carousel items={projectItems} />
        </div>
    )
}