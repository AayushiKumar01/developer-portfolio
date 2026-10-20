export default function Footer() {
    return (
        <footer className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-white/10 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Aayushi Kumar</p>
            <p>Built with Next.js &amp; TypeScript</p>
        </footer>
    );
}