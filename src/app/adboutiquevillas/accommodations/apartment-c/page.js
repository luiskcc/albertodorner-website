import Header from "../../../Header";
import Footer from "../../../Footer";
import MovingCarousel from "../../../components/MovingCarousel"
import AccommodationsBox from "../../../components/accommodationsBox"
import SideBarProduct from "@/app/components/sideBarProduct"
import OfferProduct from "@/app/components/OfferProduct"

export default function AccommodationsApartmentC() {
    return (
        <div className="flex flex-col items-center justify-center">
            <Header />
            <SideBarProduct />
            <AccommodationsBox
                videoId="amFUPT2tZ5I"
                title="home C"
            />
            <MovingCarousel/>
            <OfferProduct/>
            <Footer />
        </div>
    )
}
