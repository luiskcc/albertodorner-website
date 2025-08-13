import Image from "next/image";

export default function HeroBlog() {
    return (
        <>
        <div>
            <Image src="/hero-blog.png" alt="logo" width={100} height={100} className="w-full h-full object-cover" />
        </div>
        <div className="grid grid-cols-2 gap-10 m-10">
            <div className="col-span-1">
                <Image src="/accommodations-1.png" alt="logo" width={500} height={500} className="w-1/2 h-full object-cover" />

                <h1 className="text-2xl font-bold">La Costa del Norte</h1>
                <p className="text-sm text-gray-500">12/08/2025</p>
                <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                <button className="bg-blue-500 text-white px-4 py-2 mt-4">Read more</button>
            </div>
            <div className="col-span-2 flex flex-col items-center justify-center">    
                <Image src="/accommodations-1.png" alt="logo" width={500} height={500} className="w-1/2 h-full object-cover" />
                <h1 className="text-2xl font-bold">La Costa del Norte</h1>
                <p className="text-sm text-gray-500">12/08/2025</p>
                <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                <button className="border-[#a36e3a] border-2 text-[#a36e3a] px-4 py-2 mt-4">Read more</button>
            </div>

            <div className="col-span-3 flex flex-col items-center justify-center">
                <Image src="/accommodations-1.png" alt="logo" width={500} height={500} className="w-1/2 h-full object-cover" />
                <h1 className="text-2xl font-bold">La Costa del Norte</h1>
                <p className="text-sm text-gray-500">12/08/2025</p>
                <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                <button className="bg-blue-500 text-white px-4 py-2 mt-4">Read more</button>
            </div>
            <div className="col-span-4 flex flex-col items-center justify-center">    
                <Image src="/accommodations-1.png" alt="logo" width={500} height={500} className="w-1/2 h-full object-cover" />
                <h1 className="text-2xl font-bold">La Costa del Norte</h1>
                <p className="text-sm text-gray-500">12/08/2025</p>
                <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                <button className="bg-blue-500 text-white px-4 py-2 mt-4">Read more</button>
            </div>
        </div>
        </>
    )
}