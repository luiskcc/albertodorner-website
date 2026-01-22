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
                <a href="/booknow" className="animated-book-button">
                    <span className="button-bg">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </span>
                    <span className="button-text">Book Your Dream</span>
                    <span className="button-spacer">Book Your Dream</span>
                </a>
            </div>
        </div>
    )
}