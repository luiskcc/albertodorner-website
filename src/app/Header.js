"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    const isActive = (path) => {
        return pathname.startsWith(path);
    };

    return (
        <header className="text-black shadow-md fixed top-0 left-0 w-full z-50 bg-white">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <Link href="/" className="font-bold font-black flex items-center">
                        <Image src="/Isotipo-marron.svg" alt="logo" width={100} height={100} />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {/* Dropdown Example */}
                        <div className="relative group">
                            <Link
                                href="/adboutiquevillas/accommodations"
                                className={`font-arnoPro transition-colors ${
                                    isActive('/adboutiquevillas')
                                        ? 'text-gray-600'
                                        : 'text-[#a36e3a] hover:text-[#8d5d33]'
                                }`}
                            >
                                Villas
                            </Link>
                        </div>
                        <div className="relative group">
                            <Link
                                href="/adboatrental/"
                                className={`transition-colors ${
                                    isActive('/adboatrental')
                                        ? 'text-gray-600'
                                        : 'text-[#a36e3a] hover:text-[#8d5d33]'
                                }`}
                            >
                                Boats
                            </Link>
                        </div>

                        <Link
                            href="/caradventures/"
                            className={`transition-colors ${
                                isActive('/caradventures')
                                    ? 'text-gray-600'
                                    : 'text-[#a36e3a] hover:text-[#8d5d33]'
                            }`}
                        >
                            Jetskies
                        </Link>
                        {/* Dropdown Example */}
                        <div className="relative group">
                            <Link
                                href="/professionals/"
                                className={`transition-colors ${
                                    isActive('/professionals')
                                        ? 'text-gray-600'
                                        : 'text-[#a36e3a] hover:text-[#8d5d33]'
                                }`}
                                style={{ padding: '7px 12px' }}
                            >
                                About
                            </Link>
                        </div>
                        <Link href="/booknow/" className="animated-book-button">
                            <span className="button-bg">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </span>
                            <span className="button-text">Book</span>
                            <span className="button-spacer">Book</span>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}