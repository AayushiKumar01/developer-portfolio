import ProjectCard from "@/components/ProjectCard"
import { projects } from "@/data/projects"

export default function Projects() {
    return (
        <section
            id="work"
            className="mx-auto max-w-6xl border-t border-white/10 py-24"
        >
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
                Selected Work
            </p>

            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Problems worth solving.{" "}
                <span className="text-zinc-500">
                    Solutions built to last.
                </span>
            </h2>

            <p className="mt-6 max-w-2xl leading-7 text-zinc-400">
                A closer look at the systems I&apos;ve built, the challenges
                I&apos;ve worked through, and the engineering decisions behind
                the results.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        id={project.id}
                        category={project.category}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        featuredTechnologies={project.featuredTechnologies}

                    />
                ))}
            </div>
        </section>)
}