"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSidebar } from '../context/SidebarContext'

export default function SideBar() {
    const { isOpen, toggleSidebar } = useSidebar()
    const pathname = usePathname()

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
                    <div className="relative h-full pl-3 pointer-events-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer hover:scale-110 transition-all duration-300 size-6 absolute text-[#a36e3a] right-2 bg-white p-1 rounded-full z-50" onClick={toggleSidebar}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <div className="font-cormorant flex flex-col mt-20 p-4 relative z-10">
                        <Link href="/adboutiquevillas/accommodations#accommodations-offer" className={`font-cormorant italic text-4xl mb-8 transition-all duration-300 hover:scale-105 ${pathname.startsWith('/adboutiquevillas/accommodations') ? 'text-[#a36e3a]' : 'text-gray-500'}`} style={{ fontWeight: '300', letterSpacing: '1px' }}>
                            Accommodations
                        </Link>
                        <Link href="/adboutiquevillas/services" className={`font-cormorant italic text-4xl mb-8 transition-all duration-300 hover:scale-105 ${pathname.startsWith('/adboutiquevillas/services') ? 'text-[#a36e3a]' : 'text-gray-500'}`} style={{ fontWeight: '300', letterSpacing: '1px' }}>
                            Services
                        </Link>
                        <Link href="/adboutiquevillas/blog" className={`font-cormorant italic text-4xl mb-8 transition-all duration-300 hover:scale-105 ${pathname.startsWith('/adboutiquevillas/blog') ? 'text-[#a36e3a]' : 'text-gray-500'}`} style={{ fontWeight: '300', letterSpacing: '1px' }}>
                            Blog
                        </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}