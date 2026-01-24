"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function BoatsOffer() {
    const [hoveredBoat, setHoveredBoat] = useState<string | null>(null);

    const boats = [
        { id: "BREEZE", licenseType: "Licence", href: "/adboatrental/breeze", image: "/boats/breeze-rand.webp", videoId: "", gridClass: "grid-yellow" },
        { id: "PLAY", licenseType: "Captain", href: "/adboatrental/play", image: "/boats/play_24.jpg", videoId: "", gridClass: "grid-pink" },
        { id: "SAXDOR", licenseType: "Licence", href: "/adboatrental/saxdor", image: "/boats/saxdor.webp", videoId: "", gridClass: "grid-blue-tall" },
        { id: "COMPASS", licenseType: "No licence", href: "/adboatrental/compass", image: "/boats/compass-160e.jpg", videoId: "", gridClass: "grid-white" },
        { id: "SILVER", licenseType: "No licence", href: "/adboatrental/silver", image: "/boats/silver-555.png", videoId: "", gridClass: "grid-green" },
        { id: "MANA", licenseType: "Captain", href: "/adboatrental/mana", image: "/boats/mana-rand.webp", videoId: "", gridClass: "grid-bottom-wide" },
    ];

    return (
        <div className="w-full py-16 px-4 md:px-8" id="boats-offer">
            {/* Header */}
            <div className="flex items-center gap-4 mb-10 max-w-6xl mx-auto">
                <h2 className="font-cormorant text-5xl text-[#A8BBC7] font-bold whitespace-nowrap" style={{ fontWeight: '300', letterSpacing: '1px' }}>
                    Select your boat
                </h2>
                <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Grid */}
            <div className="grid-container">
                {boats.map((boat) => (
                    <Link
                        key={boat.id}
                        href={boat.href}
                        className={`${boat.gridClass} group relative overflow-hidden`}
                        onMouseEnter={() => setHoveredBoat(boat.id)}
                        onMouseLeave={() => setHoveredBoat(null)}
                    >
                        {hoveredBoat === boat.id && boat.videoId ? (
                            <iframe
                                src={`https://www.youtube.com/embed/${boat.videoId}?autoplay=1&mute=1&loop=1&playlist=${boat.videoId}&controls=0&showinfo=0&rel=0&modestbranding=1`}
                                title={`${boat.id} Video`}
                                className="absolute inset-0 w-full h-full object-cover"
                                allow="autoplay; encrypted-media"
                                style={{ border: 'none', pointerEvents: 'none' }}
                            />
                        ) : (
                            <Image src={boat.image} alt={boat.id} fill style={{objectFit:"cover"}} className="transition-transform duration-300 group-hover:scale-110" />
                        )}

                        {/* License Type Tag */}
                        <div className="absolute top-3 left-3 z-10">
                            <span className="font-cormorant italic text-base text-white bg-[#5a7a8a]/80 px-3 py-1" style={{ fontWeight: '600' }}>
                                {boat.licenseType}
                            </span>
                        </div>

                        {/* Boat Name Button */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                            <div className="bg-white/90 px-6 py-2 rounded-full shadow-lg transition-all duration-300 group-hover:scale-110">
                                <span className="font-cormorant text-sm text-[#5a7a8a] tracking-wider" style={{ fontWeight: '400' }}>
                                    {boat.id}
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
