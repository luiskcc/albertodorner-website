import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center w-full min-h-screen bg-[#9B7145]">
        <video
          className="w-full"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/intro-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Footer />
    </div>
  );
}
