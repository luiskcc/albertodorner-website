"use client";
import Image from "next/image";

export default function HomeSelection() {
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-12 gap-8">
                {/* Large pool image */}
                <div className="col-span-12 md:col-span-7 relative">
                    <Image 
                        src="/adboutiquevillas_1.png"
                        alt="Luxury pool view" 
                        width={800}
                        height={600}
                        className="w-full h-[600px] object-cover rounded-lg"
                    />
                </div>

                {/* Right column with bedroom and text */}
                <div className="col-span-12 md:col-span-5 space-y-6">
                    {/* Bedroom image */}
                    <div className="relative h-[300px]">
                        <Image 
                            src="/adboutiquevillas_2.png"
                            alt="Luxury bedroom" 
                            width={500}
                            height={300}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>

                    {/* Text content */}
                    <div className="space-y-6">
                        <h2 className="font-serif text-5xl text-[#967259] italic">
                            home A
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Impressive, unobstructed views: the massive volcano Teide and the coast and ocean all the way to the end of the island. It is our most sought-after villa-apartment with its well-designed timeless interior and a minimalistic exterior, including a lava garden, large breakfast terrace, dining area with outdoor kitchen under an architectural pergola and private plunge pool with gorgeous views.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}