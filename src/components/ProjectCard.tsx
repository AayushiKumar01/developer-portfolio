import Link from "next/link";

type ProjectCardProps = {
    id: string;
    category: string;
    title: string;
    description: string;
    technologies: string;
    featuredTechnologies?: string;
};

export default function ProjectCard({
    id,
    category,
    title,
    description,
    technologies,
    featuredTechnologies
}: ProjectCardProps) {
    return (
        <Link
            href={`/projects/${id}`}
            className="group block rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
        >
            <article>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                    {category}
                </p>

                <div className="mt-4 flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold">{title}</h3>

                    <span
                        aria-hidden="true"
                        className="text-zinc-500 transition group-hover:text-cyan-400"
                    >
                        ↗
                    </span>
                </div>

                <p className="mt-3 leading-7 text-zinc-400">{description}</p>

                <p className="mt-6 text-sm text-cyan-400">{featuredTechnologies ?? technologies}</p>
            </article>
        </Link>
    );
}