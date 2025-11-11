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
                    <div className="circle"></div>
                    <svg className="arr-2" viewBox="0 0 24 24">
                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                    <span className="text font-thin">Book Your Dream</span>
                    <svg className="arr-1" viewBox="0 0 24 24">
                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                </a>
            </div>
        </div>
    )
}