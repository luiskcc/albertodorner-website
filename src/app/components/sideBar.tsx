"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function SideBar() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()
    
    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-10 left-10 z-50 cursor-pointer hover:scale-110 transition-all duration-300"
                style={{
                    display: isOpen ? 'none' : 'block'
                }}
            >
                <Image src="/icons/menu-icon.svg" alt="menu" width={35} height={35} />
            </button>
            
            {isOpen && (
                <div className="fixed top-20 left-0 h-screen w-1/4 bg-white pl-10 z-30" style={{ opacity: '0.95' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer hover:scale-110 transition-all duration-300 size-6 absolute text-[#a36e3a] top-15 right-4 bg-white p-1 rounded-full p-1 rounded-full" onClick={() => setIsOpen(!isOpen)}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <div className="font-cormorant flex flex-col mt-20 p-4 relative z-10">
                        <Link href="/adboutiquevillas/accommodations" className={`font-cormorant italic text-4xl mb-8 transition-all duration-300 hover:scale-105 ${pathname.startsWith('/adboutiquevillas/accommodations') ? 'text-[#a36e3a]' : 'text-gray-800'}`} style={{ fontWeight: '300', letterSpacing: '1px' }}>
                            Accommodations
                        </Link>
                        <Link href="/adboutiquevillas/services" className={`font-cormorant italic text-4xl mb-8 transition-all duration-300 hover:scale-105 ${pathname.startsWith('/adboutiquevillas/services') ? 'text-[#a36e3a]' : 'text-gray-800'}`} style={{ fontWeight: '300', letterSpacing: '1px' }}>
                            Services
                        </Link>
                        <Link href="/adboutiquevillas/blog" className={`font-cormorant italic text-4xl mb-8 transition-all duration-300 hover:scale-105 ${pathname.startsWith('/adboutiquevillas/blog') ? 'text-[#a36e3a]' : 'text-gray-800'}`} style={{ fontWeight: '300', letterSpacing: '1px' }}>
                            Blog
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
}