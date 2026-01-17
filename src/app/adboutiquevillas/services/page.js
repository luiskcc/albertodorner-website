import Header from "../../Header";
import Footer from "../../Footer";
import SideBar from "@/app/components/sideBar";

export default function Services() {
    const serviceCategories = [
        {
            name: "Tailored\nservices",
            image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
        },
        {
            name: "Food &\nDrinks",
            image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=800&q=80",
        },
        {
            name: "Spaces",
            image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80",
        }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <SideBar />

            {/* Services Cards */}
            <div className="flex flex-col items-center gap-3 py-8 mt-20 ml-[25%]">
                {serviceCategories.map((category, idx) => (
                    <div
                        key={idx}
                        className="relative w-[350px] h-[180px] overflow-hidden cursor-pointer group"
                    >
                        {/* Background Image */}
                        <img
                            src={category.image}
                            alt={category.name}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />

                        {/* Diagonal Teal Overlay - using clip-path for precise triangle */}
                        <div
                            className="absolute inset-0 bg-[#6a9e9e]"
                            style={{
                                clipPath: 'polygon(0 0, 100% 0, 0 100%)',
                            }}
                        />

                        {/* Gold accent line at diagonal */}
                        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                            <line
                                x1="100%"
                                y1="0"
                                x2="0"
                                y2="100%"
                                stroke="#a36e3a"
                                strokeWidth="3"
                            />
                        </svg>

                        {/* Text - positioned in center-left of the teal triangle */}
                        <div className="absolute top-1/2 left-[20%] -translate-y-1/2">
                            <h2
                                className="font-cormorant italic text-2xl text-white whitespace-pre-line text-center"
                                style={{ fontWeight: '300', letterSpacing: '1px', lineHeight: '1.2' }}
                            >
                                {category.name}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
}
