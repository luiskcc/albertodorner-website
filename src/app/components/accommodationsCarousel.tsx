"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const accommodationsImages = [
    {   
        id: 1,
        image: "/accommodations-1.png",
        title: "Accommodations",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        style: "bg-[linear-gradient(135deg,_#6e6b4e_0%,_#9b7145_60%,_#d2b48c_100%)]"
    },
    {
        id: 2,
        image: "/charco-laja.jpg",
        title: "Accommodations",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        style: "bg-[linear-gradient(135deg,_#29506b_0%,_#e0d6cb_100%)]"
    },
]

export default function AccommodationsCarousel  () {
    return (
        <div>
            <div className="container mt-50">
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={0}
                        slidesPerView={1}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        speed={2000}
                        className="w-400"
                    >
                        {accommodationsImages.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="flex flex-row gap-4">
                                    <Image src={item.image} alt={item.title} width={900} height={500} className="w-1/2" />
                                    <div className={`w-1/3 px-4 text-start text-white top-0 ${item.style} flex flex-col justify-center`}>
                                        <p className="text-xl font-bold text-gray-200">{item.title}</p>
                                        <p className="text-xl font-bold text-gray-200">{item.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
            <div className="flex justify-center pr-40 mb-40">
                <a href="#accommodations-offer" className="hover:scale-110 transition-all duration-300">
                    <Image src="/arrow-scroll.svg" alt="arrow-down" width={100} height={100} />
                </a>
            </div>
            </div>
        </div>
    )
}