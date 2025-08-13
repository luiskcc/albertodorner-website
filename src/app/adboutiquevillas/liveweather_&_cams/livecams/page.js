import Image from "next/image";
import Header from "../../../Header";
import Footer from "../../../Footer";


export default function LiveCams() {
    return (
        <div>
            <Header />
            <Image src="/adboutiquevillas_3.png" alt="Live Cam" width={1000} height={1000} />
            <Footer />
        </div>
    )
}