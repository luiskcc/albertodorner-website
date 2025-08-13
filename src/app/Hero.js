import Image from "next/image";

export default function Hero() {
    return (
        <div className="relative w-full h-screen">
            <Image 
                src="/adboutiquevillas_3.png" 
                alt="Hero Image" 
                fill
                priority
                className="object-cover object-center"
                sizes="100vw"
                quality={100}
            />
        </div>
    );
}