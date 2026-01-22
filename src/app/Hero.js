import Image from "next/image";

export default function Hero({ videoUrl }) {
    return (
        <div className="relative w-full h-screen">
            {videoUrl ? (
                // YouTube video for pages that pass videoUrl prop
                <iframe
                    src={`https://www.youtube.com/embed/${videoUrl}?autoplay=1&mute=1&loop=1&playlist=${videoUrl}&controls=0&showinfo=0&rel=0&modestbranding=1`}
                    title="Hero Video"
                    className="absolute inset-0 w-full h-full object-cover"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    style={{ border: 'none', pointerEvents: 'none' }}
                />
            ) : (
                <>
                    {/* Desktop Video - Banner */}
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="hidden md:block absolute inset-0 w-full h-full object-cover"
                    >
                        <source src="/01_MASTER_Banner.mov" type="video/quicktime" />
                        <source src="/intro-video.mp4" type="video/mp4" />
                    </video>

                    {/* Mobile Video - Responsive */}
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="md:hidden absolute inset-0 w-full h-full object-cover"
                    >
                        <source src="/01_MASTER_Responsive.mov" type="video/quicktime" />
                        <source src="/intro-video.mp4" type="video/mp4" />
                    </video>

                    {/* Fallback Image */}
                    <Image
                        src="/adboutiquevillas_3.png"
                        alt="Hero Image"
                        fill
                        priority
                        className="object-cover object-center -z-10"
                        sizes="100vw"
                        quality={100}
                    />
                </>
            )}
        </div>
    );
}