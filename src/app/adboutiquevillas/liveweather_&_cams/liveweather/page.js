import Header from "../../../Header";
import Footer from "../../../Footer";

export default function LiveWeather() {
    return (
        <div>
            <Header />
            <h1 className="text-4xl md:text-5xl font-cormorant italic text-[#a36e3a] text-center py-20" style={{ fontWeight: '300' }}>Live Weather</h1>
            <Footer />
        </div>
    )
}