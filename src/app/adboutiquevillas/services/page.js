import Header from "../../Header";
import Footer from "../../Footer";
import SideBar from "@/app/components/sideBar";
import Image from "next/image";

export default function Services() {
    const serviceCategories = [
        {
            name: "Tailored\nservices",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
        },
        {
            name: "Food &\nDrinks",
            image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
        },
        {
            name: "Spaces",
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
        }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <SideBar />

            {/* Services Cards */}
            <div className="flex flex-col items-center gap-3 py-8 mt-50">
                {serviceCategories.map((category, idx) => (
                    <div
                        key={idx}
                        className="relative w-[300px] h-[320px] overflow-hidden cursor-pointer group"
                    >
                        {/* Background Image */}
                        <Image
                            src={category.image}
                            alt={category.name}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />

                        {/* Diagonal Gradient Overlay - bottom-left */}
                        <div
                            className="absolute inset-0"
                            style={{
                                background: 'linear-gradient(30deg, #9b7145 0%, #8ee3ec 50%, #e0d6cb 100%)',
                                clipPath: 'polygon(0 0, 0 100%, 100% 100%)',
                            }}
                        />

                        {/* Gold accent line at diagonal */}
                        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                            <line
                                x1="0"
                                y1="100%"
                                x2="100%"
                                y2="0"
                            />
                        </svg>

                        {/* Text - positioned in center-left of the gradient triangle */}
                        <div className="absolute top-3/4 left-[5%] -translate-y-1/2">
                            <h2
                                className="font-cormorant italic text-4xl text-white font-bold whitespace-pre-line text-center"
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
