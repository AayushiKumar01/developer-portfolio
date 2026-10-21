import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Link from "next/link";
import VideoArchitecture from "@/components/VideoArchitecture";
import DeploymentArchitecture from "@/components/DeploymentArchitecture";
import RoutingArchitecture from "@/components/RoutingArchitecture";
import type { Metadata } from "next";

type ProjectPageProps = {
    params: Promise<{
        slug: string;
    }>;
};
export async function generateMetadata({
    params,
}: ProjectPageProps): Promise<Metadata> {
    const { slug } = await params;

    const project = projects.find((project) => project.id === slug);

    if (!project) {
        return {
            title: "Project Not Found | Aayushi Kumar",
        };
    }

    return {
        title: `${project.title} | Aayushi Kumar`,
        description: project.description,
        openGraph: {
            title: `${project.title} | Aayushi Kumar`,
            description: project.description,
            type: "article",
        },
        twitter: {
            card: "summary",
            title: `${project.title} | Aayushi Kumar`,
            description: project.description,
        },
    };
}
export default async function ProjectPage({
    params,
}: ProjectPageProps) {
    const { slug } = await params;

    const project = projects.find((project) => project.id === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#0a0a0b] px-6 py-16 text-white">
            <div className="mx-auto max-w-4xl">
                <Link
                    href="/#work"
                    className="text-sm text-cyan-400 hover:text-cyan-300"
                >
                    ← Back to Projects
                </Link>

                <p className="mt-16 text-sm uppercase tracking-[0.2em] text-cyan-400">
                    {project.category}
                </p>

                <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                    {project.title}
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                    {project.description}
                </p>

                <div className="mt-10 border-t border-white/10 pt-6">
                    <p className="mb-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
                        Technologies
                    </p>

                    <p className="text-sm text-cyan-400">
                        {project.technologies}
                    </p>
                </div>
                {project.overview && (
                    <section className="mt-16 border-t border-white/10 pt-12">
                        <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
                            01 — Overview
                        </p>

                        <h2 className="mt-4 text-2xl font-semibold">
                            Project Overview
                        </h2>

                        <p className="mt-6 max-w-3xl leading-8 text-zinc-400">
                            {project.overview}
                        </p>
                    </section>
                )}
                {project.contributions && project.contributions.length > 0 && (
                    <section className="mt-16 border-t border-white/10 pt-12">
                        <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
                            02 — My Contribution
                        </p>

                        <h2 className="mt-4 text-2xl font-semibold">
                            What I Did
                        </h2>

                        <ul className="mt-6 space-y-4">
                            {project.contributions.map((contribution) => (
                                <li
                                    key={contribution}
                                    className="flex items-start gap-3 leading-8 text-zinc-400"
                                >
                                    <span aria-hidden="true" className="text-cyan-400">
                                        →
                                    </span>

                                    <span>{contribution}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}
                {project.architecture && project.architecture.length > 0 && (
                    <section className="mt-16 border-t border-white/10 pt-12">
                        <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
                            03 — Architecture
                        </p>

                        <h2 className="mt-4 text-2xl font-semibold">
                            System Architecture
                        </h2>

                        <ol className="mt-8 list-none space-y-6">
                            {project.architecture.map((step, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <span className="font-mono text-sm text-cyan-400">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <p className="leading-7 text-zinc-400">{step}</p>
                                </li>
                            ))}
                        </ol>
                        {project.id === "video-hosting" && <VideoArchitecture />}
                        {project.id === "pr-environments" && <DeploymentArchitecture />}
                        {project.id === "domain-routing" && <RoutingArchitecture />}
                    </section>
                )}
                {project.deploymentWorkflow &&
                    project.deploymentWorkflow.length > 0 && (
                        <section className="mt-16 border-t border-white/10 pt-12">
                            <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
                                Deployment Lifecycle
                            </p>

                            <h2 className="mt-4 text-2xl font-semibold">
                                From Pull Request to Production
                            </h2>

                            <div className="mt-8 grid gap-6 lg:grid-cols-2">
                                {project.deploymentWorkflow.map((workflow) => (
                                    <article
                                        key={workflow.title}
                                        className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                                    >
                                        <h3 className="text-lg font-semibold text-white">
                                            {workflow.title}
                                        </h3>

                                        <ol className="mt-6 list-decimal space-y-4 pl-5 text-zinc-400 marker:text-cyan-400">
                                            {workflow.steps.map((step) => (
                                                <li key={step} className="pl-2 leading-7">
                                                    {step}
                                                </li>
                                            ))}
                                        </ol>
                                    </article>
                                ))}
                            </div>
                        </section>
                    )}
                {project.engineeringDecisions &&
                    project.engineeringDecisions.length > 0 && (
                        <section className="mt-16 border-t border-white/10 pt-12">
                            <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
                                04 — Engineering Decisions
                            </p>

                            <h2 className="mt-4 text-2xl font-semibold">
                                Design Decisions & Tradeoffs
                            </h2>

                            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                {project.engineeringDecisions.map((decision) => (
                                    <article
                                        key={decision.title}
                                        className="rounded-xl border border-white/10 bg-white/[0.03] p-6"
                                    >
                                        <h3 className="text-lg font-semibold text-white">
                                            {decision.title}
                                        </h3>

                                        <p className="mt-4 leading-7 text-zinc-400">
                                            {decision.explanation}
                                        </p>
                                    </article>
                                ))}
                            </div>
                        </section>
                    )}
                {((project.outcomes && project.outcomes.length > 0) ||
                    (project.learnings && project.learnings.length > 0)) && (
                        <section className="mt-16 border-t border-white/10 pt-12">
                            <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
                                05 — Outcomes & Learnings
                            </p>

                            <h2 className="mt-4 text-2xl font-semibold">
                                Impact & Key Takeaways
                            </h2>

                            <div className="mt-8 grid gap-8 md:grid-cols-2">
                                {project.outcomes && project.outcomes.length > 0 && (
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">
                                            Outcomes
                                        </h3>

                                        <ul className="mt-5 space-y-4">
                                            {project.outcomes.map((outcome) => (
                                                <li
                                                    key={outcome}
                                                    className="flex items-start gap-3 text-zinc-400"
                                                >
                                                    <span aria-hidden="true" className="text-cyan-400">
                                                        ✓
                                                    </span>

                                                    <span className="leading-7">{outcome}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {project.learnings && project.learnings.length > 0 && (
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">
                                            Key Learnings
                                        </h3>

                                        <ul className="mt-5 space-y-4">
                                            {project.learnings.map((learning) => (
                                                <li
                                                    key={learning}
                                                    className="flex items-start gap-3 text-zinc-400"
                                                >
                                                    <span aria-hidden="true" className="text-cyan-400">
                                                        →
                                                    </span>

                                                    <span className="leading-7">{learning}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </section>
                    )}
            </div>
        </main>
    );
}