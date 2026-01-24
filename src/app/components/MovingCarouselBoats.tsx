"use client"

export default function MovingCarouselBoats() {
  const amenities = ["GPS", "Bluetooth Speakers", "Cockpit Table", "LED Lightning", "Sun Deck", "Swimming Ladder"]

  return (
    <div className="w-full py-4 overflow-hidden">
      <div className="relative">
        <div className="flex animate-scroll-boats whitespace-nowrap">
          {/* First set of amenities */}
          {amenities.map((amenity, index) => (
            <div
              key={`first-${index}`}
              className="inline-flex items-center px-8 mx-4 text-3xl md:text-4xl lg:text-5xl font-cormorant text-[#A8BBC7] italic"
              style={{ letterSpacing: '-0.5px' }}
            >
              {amenity}
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {amenities.map((amenity, index) => (
            <div
              key={`second-${index}`}
              className="inline-flex items-center px-8 mx-4 text-3xl md:text-4xl lg:text-5xl font-cormorant text-[#A8BBC7] italic"
              style={{ letterSpacing: '-0.5px' }}
            >
              {amenity}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-boats {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-boats {
          animation: scroll-boats 20s linear infinite;
        }
      `}</style>
    </div>
  )
}
