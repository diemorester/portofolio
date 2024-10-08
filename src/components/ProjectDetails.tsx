import { useParams } from "react-router-dom";

// Define the type for project details
type ProjectDetail = {
    title: string;
    description: string;
    image: string;
    additionalInfo: string;
};

// Define the project details object with specific keys
const projectDetails: Record<string, ProjectDetail> = {
    'project-1': {
        title: 'kopikalyan companyprofile',
        description: 'loremloremloremlreomrloemrelomreomrelomreom',
        image: 'https://via.placeholder.com/800x500',
        additionalInfo: 'additional information',
    },
    'project-2': {
        title: 'the sept',
        description: 'loremloremloremlreomrloemrelomreomrelomreom',
        image: 'https://via.placeholder.com/800x500',
        additionalInfo: 'additional information',
    },
    'project-3': {
        title: 'Project Three',
        description: 'loremloremloremlreomrloemrelomreomrelomreom',
        image: 'https://via.placeholder.com/800x500',
        additionalInfo: 'additional information',
    },
    'project-4': {
        title: 'Project Four',
        description: 'loremloremloremlreomrloemrelomreomrelomreom',
        image: 'https://via.placeholder.com/800x500',
        additionalInfo: 'additional information',
    },
    'project-5': {
        title: 'project Five',
        description: 'loremloremloremlreomrloemrelomreomrelomreom',
        image: 'https://via.placeholder.com/800x500',
        additionalInfo: 'additional information',
    },
    'project-6': {
        title: 'project Six',
        description: 'loremloremloremlreomrloemrelomreomrelomreom',
        image: 'https://via.placeholder.com/800x500',
        additionalInfo: 'additional information',
    },
};

export default function ProjectDetails() {
    const { slug } = useParams<{ slug: string }>(); // Specify the type for useParams

    // Check if slug exists and is a valid key in projectDetails
    const project = slug && projectDetails[slug];

    if (!project) {
        return <div>Project not found!</div>;
    }

    return (
        <div className="min-h-screen p-5 md:p-10 flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-5">{project.title}</h1>
            <img src={project.image} alt={project.title} className="w-full max-w-[800px] h-auto mb-5" />
            <p className="text-lg mb-3">{project.description}</p>
            <p className="text-md text-gray-600">{project.additionalInfo}</p>
        </div>
    );
}
