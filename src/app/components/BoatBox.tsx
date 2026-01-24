"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";

interface BoatBoxProps {
    videoId?: string;
    videoThumbnail?: string;
    carouselImages?: { id: number; image: string; title: string }[];
    title?: string;
    description?: string;
    gradientStyle?: string;
}

const defaultImages = [
    {
        id: 1,
        image: "/boats/breeze-rand.webp",
        title: "Boat",
    },
    {
        id: 2,
        image: "/boats/breeze-rand.webp",
        title: "Boat",
    },
]

export default function BoatBox({
    videoId,
    videoThumbnail = "/boats/breeze-rand.webp",
    carouselImages = defaultImages,
    title = "Breeze",
    description = "Experience the freedom of the open sea with our premium boat rental. Perfect for day trips, fishing adventures, or simply enjoying the beautiful coastline. <br /> <br /> Equipped with all modern amenities and safety features, this vessel offers comfort and reliability for your maritime adventure.",
    gradientStyle = "linear-gradient(135deg, #A8BBC7 0%, #c5d4de 50%, #e8eff3 100%)",
}: BoatBoxProps) {
    const [isCarouselHovered, setIsCarouselHovered] = useState(false);
    const [isCarouselModalOpen, setIsCarouselModalOpen] = useState(false);
    const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);
    const [isLeftImageHovered, setIsLeftImageHovered] = useState(false);
    return (
        <>
            {/* Boat Box */}
            <div className="flex flex-col p-10 ml-36">
                <div className="flex flex-row justify-center items-end mt-20">
                    <div
                        className="relative overflow-hidden"
                        style={{ width: '500px', height: '500px' }}
                        onMouseEnter={() => setIsLeftImageHovered(true)}
                        onMouseLeave={() => setIsLeftImageHovered(false)}
                    >
                        {isLeftImageHovered && videoId ? (
                            <iframe
                                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1`}
                                title="Boat Video Preview"
                                className="absolute inset-0 w-full h-full object-cover"
                                allow="autoplay; encrypted-media"
                                style={{ border: 'none', pointerEvents: 'none' }}
                            />
                        ) : (
                            <Image src={videoThumbnail} alt="boat" width={500} height={500} className="object-cover w-full h-full"/>
                        )}
                    </div>

                    {/* Carousel section with hover */}
                    <div
                        className="cursor-pointer relative"
                        style={{ width: '400px', height: '500px' }}
                        onMouseEnter={() => setIsCarouselHovered(true)}
                        onMouseLeave={() => setIsCarouselHovered(false)}
                        onClick={() => setIsCarouselModalOpen(true)}
                    >
                        <Swiper
                            modules={[Autoplay, Pagination, Navigation]}
                            direction="vertical"
                            spaceBetween={0}
                            slidesPerView={1}
                            autoplay={isCarouselHovered ? { delay: 2500, disableOnInteraction: false } : false}
                            speed={2000}
                            loop={true}
                            className="w-full h-full"
                            onSlideChange={(swiper) => setCurrentCarouselIndex(swiper.realIndex)}
                        >
                            {carouselImages.map((image) => (
                                <SwiperSlide key={image.id}>
                                    <Image
                                        src={image.image}
                                        alt={image.title}
                                        width={400}
                                        height={500}
                                        className="object-cover w-full h-full"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Expand icon overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 pointer-events-none">
                            <div className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <svg className="w-8 h-8 text-[#A8BBC7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-center">
                    <div className="w-[500px] h-[500px] flex items-end justify-center relative pb-12" style={{ background: gradientStyle }}>
                        <h1 className="text-white italic text-8xl font-cormorant relative" style={{ fontWeight: '400', marginRight: '60px' }}>
                            {title}
                        </h1>
                    </div>

                    <div className="pl-20 pr-8 w-[400px] pt-20 overflow-visible">
                        <p className="text-gray-500 text-xl w-[500px] leading-relaxed font-cormorant" style={{ fontWeight: '400', letterSpacing: '0.5px' }} dangerouslySetInnerHTML={{ __html: description }}>
                        </p>
                    </div>
                </div>
            </div>

            {/* Carousel Modal */}
            {isCarouselModalOpen && (
                <div
                    className="fixed inset-0 bg-white bg-opacity-95 z-50 flex items-center justify-center p-4"
                    onClick={() => setIsCarouselModalOpen(false)}
                >
                    <div className="relative w-full max-w-5xl">
                        <button
                            onClick={() => setIsCarouselModalOpen(false)}
                            className="absolute -top-12 right-0 text-gray-600 text-4xl hover:text-gray-800 transition-colors z-10"
                            aria-label="Close modal"
                        >
                            ×
                        </button>
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={0}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            initialSlide={currentCarouselIndex}
                            className="w-full aspect-video"
                        >
                            {carouselImages.map((image) => (
                                <SwiperSlide key={image.id}>
                                    <div className="w-full h-full flex items-center justify-center">
                                        <Image
                                            src={image.image}
                                            alt={image.title}
                                            width={1200}
                                            height={800}
                                            className="object-contain max-h-[80vh]"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            )}
        </>
    )
}
