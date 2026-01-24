"use client"
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
    {
        id: 1,
        title: "Best Sailing Routes",
        date: "15/01/2025",
        excerpt: "Discover the most scenic sailing routes around the Canary Islands, from hidden coves to dramatic coastlines.",
        image: "/boats/breeze-rand.webp",
        slug: "best-sailing-routes"
    },
    {
        id: 2,
        title: "Whale Watching Season",
        date: "10/01/2025",
        excerpt: "The best times and locations to spot whales and dolphins in Tenerife's waters.",
        image: "/boats/mana-rand.webp",
        slug: "whale-watching-season"
    },
    {
        id: 3,
        title: "Boat Maintenance Tips",
        date: "05/01/2025",
        excerpt: "Essential maintenance tips to keep your vessel in perfect condition throughout the year.",
        image: "/boats/saxdor.webp",
        slug: "boat-maintenance-tips"
    },
    {
        id: 4,
        title: "Island Hopping Guide",
        date: "01/01/2025",
        excerpt: "Plan the perfect multi-island adventure across the Canary archipelago by boat.",
        image: "/boats/play_24.jpg",
        slug: "island-hopping-guide"
    }
];

export default function HeroBlogBoats() {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <div className="relative w-full h-[70vh] mb-16 mt-20">
                <Image
                    src="/boats/mana-rand.webp"
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
                            Stories, guides, and maritime adventures
                        </p>
                    </div>
                </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="max-w-7xl mx-auto px-4 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <article key={post.id} className="group">
                            <Link href={`/adboatrental/blog/${post.slug}`} className="block">
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
                                    <h2 className="font-cormorant italic text-3xl text-gray-800 mt-2 mb-3 group-hover:text-[#A8BBC7] transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-600 mb-4 leading-relaxed" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontSize: '15px' }}>
                                        {post.excerpt}
                                    </p>
                                    <span className="inline-flex items-center text-[#5a7a8a] font-semibold text-sm group-hover:gap-2 transition-all">
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
