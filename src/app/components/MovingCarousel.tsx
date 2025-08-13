"use client"

export default function MovingCarousel() {
  const amenities = ["Wifi", "Kitchen", "Private Terrace", "Swimming Pool", "Parking"]

  return (
    <div className="w-full py-4 overflow-hidden">
      <div className="relative">
        <div className="flex animate-scroll whitespace-nowrap">
          {/* First set of amenities */}
          {amenities.map((amenity, index) => (
            <div
              key={`first-${index}`}
              className="inline-flex items-center px-8 mx-4 text-2xl md:text-3xl lg:text-4xl font-serif text-[#a36e3a] italic"
            >
              {amenity}
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {amenities.map((amenity, index) => (
            <div
              key={`second-${index}`}
              className="inline-flex items-center px-8 mx-4 text-2xl md:text-3xl lg:text-4xl font-serif text-[#a36e3a] italic"
            >
              {amenity}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  )
}