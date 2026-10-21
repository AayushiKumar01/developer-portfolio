export default function About() {
    return (<section
        id="about"
        className="mx-auto max-w-6xl border-t border-white/10 py-24"
    >
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
            About Me
        </p>

        <div className="grid gap-10 md:grid-cols-2">
            <h2 className="max-w-lg text-3xl font-semibold tracking-tight sm:text-4xl">
                Curiosity drives me.{" "}
                <span className="text-zinc-500">
                    Persistence defines me.
                </span>
            </h2>

            <div className="space-y-6 leading-8 text-zinc-400">
                <p>
                    I enjoy investigating complex problems, learning
                    unfamiliar technologies, and collaborating with
                    engineers to turn ideas into working solutions.
                </p>

                <p>
                    My approach to engineering is grounded in curiosity, persistence,
                    and ownership. I believe good solutions come from understanding
                    the problem deeply, making thoughtful technical decisions,
                    and following through until the work is delivered.
                </p>

                <p>
                    I&apos;m particularly drawn to backend systems,
                    cloud infrastructure, and opportunities to
                    simplify complex engineering challenges.
                </p>
            </div>
        </div>

        <div className="mt-16 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-3">
            <div>
                <p className="mb-3 text-sm text-cyan-400">01</p>
                <h3 className="text-lg font-semibold">Stay curious</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                    Ask questions, explore possibilities, and keep learning.
                </p>
            </div>

            <div>
                <p className="mb-3 text-sm text-cyan-400">02</p>
                <h3 className="text-lg font-semibold">Solve deeply</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                    Understand the problem before choosing the solution.
                </p>
            </div>

            <div>
                <p className="mb-3 text-sm text-cyan-400">03</p>
                <h3 className="text-lg font-semibold">Own outcomes</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                    Follow through, collaborate, and focus on delivering.
                </p>
            </div>
        </div>
    </section>)
}