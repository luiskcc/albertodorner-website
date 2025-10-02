"use client"
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
    {
        id: 1,
        title: "La Costa del Norte",
        date: "12/08/2025",
        excerpt: "Discover the hidden gems of Tenerife's northern coast, where dramatic cliffs meet the Atlantic Ocean.",
        image: "/accommodations-1.png",
        slug: "costa-del-norte"
    },
    {
        id: 2,
        title: "Teide National Park",
        date: "10/08/2025",
        excerpt: "Experience the majesty of Spain's highest peak and explore volcanic landscapes.",
        image: "/adboutiquevillas_3.png",
        slug: "teide-national-park"
    },
    {
        id: 3,
        title: "Local Cuisine Guide",
        date: "05/08/2025",
        excerpt: "A culinary journey through traditional Canarian dishes and the best local restaurants.",
        image: "/DCC_6248.jpg",
        slug: "local-cuisine"
    },
    {
        id: 4,
        title: "Best Beaches",
        date: "01/08/2025",
        excerpt: "From black sand to golden shores, explore Tenerife's most beautiful beaches.",
        image: "/Apartment_G_terrace_02.jpg",
        slug: "best-beaches"
    }
];

export default function HeroBlog() {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <div className="relative w-full h-[70vh] mb-16 mt-20">
                <Image
                    src="/accommodations-1.png"
                    alt="Blog Hero"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="font-cormorant italic text-7xl mb-4" style={{ fontWeight: '300' }}>
                            Our Blog
                        </h1>
                        <p className="text-xl" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: '300' }}>
                            Stories, guides, and inspiration from Tenerife
                        </p>
                    </div>
                </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="max-w-7xl mx-auto px-4 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <article key={post.id} className="group">
                            <Link href={`/adboutiquevillas/blog/${post.slug}`} className="block">
                                <div className="relative overflow-hidden mb-4">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        width={400}
                                        height={300}
                                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="px-2">
                                    <time className="text-sm text-gray-500" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                                        {post.date}
                                    </time>
                                    <h2 className="font-cormorant italic text-3xl text-gray-800 mt-2 mb-3 group-hover:text-[#a36e3a] transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-600 mb-4 leading-relaxed" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: '15px' }}>
                                        {post.excerpt}
                                    </p>
                                    <span className="inline-flex items-center text-[#a36e3a] font-semibold text-sm group-hover:gap-2 transition-all">
                                        Read more
                                        <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}