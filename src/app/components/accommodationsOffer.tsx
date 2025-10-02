"use client"

import Image from "next/image";
import Link from "next/link";

export default function AccommodationsOffer() {
    return (
        <div className="w-full py-16 px-4 md:px-8" id="accommodations-offer">
            <div className="grid-container">
                <Link href="/adboutiquevillas/accommodations/apartment-a" className="grid-yellow group">
                    <Image src="/DJI_0285_1-1.jpg" alt="Apartment A" fill style={{objectFit:"cover"}} className="transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg z-10 transition-all duration-300 group-hover:scale-110">
                        <span className="font-cormorant italic text-xl text-[#a36e3a]">A</span>
                    </div>
                </Link>

                <Link href="/adboutiquevillas/accommodations/apartment-b" className="grid-pink group">
                    <Image src="/Apartment_B_interior_06 copy.jpg" alt="Apartment B" fill style={{objectFit:"cover"}} className="transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg z-10 transition-all duration-300 group-hover:scale-110">
                        <span className="font-cormorant italic text-xl text-[#a36e3a]">B</span>
                    </div>
                </Link>

                <Link href="/adboutiquevillas/accommodations/apartment-c" className="grid-blue-tall group">
                    <Image src="/adboutiquevillas_3.png" alt="Apartment C" fill style={{objectFit:"cover"}} className="transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg z-10 transition-all duration-300 group-hover:scale-110">
                        <span className="font-cormorant italic text-xl text-[#a36e3a]">C</span>
                    </div>
                </Link>

                <Link href="/adboutiquevillas/accommodations/apartment-d" className="grid-white group">
                    <Image src="/DCC_6248.jpg" alt="Apartment D" fill style={{objectFit:"cover"}} className="transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg z-10 transition-all duration-300 group-hover:scale-110">
                        <span className="font-cormorant italic text-xl text-[#a36e3a]">D</span>
                    </div>
                </Link>

                <Link href="/adboutiquevillas/accommodations/apartment-e" className="grid-green group">
                    <Image src="/Apartment_G_terrace_02.jpg" alt="Apartment E" fill style={{objectFit:"cover"}} className="transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg z-10 transition-all duration-300 group-hover:scale-110">
                        <span className="font-cormorant italic text-xl text-[#a36e3a]">E</span>
                    </div>
                </Link>

                <Link href="/adboutiquevillas/accommodations/apartment-f" className="grid-blue-bottom-left group">
                    <Image src="/03.jpg" alt="Apartment F" fill style={{objectFit:"cover"}} className="transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg z-10 transition-all duration-300 group-hover:scale-110">
                        <span className="font-cormorant italic text-xl text-[#a36e3a]">F</span>
                    </div>
                </Link>

                <Link href="/adboutiquevillas/accommodations/apartment-g" className="grid-blue-bottom-right group">
                    <Image src="/Apartment_C_exterior_10 copy.jpg" alt="Apartment G" fill style={{objectFit:"cover"}} className="transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg z-10 transition-all duration-300 group-hover:scale-110">
                        <span className="font-cormorant italic text-xl text-[#a36e3a]">G</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}
