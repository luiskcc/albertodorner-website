"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSidebar } from '../context/SidebarContext'

export default function SideBarBoats() {
    const { isOpen, toggleSidebar } = useSidebar()
    const pathname = usePathname()
    const [activitiesOpen, setActivitiesOpen] = useState(true)

    const activityLinks = [
        { name: 'Rent', href: '/adboatrental#boats-offer' },
        { name: 'Tours & Events', href: '/adboatrental/tours-events' },
        { name: 'Club', href: '/adboatrental/club' },
    ]

    return (
        <>
            {isOpen && (
                <div className="fixed top-20 left-0 h-screen w-1/4 z-30">
                    {/* White background layer */}
                    <div className="absolute inset-0 bg-white/80 pointer-events-none" />

                    {/* Watermark layer - 20% opacity */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            backgroundImage: "url('/gray-logo-ad.svg')",
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: '60% center',
                            backgroundSize: '300%',
                            backgroundAttachment: 'fixed',
                            opacity: 0.2
                        }}
                    />

                    {/* Content layer - full opacity */}
                    <div className="relative h-full pl-6 pr-4 pointer-events-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer hover:scale-110 transition-all duration-300 size-6 absolute text-[#A8BCC7] right-2 -top-4 bg-white p-1 rounded-full z-50" onClick={toggleSidebar}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>

                        <div className="font-cormorant flex flex-col mt-26 relative z-10">
                            {/* Activities Section - Accordion */}
                            <div className="flex flex-col">
                                <button
                                    onClick={() => setActivitiesOpen(!activitiesOpen)}
                                    className="font-cormorant italic text-4xl text-gray-400 cursor-pointer hover:text-[#A8BCC7] transition-colors flex items-center gap-2 mb-4"
                                    style={{ fontWeight: '300', letterSpacing: '1px' }}
                                >
                                    Activities
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className={`size-5 transition-transform duration-300 ${activitiesOpen ? 'rotate-90' : ''}`}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                                {activitiesOpen && (
                                    <div className="flex flex-col mb-8">
                                        {activityLinks.map((link, idx) => (
                                            <div key={idx}>
                                                <div className="border-t border-gray-300"></div>
                                                <Link
                                                    href={link.href}
                                                    className={`font-cormorant italic text-xl py-3 transition-all duration-300 hover:scale-105 flex items-center justify-between ${pathname.startsWith(link.href) ? 'text-[#A8BCC7]' : 'text-gray-400'}`}
                                                    style={{ fontWeight: '300', letterSpacing: '1px' }}
                                                >
                                                    {link.name}
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        ))}
                                        <div className="border-t border-gray-300"></div>
                                    </div>
                                )}
                            </div>

                            {/* Live Weather & Cams */}
                            <Link
                                href="/adboatrental/weather-cams"
                                className={`font-cormorant italic text-4xl mb-8 transition-all duration-300 hover:scale-105 ${pathname.startsWith('/adboatrental/weather-cams') ? 'text-[#A8BCC7]' : 'text-gray-400'}`}
                                style={{ fontWeight: '300', letterSpacing: '1px' }}
                            >
                                Live Weather & Cams
                            </Link>

                            {/* Blog */}
                            <Link
                                href="/adboatrental/blog"
                                className={`font-cormorant italic text-4xl mb-8 transition-all duration-300 hover:scale-105 ${pathname.startsWith('/adboatrental/blog') ? 'text-[#A8BCC7]' : 'text-gray-400'}`}
                                style={{ fontWeight: '300', letterSpacing: '1px' }}
                            >
                                Blog
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
