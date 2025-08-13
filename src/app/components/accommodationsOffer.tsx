"use client"

import Image from "next/image";
import Link from "next/link";


export default function AccommodationsOffer() {
    return (
        <div className="pinterest-grid" id="accommodations-offer">
            <div className="grid-item item-a flex flex-col gap-4 container mx-auto mb-120">
                <Link href="/adboutiquevillas/accommodations/apartment-a">
                    <Image src="/DJI_0285_1-1.jpg" alt="accommodations-1" className="hover:opacity-50 transition-all duration-300" width={300} height={500} />
                    <span className="opacity-70 text-[#a36e3a] text-xl bg-white px-4 py-2 rounded-full font-bold absolute top-20 left-20">A</span>
                </Link>
                
                <Link href="/adboutiquevillas/accommodations/apartment-a/page.js">
                    <Image src="/03.jpg" alt="accommodations-1" width={300} height={400} className="hover:opacity-50 transition-all duration-300 h-[400px]" />
                    <span className="opacity-70 text-[#a36e3a] text-xl bg-white px-4 py-2 rounded-full font-bold bottom-20 left-20 absolute">D</span>
                </Link>
            </div>
            <div className="grid-item item-b flex flex-col gap-4 mb-120 container mx-auto">
                <Link href="/adboutiquevillas/accommodations/apartment-b">
                    <Image src="/Apartment_B_interior_06 copy.jpg" alt="accommodations-1" width={300} height={700} className="hover:opacity-50 transition-all duration-300 h-[600px]" />
                    <span className="opacity-70 text-[#a36e3a] text-xl bg-white px-4 py-2 rounded-full font-bold absolute top-20 left-20">B</span>
                </Link>
                <Link href="/adboutiquevillas/accommodations/apartment-b/page.js">
                    <Image src="/Apartment_G_terrace_02.jpg" alt="accommodations-2" width={700} height={300} className="hover:opacity-50 transition-all duration-300 h-[400px]" />
                    <span className="opacity-70 text-[#a36e3a] text-xl bg-white px-4 py-2 rounded-full font-bold absolute bottom-20 left-20">E</span>
                </Link>
            </div>
            <div className="grid-item item-c"> 
                <Link href="/adboutiquevillas/accommodations/apartment-c">
                    <Image src="/adboutiquevillas_3.png" alt="accommodations-3" width={700} height={700} className="hover:opacity-50 transition-all duration-300 h-full" />
                    <span className="opacity-70 text-[#a36e3a] text-xl bg-white px-4 py-2 rounded-full font-bold absolute top-20 left-20">C</span>
                </Link>
            </div>
            <div className="grid-item item-d">
                <Link href="/adboutiquevillas/accommodations/apartment-d">
                    <Image src="/adboutiquevillas_1.png" alt="accommodations-4" width={500} height={1200} className="hover:opacity-50 transition-all duration-300 h-[400px]" />
                    <span className="opacity-70 text-[#a36e3a] text-xl bg-white px-4 py-2 rounded-full font-bold absolute top-20 left-20">F</span>
                </Link>
            </div>
            <div className="grid-item item-e">
                <Link href="/adboutiquevillas/accommodations/apartment-e">
                    <Image src="/adboutiquevillas_2.png" alt="accommodations-5" width={300} height={300} className="hover:opacity-50 transition-all duration-300 h-[400px]" />
                    <span className="opacity-70 text-[#a36e3a] text-xl bg-white px-4 py-2 rounded-full font-bold absolute top-20 left-20">G</span>
                </Link>
            </div>
        </div>
    )
}
