"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AccommodationsOffer() {
    const [hoveredApartment, setHoveredApartment] = useState<string | null>(null);

    const apartments = [
        { id: "A", href: "/adboutiquevillas/accommodations/apartment-a", image: "/DJI_0285_1-1.jpg", videoId: "-Lx_4ETfQ0A", gridClass: "grid-yellow" },
        { id: "D", href: "/adboutiquevillas/accommodations/apartment-b", image: "/Apartment_B_interior_06 copy.jpg", videoId: "lpE8VMwSitQ", gridClass: "grid-pink" },
        { id: "B", href: "/adboutiquevillas/accommodations/apartment-c", image: "/adboutiquevillas_3.png", videoId: "amFUPT2tZ5I", gridClass: "grid-blue-tall" },
        { id: "G", href: "/adboutiquevillas/accommodations/apartment-d", image: "/DCC_6248.jpg", videoId: "rSthcBfapS4", gridClass: "grid-white" },
        { id: "C", href: "/adboutiquevillas/accommodations/apartment-g", image: "/Apartment_G_terrace_02.jpg", videoId: "", gridClass: "grid-green" },
        { id: "H", href: "/adboutiquevillas/accommodations/apartment-h", image: "/03.jpg", videoId: "", gridClass: "grid-blue-bottom-left" },
        { id: "I", href: "/adboutiquevillas/accommodations/apartment-i", image: "/Apartment_C_exterior_10 copy.jpg", videoId: "E5_EHtpRsRk", gridClass: "grid-blue-bottom-right" },
    ];

    return (
        <div className="w-full py-16 px-4 md:px-8" id="accommodations-offer">
            <div className="grid-container">
                {apartments.map((apartment) => (
                    <Link
                        key={apartment.id}
                        href={apartment.href}
                        className={`${apartment.gridClass} group relative overflow-hidden`}
                        onMouseEnter={() => setHoveredApartment(apartment.id)}
                        onMouseLeave={() => setHoveredApartment(null)}
                    >
                        {hoveredApartment === apartment.id && apartment.videoId ? (
                            <iframe
                                src={`https://www.youtube.com/embed/${apartment.videoId}?autoplay=1&mute=1&loop=1&playlist=${apartment.videoId}&controls=0&showinfo=0&rel=0&modestbranding=1`}
                                title={`Apartment ${apartment.id} Video`}
                                className="absolute inset-0 w-full h-full object-cover"
                                allow="autoplay; encrypted-media"
                                style={{ border: 'none', pointerEvents: 'none' }}
                            />
                        ) : (
                            <Image src={apartment.image} alt={`Apartment ${apartment.id}`} fill style={{objectFit:"cover"}} className="transition-transform duration-300 group-hover:scale-110" />
                        )}
                        <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg z-10 transition-all duration-300 group-hover:scale-110">
                            <span className="font-cormorant italic text-xl text-[#a36e3a]">{apartment.id}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
