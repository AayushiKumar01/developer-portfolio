type ServiceNodeProps = {
    title: string;
    description: string;
    accent?: boolean;
};

function ServiceNode({
    title,
    description,
    accent = false,
}: ServiceNodeProps) {
    return (
        <div
            className={`rounded-xl border p-4 text-center ${accent
                ? "border-cyan-400/30 bg-cyan-400/[0.06]"
                : "border-white/10 bg-white/[0.03]"
                }`}
        >
            <h4 className="font-semibold text-white">{title}</h4>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
                {description}
            </p>
        </div>
    );
}

function Arrow() {
    return (
        <div
            aria-hidden="true"
            className="py-3 text-center text-xl text-cyan-400"
        >
            ↓
        </div>
    );
}

export default function DeploymentArchitecture() {
    return (
        <div className="mt-10 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
                    Infrastructure Architecture
                </p>

                <h3 className="mt-3 text-xl font-semibold text-white">
                    Container Build & Deployment
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                    A managed AWS deployment platform designed for
                    simplicity, repeatability, and isolated reviews.
                </p>

                <div className="mx-auto mt-8 max-w-xl">
                    <ServiceNode
                        title="GitHub Actions"
                        description="Automated CI/CD workflows"
                    />

                    <Arrow />

                    <ServiceNode
                        title="Docker + Amazon ECR"
                        description="Build and store application container images"
                    />

                    <Arrow />

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <ServiceNode
                            title="AWS App Runner"
                            description="Isolated pull-request environments"
                            accent
                        />

                        <ServiceNode
                            title="AWS App Runner"
                            description="Persistent preview and production environments"
                            accent
                        />
                    </div>
                </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
                    Supporting Infrastructure
                </p>

                <h3 className="mt-3 text-xl font-semibold text-white">
                    Routing, Security & Configuration
                </h3>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <ServiceNode
                        title="Amazon Route 53"
                        description="DNS and domain management"
                    />

                    <ServiceNode
                        title="Amazon CloudFront"
                        description="Content delivery and request routing"
                    />

                    <ServiceNode
                        title="Application Middleware + Okta"
                        description="OIDC-based authentication for pull-request preview URLs"
                    />

                    <ServiceNode
                        title="AWS Secrets Manager"
                        description="Centralized application secrets management"
                    />
                </div>
            </div>

            <p className="text-xs leading-6 text-zinc-500">
                Simplified architectural overview. Internal resource
                identifiers, domain names, and security configurations
                are intentionally omitted.
            </p>
        </div>
    );
}