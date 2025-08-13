import Header from "../../../Header";
import Footer from "../../../Footer";
import Image from "next/image";
import MovingCarousel from "../../../components/MovingCarousel"
import AccommodationsBox from "../../../components/accommodationsBox"
import SideBarProduct from "@/app/components/sideBarProduct"
import OfferProduct from "@/app/components/OfferProduct"

export default function AccommodationsApartmentA() {
    return (
        <div className="flex flex-col items-center justify-center">
            <Header />
            <SideBarProduct />
            <AccommodationsBox />
            <MovingCarousel/>
            <OfferProduct/>
            <Footer />
        </div>
    )
}