"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSidebar } from "./context/SidebarContext";

export default function Header() {
    const pathname = usePathname();
    const { toggleSidebar } = useSidebar();

    const isActive = (path) => {
        return pathname.startsWith(path);
    };

    const isBoatsSection = pathname.startsWith('/adboatrental');
    const accentColor = isBoatsSection ? '#A8BBC7' : '#a36e3a';

    return (
        <header className="text-black shadow-md fixed top-0 left-0 w-full z-50 bg-white">
            <nav className="max-w-[1600px] mx-auto px-8 py-4 pb-9">
                <div className="flex justify-between items-center">
                    <Link href="/" className="font-bold font-black flex items-center">
                        <Image src={isBoatsSection ? "/Isotipogris.svg" : "/Isotipo-marron.svg"} alt="logo" width={100} height={100} />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {/* Villas Dropdown */}
                        <div className="relative group">
                            <Link
                                href="/adboutiquevillas/accommodations"
                                className="font-arnoPro transition-colors"
                                style={{
                                    color: isActive('/adboutiquevillas') ? '#6b7280' : accentColor
                                }}
                            >
                                Villas
                            </Link>
                            {/* Dropdown */}
                            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                <div className="flex flex-col text-sm text-gray-600 whitespace-nowrap">
                                    <span className="border-l-2 pl-2 py-1" style={{ borderColor: accentColor }}>Icod</span>
                                    <span className="border-l-2 pl-2 py-1" style={{ borderColor: accentColor }}>Santa Cruz</span>
                                </div>
                            </div>
                        </div>

                        {/* Boats Dropdown */}
                        <div className="relative group">
                            <Link
                                href="/adboatrental/"
                                className="transition-colors"
                                style={{
                                    color: isActive('/adboatrental') ? '#6b7280' : accentColor
                                }}
                            >
                                Boats
                            </Link>
                            {/* Dropdown */}
                            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                <div className="flex flex-col text-sm text-gray-600 whitespace-nowrap">
                                    <span className="border-l-2 pl-2 py-1" style={{ borderColor: accentColor }}>Tenerife</span>
                                    <span className="border-l-2 pl-2 py-1" style={{ borderColor: accentColor }}>Lanzarote</span>
                                </div>
                            </div>
                        </div>

                        <Link
                            href="/jetski/"
                            className="transition-colors"
                            style={{
                                color: isActive('/jetski') ? '#6b7280' : accentColor
                            }}
                        >
                            Jetski
                        </Link>

                        <Link
                            href="/caradventures/"
                            className="transition-colors"
                            style={{
                                color: isActive('/caradventures') ? '#6b7280' : accentColor
                            }}
                        >
                            Cars
                        </Link>

                        <Link
                            href="/professionals/"
                            className="transition-colors"
                            style={{
                                color: isActive('/professionals') ? '#6b7280' : accentColor
                            }}
                        >
                            About
                        </Link>
                        <Link
                            href="/booknow/"
                            className={isBoatsSection ? "animated-book-button-boats" : "animated-book-button"}
                        >
                            <span className="button-bg">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </span>
                            <span className="button-text">Book</span>
                            <span className="button-spacer">Book</span>
                        </Link>

                        {/* Hamburger Menu */}
                        <button
                            onClick={toggleSidebar}
                            className="cursor-pointer hover:scale-110 transition-all duration-300 p-2 rounded-full"
                            style={{ backgroundColor: accentColor }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}