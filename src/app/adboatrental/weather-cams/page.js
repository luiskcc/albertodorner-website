"use client"
import Header from "../../Header";
import Footer from "../../Footer";
import SideBarBoats from "@/app/components/sideBarBoats";
import Script from "next/script";

export default function WeatherCams() {
    return (
        <div>
            <Header />
            <SideBarBoats />

            <div className="ml-[25%] pt-48 px-8 pb-16">
                {/* Cameras Section */}
                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="font-cormorant italic text-4xl text-[#A8BBC7] whitespace-nowrap" style={{ fontWeight: '300', letterSpacing: '1px' }}>
                            Cameras
                        </h2>
                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {/* Cam 1 - Marina Rubicón */}
                        <div className="relative aspect-video overflow-hidden rounded-lg shadow-md">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/NhF3kDRT3_g"
                                title="Marina Rubicón Cam 1"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className="absolute inset-0"
                            />
                        </div>

                        {/* Cam 2 */}
                        <div className="relative aspect-video overflow-hidden rounded-lg shadow-md">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/TcqXBYDv6T4"
                                title="Cam 2"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className="absolute inset-0"
                            />
                        </div>
                    </div>
                </div>

                {/* Weather Station Section - Full Width */}
                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="font-cormorant italic text-4xl text-[#A8BBC7] whitespace-nowrap" style={{ fontWeight: '300', letterSpacing: '1px' }}>
                            Weather Station
                        </h2>
                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>

                    <div className="rounded-lg overflow-hidden shadow-md" style={{ height: '600px' }}>
                        <iframe
                            src="https://mystation.weatherwizz.com/view.php?i=lt74u630l1a7f817p9q&u=2088&id=WdMYerWNgA"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            title="Weather Station"
                        />
                    </div>
                </div>

                {/* Wind & Tides Section */}
                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="font-cormorant italic text-4xl text-[#A8BBC7] whitespace-nowrap" style={{ fontWeight: '300', letterSpacing: '1px' }}>
                            Wind & Tides
                        </h2>
                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        {/* Windy Map */}
                        <div className="rounded-lg overflow-hidden shadow-md" style={{ height: '450px' }}>
                            <iframe
                                src="https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=default&metricWind=default&zoom=11&overlay=wind&product=ecmwf&level=surface&lat=28.248&lon=-16.855"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                title="Windy Map"
                            />
                        </div>

                        {/* Tides Widget */}
                        <div className="rounded-lg overflow-hidden shadow-md bg-white p-4" style={{ height: '450px' }}>
                            <div id="tidewidget__7593" style={{ width: 'auto' }}></div>
                            <Script
                                src="https://tides.today/en/%F0%9F%8C%8D/spain/canary-islands/lanzarote-arrecife/widget.js"
                                strategy="afterInteractive"
                                onLoad={() => {
                                    if (typeof window !== 'undefined' && window.createTideInstance) {
                                        window.createTideInstance('tidewidget__7593', {
                                            includeMap: false,
                                            includeWeather: false,
                                            includeTitle: false,
                                            includeStyles: true,
                                            numberDays: 2,
                                            weatherUnit: 'c'
                                        });
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}


