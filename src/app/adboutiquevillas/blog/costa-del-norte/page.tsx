"use client"
import Image from "next/image";
import Link from "next/link";
import Header from "../../../Header";
import Footer from "../../../Footer";
import SideBarProduct from "@/app/components/sideBarProduct";

export default function BlogArticle() {
    return (
        <div className="min-h-screen">
            <Header />
            <SideBarProduct />

            {/* Hero Image */}
            <div className="relative w-full h-[70vh] mt-20">
                <Image
                    src="/accommodations-1.png"
                    alt="La Costa del Norte"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            {/* Article Content */}
            <article className="max-w-4xl mx-auto px-4 py-12">
                {/* Breadcrumb */}
                <nav className="text-sm text-gray-500 mb-6">
                    <Link href="/adboutiquevillas/blog" className="hover:text-[#a36e3a]">Blog</Link>
                    <span className="mx-2">/</span>
                    <span className="text-gray-800">La Costa del Norte</span>
                </nav>

                {/* Title */}
                <h1 className="font-cormorant italic text-5xl md:text-6xl text-gray-900 mb-4">
                    La Costa del Norte
                </h1>

                {/* Meta Info */}
                <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-[#a36e3a] flex items-center justify-center text-white font-bold">
                            AD
                        </div>
                        <div>
                            <p className="font-semibold text-gray-900">Alberto Dorner</p>
                            <p className="text-sm text-gray-500">Travel Writer</p>
                        </div>
                    </div>
                    <div className="text-sm text-gray-500">
                        <p>Published: August 12, 2025</p>
                        <p>5 min read</p>
                    </div>
                </div>

                {/* Share Buttons */}
                <div className="flex items-center gap-4 mb-8">
                    <span className="text-sm font-semibold text-gray-700">Share:</span>
                    <button className="w-10 h-10 rounded-full bg-[#1877f2] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-[#1da1f2] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-[#0077b5] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-300 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                    </button>
                </div>

                {/* Article Body */}
                <div className="prose prose-lg max-w-none">
                    <p className="text-xl text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                        Discover the hidden gems of Tenerife&apos;s northern coast, where dramatic cliffs meet the Atlantic Ocean. This pristine stretch of coastline offers a completely different experience from the tourist-heavy south.
                    </p>

                    <h2 className="font-cormorant italic text-3xl text-gray-900 mt-12 mb-4">
                        The Rugged Beauty of the North
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                        The northern coast of Tenerife presents a stark contrast to the sunny, sandy beaches of the south. Here, volcanic black sand beaches, lush green valleys, and towering cliffs create a landscape that feels untouched by time. The cooler climate nurtures verdant vegetation, making this region particularly appealing to nature lovers and hikers.
                    </p>

                    {/* Content Image */}
                    <div className="my-8">
                        <Image
                            src="/Apartment_G_terrace_02.jpg"
                            alt="Northern Coast View"
                            width={800}
                            height={500}
                            className="w-full h-auto"
                        />
                        <p className="text-sm text-gray-500 italic mt-2">The dramatic coastline of Tenerife&apos;s north</p>
                    </div>

                    <h2 className="font-cormorant italic text-3xl text-gray-900 mt-12 mb-4">
                        Must-Visit Destinations
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-4" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                        Several charming towns dot the northern coastline, each with its own unique character:
                    </p>

                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                        <li><strong>Puerto de la Cruz</strong> - The cultural heart of the north with botanical gardens and historic architecture</li>
                        <li><strong>Garachico</strong> - A picturesque coastal town with natural rock pools formed by volcanic lava</li>
                        <li><strong>Los Silos</strong> - A peaceful village perfect for those seeking authentic Canarian life</li>
                        <li><strong>Buenavista del Norte</strong> - Gateway to the Teno Rural Park with spectacular hiking trails</li>
                    </ul>

                    <div className="my-8">
                        <Image
                            src="/charco-laja.jpg"
                            alt="Natural Pools"
                            width={800}
                            height={500}
                            className="w-full h-auto"
                        />
                        <p className="text-sm text-gray-500 italic mt-2">Natural volcanic rock pools in Garachico</p>
                    </div>

                    <h2 className="font-cormorant italic text-3xl text-gray-900 mt-12 mb-4">
                        Local Gastronomy
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                        The north is renowned for its traditional Canarian cuisine. Fresh fish, locally grown vegetables, and the famous &quot;papas arrugadas&quot; with mojo sauce are staples here. Don&apos;t miss trying the local wines from the Orotava Valley, which benefit from the volcanic soil and unique microclimate.
                    </p>

                    <blockquote className="border-l-4 border-[#a36e3a] pl-6 my-8 italic text-xl text-gray-700">
                        &ldquo;The northern coast of Tenerife is where you will find the soul of the island - authentic, beautiful, and unhurried.&rdquo;
                    </blockquote>

                    <h2 className="font-cormorant italic text-3xl text-gray-900 mt-12 mb-4">
                        Planning Your Visit
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                        The best time to explore the northern coast is during spring and early summer when the weather is mild and the landscape is at its greenest. Rent a car to fully explore the winding coastal roads and hidden viewpoints. Allow at least 2-3 days to truly appreciate this regions beauty and charm.
                    </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-gray-200">
                    <span className="text-sm font-semibold text-gray-700 mr-2">Tags:</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-[#a36e3a] hover:text-white transition-colors cursor-pointer">Travel</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-[#a36e3a] hover:text-white transition-colors cursor-pointer">Tenerife</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-[#a36e3a] hover:text-white transition-colors cursor-pointer">Coast</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-[#a36e3a] hover:text-white transition-colors cursor-pointer">Nature</span>
                </div>

                {/* Author Bio */}
                <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                    <div className="flex items-start gap-4">
                        <div className="w-20 h-20 rounded-full bg-[#a36e3a] flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                            AD
                        </div>
                        <div>
                            <h3 className="font-cormorant text-2xl font-bold text-gray-900 mb-2">About Alberto Dorner</h3>
                            <p className="text-gray-700 mb-4" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                                    Alberto is a travel writer and photographer specializing in the Canary Islands. With over 15 years of experience exploring Tenerife, he shares insider tips and hidden gems with travelers seeking authentic experiences.
                            </p>
                            <Link href="/adboutiquevillas/blog" className="text-[#a36e3a] font-semibold hover:underline">
                                View all posts by Alberto →
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Related Posts */}
                <div className="mt-16">
                    <h3 className="font-cormorant text-4xl italic text-gray-900 mb-8">Related Articles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Link href="/adboutiquevillas/blog/teide-national-park" className="group">
                            <div className="relative overflow-hidden mb-4">
                                <Image
                                    src="/adboutiquevillas_3.png"
                                    alt="Teide National Park"
                                    width={400}
                                    height={250}
                                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <h4 className="font-cormorant italic text-2xl text-gray-800 mb-2 group-hover:text-[#a36e3a] transition-colors">
                                Teide National Park
                            </h4>
                                <p className="text-gray-600 text-sm">Experience the majesty of Spain&apos;s highest peak...</p>
                        </Link>
                        <Link href="/adboutiquevillas/blog/local-cuisine" className="group">
                            <div className="relative overflow-hidden mb-4">
                                <Image
                                    src="/DCC_6248.jpg"
                                    alt="Local Cuisine"
                                    width={400}
                                    height={250}
                                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <h4 className="font-cormorant italic text-2xl text-gray-800 mb-2 group-hover:text-[#a36e3a] transition-colors">
                                Local Cuisine Guide
                            </h4>
                            <p className="text-gray-600 text-sm">A culinary journey through traditional Canarian dishes...</p>
                        </Link>
                    </div>
                </div>
            </article>

            <Footer />
        </div>
    )
}
