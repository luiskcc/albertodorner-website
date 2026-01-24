"use client"
import { useEffect } from "react";  // Only useEffect needed

export default function HeroBoatRental() {
    useEffect(() => {
        const checkMobile = () => {
            // Remove setIsMobile call - no state needed
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
            >
                <source
                    src="https://adboatrental.com/wp-content/uploads/2023/08/ADBOATS.mp4"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}
