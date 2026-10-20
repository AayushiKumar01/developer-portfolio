type ProjectCardProps = {
    category: string;
    title: string;
    description: string;
    technologies: string;
};

export default function ProjectCard({
    category,
    title,
    description,
    technologies,
}: ProjectCardProps) {
    return (
        <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/40">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                {category}
            </p>

            <h3 className="mt-4 text-xl font-semibold">{title}</h3>

            <p className="mt-3 leading-7 text-zinc-400">{description}</p>

            <p className="mt-6 text-sm text-cyan-400">{technologies}</p>
        </article>
    );
}