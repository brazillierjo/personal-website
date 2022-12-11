export interface IProjects {
    title: string;
    startDate: string;
    description: string;
    images: string[];
    url?: string;
    technologies: { name: string; class: string }[];
}
