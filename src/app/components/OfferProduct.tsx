import Image from "next/image";

export default function OfferProduct() {
    return (
        <div>
            <div className="flex flex-row gap-10 py-20">
                <div className="flex flex-col align-center justify-center gap-10">
                    <div className="inline-flex items-center rounded-full relative">
                        <Image src="/person-icon.svg" alt="rooms icon" width={24} height={24} className="mr-2" />
                        <span className="text-[#a36e3a] text-2xl font-serif">4 guests</span>
                    </div>
                    <div className="inline-flex items-center rounded-full relative">
                        <Image src="/habitaciones.svg" alt="rooms icon" width={24} height={24} className="mr-2" />
                        <span className="text-[#a36e3a] text-2xl font-serif">2 bedrooms</span>
                    </div>
                    <div className="inline-flex items-center rounded-full relative">
                        <Image src="/bathroom.svg" alt="rooms icon" width={24} height={24} className="mr-2" />
                        <span className="text-[#a36e3a] text-2xl font-serif">2 bathrooms</span>
                    </div>
                </div>
                <div className="relative w-[260px] h-[260px]">
                    {/* Main brown shape */}
                    <div className="absolute inset-0 bg-[#a36e3a] rounded-tl-[40px] rounded-tr-[120px] rounded-br-[40px] rounded-bl-[40px] border border-[#a36e3a] flex flex-col justify-center px-8 py-6 z-10">
                        <span className="text-white italic font-bold text-2xl font-serif">Book</span>
                        <span className="text-white italic text-2xl font-serif leading-tight mt-2">
                        and enjoy<br />your<br />dream
                        </span>
                    </div>
                    {/* White background with border and angled highlight */}
                    <div className="absolute inset-0 border border-[#a36e3a] rounded-[32px] bg-white z-0"></div>
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-white opacity-40 rounded-tr-[32px] rounded-br-[32px] -z-10" style={{clipPath: "polygon(100% 0, 0 100%, 100% 100%)"}}></div>
                </div>
            </div>        
        </div>
    )
}