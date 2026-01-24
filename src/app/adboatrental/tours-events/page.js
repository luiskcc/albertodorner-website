import Header from "../../Header";
import Footer from "../../Footer";
import SideBarBoats from "@/app/components/sideBarBoats";
import Image from "next/image";
import Link from "next/link";

const tours = [
    {
        id: 1,
        name: "Coastline Tour",
        image: "/boats/breeze-rand.webp",
        href: "/adboatrental/tours-events/coastline-tour"
    },
    {
        id: 2,
        name: "Sunset Dinner",
        image: "/boats/play_24.jpg",
        href: "/adboatrental/tours-events/sunset-dinner"
    },
    {
        id: 3,
        name: "Luxury Boat Trip",
        image: "/boats/saxdor.webp",
        href: "/adboatrental/tours-events/luxury-boat-trip"
    },
];

const events = [
    {
        id: 1,
        name: "Celebrations",
        image: "/boats/mana-rand.webp",
        href: "/adboatrental/tours-events/celebrations"
    },
    {
        id: 2,
        name: "Weddings",
        image: "/boats/compass-160e.jpg",
        href: "/adboatrental/tours-events/weddings"
    },
    {
        id: 3,
        name: "Sea & Sub Activities",
        image: "/boats/silver-555.png",
        href: "/adboatrental/tours-events/sea-sub-activities"
    },
];

export default function ToursEvents() {
    return (
        <div>
            <Header />
            <SideBarBoats />

            <div className="ml-[25%] pt-48 px-8 pb-16">
                {/* Tours Section */}
                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="font-cormorant italic text-4xl text-[#A8BBC7] whitespace-nowrap" style={{ fontWeight: '300', letterSpacing: '1px' }}>
                            Tours
                        </h2>
                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        {tours.map((tour) => (
                            <Link
                                key={tour.id}
                                href={tour.href}
                                className="relative aspect-[4/3] overflow-hidden group cursor-pointer"
                            >
                                <Image
                                    src={tour.image}
                                    alt={tour.name}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    className="transition-transform duration-300 group-hover:scale-105"
                                />
                                {/* Tour Name Button */}
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                                    <div className="bg-white/90 px-6 py-2 rounded-full shadow-lg transition-all duration-300 group-hover:scale-110">
                                        <span className="font-cormorant text-sm text-[#5a7a8a] tracking-wider whitespace-nowrap" style={{ fontWeight: '400' }}>
                                            {tour.name}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Events Section */}
                <div>
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="font-cormorant italic text-4xl text-[#A8BBC7] whitespace-nowrap" style={{ fontWeight: '300', letterSpacing: '1px' }}>
                            Events
                        </h2>
                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        {events.map((event) => (
                            <Link
                                key={event.id}
                                href={event.href}
                                className="relative aspect-[4/3] overflow-hidden group cursor-pointer"
                            >
                                <Image
                                    src={event.image}
                                    alt={event.name}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    className="transition-transform duration-300 group-hover:scale-105"
                                />
                                {/* Event Name Button */}
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                                    <div className="bg-white/90 px-6 py-2 rounded-full shadow-lg transition-all duration-300 group-hover:scale-110">
                                        <span className="font-cormorant text-sm text-[#5a7a8a] tracking-wider whitespace-nowrap" style={{ fontWeight: '400' }}>
                                            {event.name}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
