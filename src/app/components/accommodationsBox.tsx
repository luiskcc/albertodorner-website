"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const accommodationsImages = [
    {
        id: 1,
        image: "/DCC_6248.jpg",
        title: "Accommodations",
    },
    {
        id: 2,
        image: "/adboutiquevillas_1.png",
        title: "Accommodations",
    },
    {
        id: 3,
        image: "/DCC_6248.jpg",
        title: "Accommodations",
    },
]

export default function AccommodationsBox() {
    return (
        <div className="flex flex-col p-10">
            <div className="flex flex-row justify-center items-end mt-20">
                <Image src="/DJI_0285_1-1.jpg" alt="bedroom" width={500} height={500}/>
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    direction="vertical"
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    speed={2000}
                    loop={true}
                    className="w-[400px] h-[400px]"
                >
                    {accommodationsImages.map((image) => (
                        <SwiperSlide key={image.id}>
                            <Image 
                                src={image.image} 
                                alt={image.title} 
                                width={400} 
                                height={400}
                                className="object-cover w-full h-full"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="flex flex-row justify-center">
                <div className="bg-[linear-gradient(135deg,_#9b7145_0%,_#8ee3ec_50%,_#e0d6cb_100%)] w-[500px] h-[500px] flex items-center justify-center">
                    <h1 className="text-white italic text-8xl font-bold relative top-50 right-20">home A</h1>
                </div>
                    
                <div className="pl-10 w-[400px] pt-20 overflow-visible">
                    <p className="text-gray-500 text-2xl w-[500px]">
                        Impressive, unobstructed views: the massive volcano Teide and the coast and ocean all the way to the end of the island. <br /> <br /> It is our most sought-after villa-apartment with its well-designed timeless interior and a minimalistic exterior, including a lava garden, large breakfast terrace, dining area with outdoor kitchen under an architectural pergola and private plunge pool with gorgeous views.
                    </p>
                </div>
            </div>
        </div>
    )
}