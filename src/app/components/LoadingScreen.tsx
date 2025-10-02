"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2000) // 2 seconds loading time

        return () => clearTimeout(timer)
    }, [])

    if (!isLoading) return null

    return (
        <div
            className={`fixed inset-0 z-[100] bg-white flex items-center justify-center transition-opacity duration-1000 ${
                isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
        >
            <div className="flex flex-col items-center justify-center">
                <Image
                    src="/Isotipo-marron.svg"
                    alt="Loading"
                    width={300}
                    height={300}
                    className="animate-pulse"
                />
            </div>
        </div>
    )
}
