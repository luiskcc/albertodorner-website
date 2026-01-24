import Image from "next/image";

export default function OfferProduct() {
    return (
        <div>
            <div className="flex flex-row gap-10 py-20 items-center">
                <div className="flex flex-col align-center justify-center gap-6">
                    <div className="inline-flex items-center rounded-full relative bg-white border-2 border-[#a36e3a] px-6 py-3 shadow-md">
                        <Image src="/person-icon.svg" alt="rooms icon" width={24} height={24} className="mr-3" />
                        <span className="text-[#a36e3a] text-xl font-serif">4 guests</span>
                    </div>
                    <div className="inline-flex items-center rounded-full relative bg-white border-2 border-[#a36e3a] px-6 py-3 shadow-md">
                        <Image src="/habitaciones.svg" alt="rooms icon" width={24} height={24} className="mr-3" />
                        <span className="text-[#a36e3a] text-xl font-serif">2 bedrooms</span>
                    </div>
                    <div className="inline-flex items-center rounded-full relative bg-white border-2 border-[#a36e3a] px-6 py-3 shadow-md">
                        <Image src="/bathroom.svg" alt="rooms icon" width={24} height={24} className="mr-3" />
                        <span className="text-[#a36e3a] text-xl font-serif">2 bathrooms</span>
                    </div>
                </div>
                {/* Book Card */}
                <div className="relative overflow-hidden flex items-center justify-center" style={{ width: '220px', height: '220px', backgroundColor: '#a36e3a' }}>
                    {/* Watermark background */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            backgroundImage: "url('/gray-logo-ad.svg')",
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: '70%',
                            backgroundSize: '300%',
                            opacity: 0.4
                        }}
                    />
                    <a href="/booknow" className="relative z-10 bg-white/90 text-[#a36e3a] px-10 py-3 rounded-full font-cormorant text-xl italic hover:bg-white transition-colors" style={{ fontWeight: '400' }}>
                        Book
                    </a>
                </div>
            </div>
        </div>
    )
}