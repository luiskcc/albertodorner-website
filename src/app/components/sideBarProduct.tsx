"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function SideBarProduct() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()
    
    return (
        <>
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-10 left-5 z-50 cursor-pointer hover:scale-110 transition-all duration-300"
                style={{
                    display: isOpen ? 'none' : 'block'
                }}
            >
                <Image src="/icons/menu-icon.svg" alt="menu" width={35} height={35} />
            </button>
            
            {isOpen && (
                <div className="fixed top-20 left-0 w-1/4 h-auto bg-[#e0d6cb] z-30">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer hover:scale-110 transition-all duration-300 size-6 absolute text-[#a36e3a] top-15 right-4 bg-white p-1 rounded-full" onClick={() => setIsOpen(!isOpen)}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <div className="font-cormorant flex flex-col mt-20 ml-10">
                        <Link href="/adboutiquevillas/accommodations" className={`font-cormorant text-3xl mb-4 ${pathname.startsWith('/adboutiquevillas/accommodations') ? 'text-[#a36e3a]' : 'text-white'}`}>
                            Accommodations
                        </Link>
                        <Link href="/adboutiquevillas/blog" className={`font-arnoPro text-3xl mb-4 ${pathname.startsWith('/adboutiquevillas/learn') ? 'text-[#a36e3a]' : 'text-white'}`}>
                            Blog
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
}