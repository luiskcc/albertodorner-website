import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="relative w-screen h-screen overflow-hidden">
        {/* Desktop Video - Banner */}
        <video
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://demoairbnbbucket.s3.us-east-2.amazonaws.com/albertodorner-web/01_MASTER_Banner.mp4" type="video/mp4" />
        </video>

        {/* Mobile Video - Responsive */}
        <video
          className="md:hidden absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://demoairbnbbucket.s3.us-east-2.amazonaws.com/albertodorner-web/01_MASTER_Responsive.mp4" type="video/mp4" />
        </video>
      </div>
      <Footer />
    </div>
  );
}
