import Header from "../../Header";
import Footer from "../../Footer";
import Hero from "../../Hero";
import SideBar from "@/app/components/sideBar";
import AccommodationsOffer from "@/app/components/accommodationsOffer";
import AccommodationsCarousel from "@/app/components/accommodationsCarousel";

export default function Accommodations() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <Header />
            <Hero />
            <SideBar />
            <AccommodationsCarousel />
            <AccommodationsOffer id="accommodations-offer" />
            <Footer />
        </div>
    );
}