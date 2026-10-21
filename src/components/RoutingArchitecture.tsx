
export default function RoutingArchitecture() {
    const box =
        "rounded-xl border border-white/10 bg-white/[0.03] p-5";

    return (
        <div className="mt-10 space-y-6">
            <div className={box}>
                <p className="text-xs uppercase tracking-widest text-cyan-400">
                    Incoming Request
                </p>
                <h3 className="mt-2 text-lg font-semibold text-white">
                    Shared Next.js Application
                </h3>
                <p className="mt-2 text-sm text-zinc-400">
                    Multiple domains, countries, and localized experiences
                </p>
            </div>

            <div className="text-center text-cyan-400">↓</div>

            <div className={box}>
                <p className="text-xs uppercase tracking-widest text-cyan-400">
                    Request Evaluation
                </p>
                <h3 className="mt-2 text-lg font-semibold text-white">
                    Next.js Middleware
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                    {["Hostname", "Country", "Accepted Language"].map(
                        (item) => (
                            <span
                                key={item}
                                className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300"
                            >
                                {item}
                            </span>
                        )
                    )}
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <div className={box}>
                    <p className="text-xs uppercase tracking-widest text-cyan-400">
                        Experience Available
                    </p>
                    <h3 className="mt-2 font-semibold text-white">
                        Redirect to Localized URL
                    </h3>
                    <p className="mt-2 text-sm text-zinc-400">
                        Direct the visitor to the appropriate country-specific
                        experience when a redirect is needed.
                    </p>
                    <p className="mt-4 text-sm text-cyan-300">
                        ↓ Internal Route Rewrite
                    </p>
                    <p className="mt-2 text-sm text-zinc-300">
                        Serve the correct localized content while preserving the
                        public URL.
                    </p>
                </div>

                <div className={box}>
                    <p className="text-xs uppercase tracking-widest text-zinc-400">
                        Experience Unavailable
                    </p>
                    <h3 className="mt-2 font-semibold text-white">
                        Country Availability Page
                    </h3>
                    <p className="mt-2 text-sm text-zinc-400">
                        Show an appropriate message when the requested
                        experience is not supported in the visitor&apos;s country.
                    </p>
                </div>
            </div>
        </div>
    );
}
