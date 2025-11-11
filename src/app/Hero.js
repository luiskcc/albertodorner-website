import Image from "next/image";

export default function Hero({ videoUrl }) {
    return (
        <div className="relative w-full h-screen">
            {videoUrl ? (
                <iframe
                    src={`https://www.youtube.com/embed/${videoUrl}?autoplay=1&mute=1&loop=1&playlist=${videoUrl}&controls=0&showinfo=0&rel=0&modestbranding=1`}
                    title="Hero Video"
                    className="absolute inset-0 w-full h-full object-cover"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    style={{ border: 'none', pointerEvents: 'none' }}
                />
            ) : (
                <Image
                    src="/adboutiquevillas_3.png"
                    alt="Hero Image"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="100vw"
                    quality={100}
                />
            )}
        </div>
    );
}