import Header from "../../Header";
import Footer from "../../Footer";
import SideBar from "@/app/components/sideBar";

export default function Services() {
    const services = [
        {
            category: "Tailored Services",
            items: [
                { name: "Concierge", description: "Personalized assistance for all your needs", image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80" },
                { name: "Massage", description: "Relaxing spa treatments at your villa", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80" },
                { name: "Yoga", description: "Private yoga sessions with certified instructors", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80" },
                { name: "Guide", description: "Local expert guides for your adventures", image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800&q=80" },
                { name: "Private Chef", description: "Gourmet dining experiences in your villa", image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80" },
                { name: "Extra Maid", description: "Additional housekeeping services", image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&q=80" }
            ]
        },
        {
            category: "Food & Drinks",
            items: [
                { name: "Fridge Stocking", description: "Pre-arrival grocery service", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80" },
                { name: "Fruit & Veggie Basket", description: "Fresh local produce delivered daily", image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=800&q=80" },
                { name: "Wine Cellar", description: "Curated selection of fine wines", image: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=800&q=80" },
                { name: "Coffee & Salt", description: "Premium coffee and gourmet seasonings", image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80" }
            ]
        },
        {
            category: "Spaces",
            items: [
                { name: "Bodega", description: "Wine cellar and storage area", image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&q=80" },
                { name: "Library & Toys", description: "Books, games, and entertainment", image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80" },
                { name: "Studio", description: "Creative workspace and activity room", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80" }
            ]
        }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <SideBar />

            {/* Hero Section */}
            <div className="relative w-full h-[50vh] mt-20">
                <img
                    src="/adboutiquevillas_1.png"
                    alt="Luxury Villa Services"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 flex items-center justify-center">
                    <h1 className="font-cormorant italic text-7xl text-white" style={{ fontWeight: '300', letterSpacing: '2px' }}>
                        Services
                    </h1>
                </div>
            </div>

            {/* Services Grid */}
            <div className="container mx-auto px-4 py-16">
                {services.map((section, idx) => (
                    <div key={idx} className="mb-16">
                        <h2 className="font-cormorant italic text-5xl text-[#a36e3a] mb-8" style={{ fontWeight: '300', letterSpacing: '1px' }}>
                            {section.category}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {section.items.map((service, serviceIdx) => (
                                <div
                                    key={serviceIdx}
                                    className="group relative overflow-hidden bg-white border-2 border-[#a36e3a] transition-all duration-300 hover:shadow-xl hover:scale-105"
                                >
                                    {/* Image Section */}
                                    <div className="relative h-48 w-full overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={service.name}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-6">
                                        <h3 className="font-cormorant text-2xl text-[#a36e3a] mb-3" style={{ fontWeight: '400', letterSpacing: '0.5px' }}>
                                            {service.name}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: '15px' }}>
                                            {service.description}
                                        </p>
                                    </div>

                                    {/* Decorative corner */}
                                    <div className="absolute top-0 right-0 w-12 h-12 bg-[#a36e3a] opacity-10 transform rotate-45 translate-x-6 -translate-y-6 transition-all duration-300 group-hover:scale-150"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
}
