
export default function Footer() {
    return (
        <footer className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-white/10 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Aayushi Kumar</p>

            <div className="flex items-center gap-5">
                <a
                    href="https://github.com/AayushiKumar01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-cyan-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
                >
                    GitHub
                </a>

                <a
                    href="https://www.linkedin.com/in/aayushi-kumar-247b68108/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-cyan-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
                >
                    LinkedIn
                </a>
            </div>

            <p>Built with Next.js &amp; TypeScript</p>
        </footer>
    );
}
