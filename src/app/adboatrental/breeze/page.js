import Header from "../../Header";
import Footer from "../../Footer";
import MovingCarouselBoats from "../../components/MovingCarouselBoats"
import BoatBox from "../../components/BoatBox"
import SideBarBoats from "@/app/components/sideBarBoats"
import OfferProductBoats from "@/app/components/OfferProductBoats"

const carouselImagesBreeze = [
    {
        id: 1,
        image: "/boats/breeze-rand.webp",
        title: "Breeze Exterior",
    },
    {
        id: 2,
        image: "/boats/breeze-rand.webp",
        title: "Breeze Interior",
    },
]

export default function BoatBreeze() {
    const breezeGradient = "linear-gradient(45deg, #c9a754 0%, #b8a060 15%, #A8BCC7 40%, #b5c8d4 65%, #d4e0e8 85%, #f0f5f8 100%)"

    return (
        <div className="flex flex-col items-center justify-center">
            <Header />
            <SideBarBoats />
            <BoatBox
                videoId="rBdUv_jFhsg"
                videoThumbnail="/boats/breeze-rand.webp"
                carouselImages={carouselImagesBreeze}
                title="Breeze"
                description="Experience ultimate freedom aboard the Breeze. This elegant vessel combines comfort with performance, perfect for exploring the stunning Canary Islands coastline. <br /> <br /> Equipped with modern navigation systems, comfortable seating areas, and all safety equipment. Ideal for day trips, sunset cruises, or island hopping adventures."
                gradientStyle={breezeGradient}
            />
            <MovingCarouselBoats/>
            <OfferProductBoats/>
            <Footer />
        </div>
    )
}
