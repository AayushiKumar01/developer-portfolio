function ArchitectureStep({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    return (
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-center">
            <h4 className="font-semibold text-white">{title}</h4>
            <p className="mt-2 text-sm text-zinc-400">{description}</p>
        </div>
    );
}

function FlowArrow() {
    return (
        <div aria-hidden="true" className="py-2 text-center text-cyan-400">
            ↓
        </div>
    );
}

export default function VideoArchitecture() {
    return (
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 p-5">
                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-cyan-400">
                    Workflow 01
                </p>

                <h3 className="mb-6 text-xl font-semibold">
                    Video Publishing & Conversion
                </h3>

                <ArchitectureStep
                    title="Veeva → Amazon S3"
                    description="Approved MP4 video is published"
                />

                <FlowArrow />

                <ArchitectureStep
                    title="S3 Event → AWS Lambda"
                    description="Automatically starts processing"
                />

                <FlowArrow />

                <ArchitectureStep
                    title="AWS Elemental MediaConvert"
                    description="Generates HLS streaming assets"
                />

                <FlowArrow />

                <ArchitectureStep
                    title="Amazon S3"
                    description="Stores playlists and media segments"
                />
            </div>

            <div className="rounded-2xl border border-white/10 p-5">
                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-cyan-400">
                    Workflow 02
                </p>

                <h3 className="mb-6 text-xl font-semibold">
                    Video Retrieval
                </h3>

                <ArchitectureStep
                    title="Web Application"
                    description="Requests video using its identifier"
                />

                <FlowArrow />

                <ArchitectureStep
                    title="CloudFront → API Gateway"
                    description="Routes the video API request"
                />

                <FlowArrow />

                <ArchitectureStep
                    title="AWS Lambda"
                    description="Locates the correct S3 video folder and manifest"
                />

                <FlowArrow />

                <ArchitectureStep
                    title="HLS Manifest"
                    description="Returned to the calling application"
                />
            </div>
        </div>
    );
}