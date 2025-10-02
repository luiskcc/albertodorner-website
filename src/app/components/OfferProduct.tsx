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
                <a href="/booknow" className="relative w-[130px] h-[130px] block group cursor-pointer transition-all duration-300 hover:scale-105">
                    {/* Main brown shape */}
                    <div className="absolute inset-0 bg-[#a36e3a] rounded-tl-[20px] rounded-tr-[60px] rounded-br-[20px] rounded-bl-[20px] border-2 border-[#a36e3a] flex flex-col justify-center px-4 py-3 z-10 transition-all duration-300 group-hover:bg-[#8d5d33] group-hover:shadow-[4px_4px_0px_0px_rgba(163,110,58,0.3)]">
                        <span className="text-white italic font-bold text-lg font-serif">Book</span>
                        <span className="text-white italic text-sm font-serif leading-tight mt-1">
                        and enjoy<br />your<br />dream
                        </span>
                    </div>
                    {/* White background with border - shadow layer */}
                    <div className="absolute top-1 left-1 inset-0 border-2 border-[#a36e3a] rounded-[16px] bg-white z-0 transition-all duration-300"></div>
                </a>
            </div>
        </div>
    )
}