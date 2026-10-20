export type Project = {
    id: string;
    category: string;
    title: string;
    description: string;
    technologies: string;
};

export const projects: Project[] = [
    {
        id: "video-hosting",
        category: "Moderna · Backend Engineering",
        title: "Video Hosting & Delivery Platform",
        description:
            "Designed and implemented the backend service and AWS infrastructure supporting video hosting and delivery.",
        technologies: "AWS · App Runner · CloudFront · Docker",
    },
    {
        id: "pr-environments",
        category: "Moderna · Platform Engineering",
        title: "Automated Deployments & PR Environments",
        description:
            "Contributed to the overall architecture and collaborated with engineers to automate deployments and provision isolated AWS App Runner environments for pull requests.",
        technologies: "AWS · App Runner · CI/CD · Automation",
    },
    {
        id: "domain-routing",
        category: "Moderna · Web Platform",
        title: "Domain-Aware Routing & Rewrites",
        description:
            "Implemented request routing and rewrites using Next.js middleware, domain information, geolocation, and language-related headers.",
        technologies: "Next.js · TypeScript · Middleware",
    },
    {
        id: "image-processor",
        category: "Personal Project · API Engineering",
        title: "Image Processor API",
        description:
            "A personal backend engineering project focused on building an API for image-processing operations.",
        technologies: "Backend · REST API · Image Processing",
    },
    {
        id: "vaccine-finder",
        category: "Personal Project · API Engineering",
        title: "Vaccine Finder API",
        description:
            "A personal API project focused on helping users discover vaccine-related information.",
        technologies: "Backend · APIs · Data Integration",
    },
];