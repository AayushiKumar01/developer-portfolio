export default function Contact() {
    return (
        <section
            id="contact"
            className="mx-auto max-w-6xl border-t border-white/10 py-24"
        >
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
                Get in Touch
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
                Have a problem worth solving?
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                I&apos;m always interested in meaningful engineering challenges,
                thoughtful conversations, and opportunities to build something useful.
            </p>

            <a
                href="mailto:aayushi0211@gmail.com"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-medium text-black transition hover:bg-cyan-300"
            >
                Say Hello <span aria-hidden="true">↗</span>
            </a>
        </section>
    )
}