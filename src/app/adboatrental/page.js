import Header from "../Header";
import Footer from "../Footer";
import HeroBoatRental from "./HeroBoatRental";
import SideBarBoats from "../components/sideBarBoats";
import BoatsOffer from "../components/boatsOffer";

export default function Adboatrental() {
    return (
        <div>
            <Header />
            <SideBarBoats />
            <HeroBoatRental />
            <BoatsOffer id="boats-offer" /> 
            <Footer />
        </div>
    )
}