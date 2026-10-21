export default function Hero() {
    return (<section className="mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center py-24">

        <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
            Software Engineer · Problem Solver · Builder
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            I figure things out.{" "}
            <span className="text-zinc-400">I see them through.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            I'm a software engineer with 9+ years of experience building backend systems,
            cloud infrastructure, and web applications. I enjoy tackling unfamiliar
            problems, understanding how systems work, and turning complex
            challenges into practical, reliable solutions.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
            <a
                href="#work"
                className="rounded-full bg-cyan-400 px-6 py-3 font-medium text-black transition hover:bg-cyan-300"
            >
                View My Work →
            </a>

            <a
                href="mailto:aayushi0211@gmail.com"
                className="rounded-full border border-white/20 px-6 py-3 font-medium transition hover:bg-white/10"
            >
                Get in Touch
            </a>
        </div>

        <div className="mt-16 border-t border-white/10 pt-6">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                Technologies I&apos;ve worked with
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-zinc-400">
                <span>C# / .NET</span>
                <span>Python</span>
                <span>Node.js</span>
                <span>Next.js</span>
                <span>React.js</span>
                <span>TypeScript</span>
                <span>Node.js</span>
                <span>AWS</span>
                <span>Azure</span>
                <span>IaC</span>
            </div>
        </div>

    </section>)
}