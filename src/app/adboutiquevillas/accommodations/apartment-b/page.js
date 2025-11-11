import Header from "../../../Header";
import Footer from "../../../Footer";
import MovingCarousel from "../../../components/MovingCarousel"
import AccommodationsBox from "../../../components/accommodationsBox"
import SideBarProduct from "@/app/components/sideBarProduct"
import OfferProduct from "@/app/components/OfferProduct"

export default function AccommodationsApartmentB() {
    return (
        <div className="flex flex-col items-center justify-center">
            <Header />
            <SideBarProduct />
            <AccommodationsBox
                videoId="lpE8VMwSitQ"
                title="home B"
            />
            <MovingCarousel/>
            <OfferProduct/>
            <Footer />
        </div>
    )
}
