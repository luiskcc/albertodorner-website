"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSidebar } from '../context/SidebarContext'

export default function SideBarProduct() {
    const { isOpen, toggleSidebar } = useSidebar()
    const pathname = usePathname()

    return (
        <>
            {isOpen && (
                <div className="fixed top-20 left-0 w-1/4 h-auto bg-[#a36e3a]/80 pl-10 z-30">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer hover:scale-110 transition-all duration-300 size-6 absolute text-white top-15 right-4 bg-white/20 p-1 rounded-full z-10" onClick={toggleSidebar}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <div className="font-cormorant flex flex-col mt-20 p-4 relative z-10">
                        <Link href="/adboutiquevillas/accommodations" className={`font-cormorant italic text-4xl mb-8 transition-all duration-300 hover:scale-105 ${pathname.startsWith('/adboutiquevillas/accommodations') ? 'text-white' : 'text-white/70'}`} style={{ fontWeight: '300', letterSpacing: '1px' }}>
                            Accommodations
                        </Link>
                        <Link href="/adboutiquevillas/services" className={`font-cormorant italic text-4xl mb-8 transition-all duration-300 hover:scale-105 ${pathname.startsWith('/adboutiquevillas/services') ? 'text-white' : 'text-white/70'}`} style={{ fontWeight: '300', letterSpacing: '1px' }}>
                            Services
                        </Link>
                        <Link href="/adboutiquevillas/blog" className={`font-cormorant italic text-4xl mb-8 transition-all duration-300 hover:scale-105 ${pathname.startsWith('/adboutiquevillas/blog') ? 'text-white' : 'text-white/70'}`} style={{ fontWeight: '300', letterSpacing: '1px' }}>
                            Blog
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
}