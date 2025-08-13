import Header from "./Header";
import Footer from "./Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center w-full h-full bg-[#9B7145]">
        <Image src="/Isotipo-blanco.svg" alt="Hero" width={700} height={1000} />
      </div>
      <Footer />
    </div>
  );
}
