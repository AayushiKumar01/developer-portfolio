export default function Navbar() {
    return (
        <nav className="mx-auto flex max-w-6xl items-center justify-between">
            <a href="/" className="text-lg font-semibold tracking-tight">
                Aayushi Kumar<span className="text-cyan-400">.</span>
            </a>

            <a
                href="#contact"
                className="rounded-full border border-white/20 px-5 py-2 text-sm transition hover:border-cyan-400 hover:text-cyan-400"
            >
                Contact Me
            </a>
        </nav>
    );
}