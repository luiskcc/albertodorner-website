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
                            <div className="circle"></div>
                            <svg className="arr-2" viewBox="0 0 24 24">
                                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                            </svg>
                            <span className="text font-thin">Book</span>
                            <svg className="arr-1" viewBox="0 0 24 24">
                                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}