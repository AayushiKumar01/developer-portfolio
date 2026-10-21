export type Project = {
    id: string;
    category: string;
    title: string;
    description: string;
    technologies: string;
    featuredTechnologies?: string;
    overview?: string;
    contributions?: string[];
    architecture?: string[];
    engineeringDecisions?: {
        title: string;
        explanation: string;
    }[];
    outcomes?: string[];
    learnings?: string[];
    deploymentWorkflow?: {
        title: string;
        steps: string[];
    }[];
};

export const projects: Project[] = [
    {
        id: "video-hosting",
        category: "Moderna · Backend Engineering",
        title: "Video Processing & Delivery Platform",
        description:
            "Designed and implemented an end-to-end AWS-based video processing and delivery solution, enabling the migration from third-party video hosting to an internally managed platform.",
        technologies: "AWS Lambda · API Gateway · S3 · MediaConvert",
        overview:
            "Previously, video resources were hosted on a third-party platform. To reduce hosting costs and gain greater control over video assets, I designed and implemented an internal video processing and delivery solution on AWS. Approved videos were published through Veeva into Amazon S3, where an event-driven pipeline automatically converted source MP4 files into HLS streaming assets. A separate serverless API allowed consuming applications to retrieve the appropriate video manifest using a video identifier.",
        contributions: [
            "Designed and implemented the end-to-end video processing and retrieval architecture.",
            "Built an event-driven AWS Lambda function triggered by S3 uploads to initiate video conversion through AWS Elemental MediaConvert.",
            "Implemented the processing workflow that generated HLS playlists and media assets and stored them in Amazon S3.",
            "Developed a serverless video retrieval API using AWS Lambda and API Gateway.",
            "Implemented video lookup logic to locate the correct S3 folder and retrieve the corresponding manifest using a video identifier.",
            "Enabled migration away from third-party video hosting, reducing costs and providing greater control over video resources.",
        ],
        architecture: [
            "Approved video assets were published through Veeva into Amazon S3.",
            "S3 object-created events triggered an AWS Lambda function to initiate video processing.",
            "AWS Elemental MediaConvert transformed source MP4 files into HLS playlists and media segments, storing the generated assets in S3.",
            "CloudFront supported a shared domain used for web experiences and video-related requests.",
            "API Gateway routed video retrieval requests to a separate AWS Lambda function.",
            "The retrieval function used the video identifier to locate the appropriate S3 folder and return the corresponding HLS manifest.",
        ],
        engineeringDecisions: [
            {
                title: "Event-Driven Video Processing",
                explanation:
                    "Used S3 object-created events to trigger a Lambda function whenever a new source video was uploaded. This allowed the conversion workflow to start automatically without requiring manual intervention or continuous polling.",
            },
            {
                title: "Serverless Architecture",
                explanation:
                    "Implemented the processing orchestration and video retrieval API using AWS Lambda, with API Gateway exposing the retrieval endpoint. This avoided the need to manage dedicated application servers and supported request-driven execution.",
            },
            {
                title: "HLS for Browser-Based Video Delivery",
                explanation:
                    "Used AWS Elemental MediaConvert to transform source MP4 videos into HLS streaming assets. HLS playlists and media segments enabled streaming-oriented delivery rather than relying solely on the original MP4 files.",
            },
            {
                title: "Separation of Processing and Retrieval",
                explanation:
                    "Designed separate Lambda functions for video conversion and video retrieval. This kept the asynchronous processing workflow independent of the API responsible for locating and returning video manifests.",
            },
        ],
        outcomes: [
            "Enabled the migration of video resources from a third-party hosting platform to an internally managed AWS solution.",
            "Reduced dependency on third-party video hosting and associated costs.",
            "Provided greater control over video storage, processing, and retrieval.",
            "Automated the conversion of approved MP4 videos into HLS streaming assets.",
            "Enabled applications to retrieve video manifests through a dedicated serverless API.",
        ],

        learnings: [
            "Gained hands-on experience designing and implementing an end-to-end event-driven video processing system.",
            "Deepened understanding of AWS Lambda, S3 event notifications, API Gateway, and AWS Elemental MediaConvert.",
            "Developed experience working with HLS manifests and browser-oriented video delivery.",
            "Strengthened system design skills by separating asynchronous media processing from request-driven video retrieval.",
        ],
    },
    {
        id: "pr-environments",
        category: "Moderna · Platform Engineering",
        title: "Cloud Deployment Modernization & PR Environments",
        description:
            "Architected a modern AWS deployment platform, independently validated the design through proofs of concept, and collaborated with two engineers to implement automated CI/CD and secure pull-request environments.",
        technologies: "AWS Route 53 · CloudFront · Docker · AWS App Runner · AWS Secrets Manager · Amazon ECR · GitHub Actions · CI/CD · OIDC · Okta",
        featuredTechnologies: "AWS App Runner · Docker · GitHub Actions · Amazon ECR · CloudFront",
        overview: "Our team inherited a legacy web deployment infrastructure from an external vendor, with limited visibility into its implementation and little confidence in troubleshooting failures. I took ownership of architecting a replacement using approved AWS services, working with our internal Engineering Excellence team and getting architectural reviews from my principal engineer and manager. Given our primarily static web applications and limited infrastructure expertise, I prioritized simplicity, maintainability, and ease of migration. I independently developed proofs of concept to validate the proposed architecture. Once the approach was established, I worked with two other engineers to implement the production solution, introducing automated CI/CD pipelines, secure pull-request environments, and a streamlined release process.",
        architecture: [
            "Docker was used to package the web applications, with container images stored in Amazon ECR.",
            "AWS App Runner provided managed container hosting for pull-request, preview, and production environments.",
            "GitHub Actions automated container builds, image publishing, environment provisioning, and application deployments.",
            "Amazon Route 53 and CloudFront supported domain routing and delivery of the web experiences.",
            "AWS Secrets Manager provided centralized management of application secrets.",
            "Application-level middleware protected pull-request preview URLs using OpenID Connect (OIDC) authentication with Okta, redirecting unauthenticated users to sign in before accessing the experience.",
            "Preview and production deployments used the same Docker image, with an isProduction flag controlling environment-specific content.",
        ],
        deploymentWorkflow: [
            {
                title: "Pull Request & Stakeholder Review",
                steps: [
                    "A developer opens a pull request containing changes to a web experience.",
                    "A GitHub Actions workflow builds the application and publishes its Docker image to Amazon ECR.",
                    "The pipeline provisions an isolated AWS App Runner environment with a unique preview URL.",
                    "When an employee opens the pull-request preview URL, application middleware enforces Okta authentication through OIDC before granting access.",
                    "Designers and stakeholders review the experience against approved Figma designs.",
                    "Developers incorporate feedback and update the pull request for further review.",
                    "When the pull request is merged or closed, its temporary environment is removed.",
                ],
            },
            {
                title: "Merge & Release",
                steps: [
                    "An approved pull request is merged into the main branch.",
                    "A GitHub Actions release workflow deploys the updated application.",
                    "The appropriate preview or production environment receives the deployment.",
                    "Preview and production use the same Docker image, with an isProduction flag controlling the content displayed.",
                    "The approved web experience becomes available through the configured delivery infrastructure.",
                ],
            },
        ],
        contributions: [
            "Led the architecture design for modernizing the legacy web deployment infrastructure, evaluating AWS services against application requirements and operational complexity.",

            "Collaborated with the internal Engineering Excellence team and incorporated architectural feedback from my principal engineer and manager.",

            "Independently developed proofs of concept to validate the proposed AWS deployment architecture and its feasibility.",

            "Selected AWS App Runner as the preferred managed hosting solution based on simplicity, maintainability, and the requirements of primarily static web applications.",

            "Collaborated with two other engineers to implement the production infrastructure and automated CI/CD workflows.",

            "Designed the approach for automatically provisioning isolated pull-request environments to support secure stakeholder reviews.",

            "Helped establish a simplified release model using a common Docker image across preview and production, with environment-specific content controlled by an isProduction flag.",
        ],
        engineeringDecisions: [
            {
                title: "Choosing AWS App Runner",
                explanation:
                    "I evaluated AWS hosting options and independently developed proofs of concept before proposing AWS App Runner. Our applications were primarily static web experiences with limited backend requirements, so a managed container platform offered a simpler operational model than maintaining Kubernetes infrastructure. The architecture was reviewed with my principal engineer and manager.",
            },
            {
                title: "Replacing Persistent Lower Environments",
                explanation:
                    "I designed a pull-request-based deployment approach that automatically provisioned isolated environments for stakeholder reviews. This reduced reliance on multiple long-lived lower environments and allowed developers to share changes independently.",
            },
            {
                title: "Automating the Deployment Lifecycle",
                explanation:
                    "The architecture used GitHub Actions CI/CD workflows to provision environments when pull requests opened and execute deployment workflows when changes were merged. The production implementation was completed collaboratively by our three-engineer team.",
            },
            {
                title: "Middleware-Based Preview Authentication",
                explanation:
                    "I designed the security approach around application-level middleware and Okta authentication using OIDC. When an employee accessed a pull-request preview URL, the middleware checked authentication state and redirected unauthenticated requests through the Okta sign-in flow. This allowed internal stakeholders to review unfinished web experiences without exposing them publicly.",
            },
            {
                title: "Consistent Container Deployments",
                explanation:
                    "Preview and production used the same Docker image, stored in Amazon ECR. An isProduction flag controlled environment-specific content behavior, helping simplify deployments and reduce differences between environments.",
            },
            {
                title: "Managed AWS Infrastructure",
                explanation:
                    "The solution incorporated Route 53, CloudFront, AWS App Runner, Amazon ECR, and AWS Secrets Manager. The architecture prioritized maintainability and services that the internal engineering team could confidently operate.",
            },
        ],
        outcomes: [
            "Modernized legacy vendor-managed deployment infrastructure into an internally owned AWS platform, giving the engineering team greater visibility, control, and confidence in managing releases.",

            "Replaced the need for multiple persistent lower environments with automatically provisioned, isolated pull-request environments.",

            "Improved collaboration between developers, designers, and stakeholders by enabling secure, shareable previews for reviewing web experiences against approved Figma designs.",

            "Streamlined production releases through automated CI/CD workflows, reducing manual deployment effort and making the go-live process faster and smoother.",

            "Reduced operational complexity by adopting managed AWS services and a consistent container deployment model across preview and production.",
        ],

        learnings: [
            "Strengthened my ability to lead an architecture initiative end to end, from identifying operational problems and evaluating solutions to independently building proofs of concept and guiding implementation.",

            "Learned that effective architecture is not about choosing the most sophisticated technology, but selecting a solution that meets business requirements while remaining understandable and maintainable for the team.",

            "Deepened my experience with managed AWS infrastructure, containerized deployments, CI/CD automation, ephemeral environments, and application-layer authentication.",

            "Developed stronger technical leadership skills through architectural reviews with senior engineers and collaborative implementation with a three-engineer team.",
        ],

    },
    {
        id: "domain-routing",
        category: "Moderna · Web Platform",
        title: "Domain-Aware Routing & Rewrites",

        description:
            "Implemented domain-aware redirects and internal route rewrites in Next.js middleware to deliver the correct localized web experience based on domain, country, and language.",

        technologies:
            "Next.js · TypeScript · Middleware · CloudFront · Internationalization · HTTP Redirects & Rewrites",
        featuredTechnologies: "Next.js · TypeScript · Middleware · CloudFront",

        overview:
            "A single Next.js application supported web experiences across multiple domains, countries, and languages. Each domain needed to serve the appropriate product experience and localized content based on the incoming request. I implemented middleware-based routing logic that evaluated the request hostname, country information, and language preferences to determine the correct destination and content. The solution also handled geographic availability, ensuring users were shown an appropriate unavailable-experience page when content was not supported in their country.",

        contributions: [
            "Implemented redirect and rewrite logic in Next.js middleware for a single application serving multiple domains and localized web experiences.",

            "Developed domain-aware request handling to distinguish experiences using the incoming hostname.",

            "Implemented country-based redirects that routed users to the appropriate localized experience when available.",

            "Handled unsupported countries by directing users to an experience-unavailable page instead of serving an incorrect regional experience.",

            "Implemented internal route rewrites to resolve the correct content using domain, country, and accepted-language information.",

            "Integrated request metadata provided through CloudFront headers into the routing logic.",
        ],

        architecture: [
            "A single Next.js application served web experiences across multiple domains, countries, and languages.",

            "Incoming requests passed through Next.js middleware, which inspected the hostname, country information provided through CloudFront headers, and accepted-language preferences.",

            "Redirect logic determined the appropriate country-specific experience and redirected users to its localized URL when necessary.",

            "When an experience was unavailable in the visitor's country, users were directed to an experience-unavailable page.",

            "For localized URLs, middleware resolved the correct internal content route using the hostname, country, and language context.",

            "Next.js rewrites served the matching localized content without changing the browser-visible URL.",
        ],

        engineeringDecisions: [
            {
                title: "Centralized Routing in Next.js Middleware",
                explanation:
                    "Implemented request routing in Next.js middleware so domain, country, and language decisions could be handled before rendering the requested experience. This provided a centralized place for routing rules within the shared application.",
            },
            {
                title: "Separating Redirects from Rewrites",
                explanation:
                    "Used redirects when visitors needed to be sent to a different localized URL and rewrites when the application needed to resolve a different internal route without changing the visible URL. This separation supported both geographic navigation and accurate content selection.",
            },
            {
                title: "Domain-Aware Content Resolution",
                explanation:
                    "Used the incoming hostname as part of route resolution to distinguish experiences served by different domains within the same application, reducing the risk of returning content intended for another domain.",
            },
            {
                title: "Country and Language Awareness",
                explanation:
                    "Used country information supplied through CloudFront request headers together with accepted-language preferences to determine the appropriate localized experience and content.",
            },
            {
                title: "Explicit Handling of Unsupported Regions",
                explanation:
                    "Introduced routing behavior for countries where an experience was unavailable, providing an appropriate unavailable-experience page rather than assuming every product was supported in every market.",
            },
        ],

        outcomes: [
            "Enabled a single Next.js application to support localized web experiences across multiple domains.",

            "Directed users to country-appropriate experiences while handling regions where content was unavailable.",

            "Improved content-routing accuracy by considering the requested domain, country, and language preferences.",

            "Centralized redirect and rewrite rules in middleware, simplifying request-routing behavior across the shared application.",

            "Supported international web experiences without requiring separate applications for each domain and locale.",
        ],

        learnings: [
            "Deepened my understanding of Next.js middleware, HTTP redirects and rewrites, and request lifecycle behavior.",

            "Gained practical experience implementing domain-aware routing and internationalization across a shared application.",

            "Strengthened my understanding of how CloudFront request metadata can inform application-level routing decisions.",

            "Learned the importance of explicitly handling geographic availability and language preferences when delivering international web experiences.",
        ],
    },

    {
        id: "image-processor",
        category: "Academic Project · Backend Development",
        title: "Image Processor API",

        description:
            "Built a Python and Flask REST API for applying configurable image transformations using Pillow.",

        technologies:
            "Python · Flask · Pillow · REST APIs · Image Processing",
        featuredTechnologies:
            "Python · Flask · Pillow · REST APIs",

        overview:
            "Developed an image-processing REST API as an individual academic project. The application accepts image uploads and transformation instructions, applies supported operations in the requested order, and returns the resulting image. I implemented the Flask endpoints, organized image operations into dedicated Python classes, and introduced a centralized dispatcher to select and execute transformations.",

        contributions: [
            "Independently developed a Flask-based REST API for image processing.",

            "Implemented GET /transformationslist to expose available image operations and POST /transformations to accept image uploads and transformation instructions.",

            "Implemented rotation, resizing, horizontal and vertical flipping, grayscale conversion, and thumbnail generation using Pillow.",

            "Created individual transformation classes and a centralized dispatcher to select and invoke the requested operations.",

            "Supported sequential transformations by passing the output of each operation into the next.",

            "Implemented basic request validation and error responses for missing files, unsupported file extensions, and missing transformation parameters.",

            "Documented API usage, processing flows, design decisions, and sample responses.",
        ],

        architecture: [
            "A client sends requests to a Python Flask application through REST endpoints.",

            "GET /transformationslist returns a list of supported image operations.",

            "POST /transformations accepts an uploaded image and a comma-separated sequence of transformation instructions.",

            "The request handler performs basic validation before opening the image with Pillow.",

            "A centralized transformation dispatcher selects the corresponding Python operation class for each instruction.",

            "The application applies transformations sequentially, using each operation's output as the input to the next.",

            "The final image is written to an in-memory buffer and returned as an HTTP response.",
        ],

        engineeringDecisions: [
            {
                title: "Unified Transformation Endpoint",
                explanation:
                    "Consolidated image operations behind a single POST endpoint rather than exposing a separate endpoint for every transformation. This allowed clients to request multiple operations in one call.",
            },
            {
                title: "Centralized Transformation Dispatch",
                explanation:
                    "Used a dispatcher to select and instantiate dedicated transformation classes based on the requested operation. The approach was inspired by factory-style object creation, although it did not implement the formal Factory Method pattern.",
            },
            {
                title: "Sequential Image Processing",
                explanation:
                    "Processed transformations in the order supplied by the client, passing the resulting image from one operation into the next.",
            },
            {
                title: "Pillow for Image Operations",
                explanation:
                    "Switched from OpenCV to Pillow after evaluating feedback and the image-processing requirements of the project.",
            },
            {
                title: "Compact Transformation Instructions",
                explanation:
                    "Encoded operation parameters within transformation strings, such as rotateDegrees_90 and resizeWidthHeight_100_50, allowing multiple instructions to be supplied through one request field.",
            },
        ],

        outcomes: [
            "Implemented a REST API capable of performing multiple image transformations in a single request.",

            "Separated individual image operations into dedicated Python classes.",

            "Supported configurable, ordered processing of uploaded images.",

            "Created API documentation and architecture diagrams describing the application and its request flows.",
        ],

        learnings: [
            "Gained hands-on experience building REST APIs with Flask and processing multipart image uploads.",

            "Explored factory-inspired object creation and learned how centralized dispatch differs from a formal Factory Method implementation.",

            "Learned to evaluate libraries against specific application requirements, leading to a switch from OpenCV to Pillow.",

            "Improved the API design by consolidating individual operations into one configurable endpoint.",

            "Recognized opportunities to strengthen input validation, error handling, and code organization through further refactoring.",
        ],
    },


    {
        id: "vaccine-finder",
        category: "Moderna · Backend Engineering",
        title: "Vaccine Finder — Address Processing & Data Integration",

        description:
            "Contributed to backend data processing for a vaccine finder platform, focusing on address formatting and location resolution for incoming shipment records.",

        technologies:
            "AWS Lambda · Amazon S3 · CSV Processing · Location Services",

        overview:
            "Contributed to the backend of Moderna's vaccine finder platform as part of a larger engineering team. The platform relied on internal shipment data to help users discover vaccination locations and availability. I worked on an address-processing component within an AWS-based workflow that transformed incoming shipment records into more reliable location information for the platform's internal dataset.",

        contributions: [
            "Collaborated with backend engineers on data-processing functionality supporting the vaccine finder platform.",

            "Worked on address formatting and location resolution for raw shipment records.",

            "Contributed to an AWS Lambda-based workflow that processed CSV shipment data uploaded to Amazon S3.",

            "Helped improve the consistency of location information before it was incorporated into the internal vaccine availability dataset.",
        ],

        architecture: [
            "An internal data team uploaded CSV files containing shipment information to Amazon S3.",

            "An AWS Lambda-based workflow processed incoming shipment records.",

            "Address-processing logic formatted and resolved location information using external location services.",

            "Processed records were incorporated into an internal dataset supporting vaccine availability and location information.",

            "The broader vaccine finder platform used this information to help users discover nearby vaccination locations.",
        ],

        engineeringDecisions: [
            {
                title: "Address Processing and Resolution",
                explanation:
                    "Raw shipment records required address formatting and resolution before their location information could be reliably used by the vaccine finder platform.",
            },
            {
                title: "External Location Services",
                explanation:
                    "The address-processing workflow used external location services to improve the accuracy and consistency of shipment addresses.",
            },
            {
                title: "AWS-Based Data Processing",
                explanation:
                    "Shipment CSV files were processed through an AWS Lambda-based workflow connected to Amazon S3, supporting the preparation of incoming data for the platform.",
            },
        ],

        outcomes: [
            "Contributed to backend data-processing functionality supporting Moderna's vaccine finder platform.",

            "Helped improve the consistency of location information derived from raw shipment records.",

            "Supported the preparation of shipment data for use in the platform's vaccine availability dataset.",
        ],

        learnings: [
            "Gained experience processing real-world data with inconsistent address information.",

            "Developed practical experience working with location services and backend data-processing workflows.",

            "Strengthened my understanding of AWS-based data ingestion and collaboration within a larger engineering team.",
        ],
    },
];