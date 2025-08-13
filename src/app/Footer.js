import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-900 pt-12 pb-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Contact Us */}
        <div>
          <h3 className="font-bold mb-4">CONTACT US</h3>
          <div className="mb-2">
            <span className="font-semibold">Reservations</span> · <a href="tel:08000770804" className="underline">0800 077 0804</a>
          </div>
          <div className="mb-4">
            <span className="font-semibold">Address</span> · Wogan House, 99 Great Portland Street, London, W1W 7NY
          </div>
          <Link href="/booknow/" className="animated-book-button">
                            <div className="circle"></div>
                            <svg className="arr-2" viewBox="0 0 24 24">
                                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                            </svg>
                            <span className="text font-thin">Contact Us</span>
                            <svg className="arr-1" viewBox="0 0 24 24">
                                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                            </svg>
              </Link>
          <div className="font-semibold mb-2 mt-6">SHARE YOUR FEEDBACK</div>
          <div className="font-semibold mb-2">FOLLOW US</div>
          <div className="flex space-x-4 text-2xl">
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg fill="currentColor text-[#a36e3a]" viewBox="0 0 24 24" className="w-6 h-6"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.13.62a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0z"/></svg>
            </a>
            <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg viewBox="0 0 576 512" fill="currentColor tex" className="w-6 h-6"><path d="M549.655 124.083c-6.281-23.725-24.958-42.401-48.684-48.684C465.281 64 288 64 288 64s-177.281 0-212.971 11.399c-23.726 6.283-42.403 24.959-48.684 48.684C16 159.773 16 256 16 256s0 96.227 10.345 131.917c6.281 23.725 24.958 42.401 48.684 48.684C110.719 448 288 448 288 448s177.281 0 212.971-11.399c23.726-6.283 42.403-24.959 48.684-48.684C560 352.227 560 256 560 256s0-96.227-10.345-131.917zM232 336V176l142.857 80L232 336z"/></svg>            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
            </a>
          </div>
        </div>
        {/* Explore Our World */}
        <div>
          <h3 className="font-bold mb-4">EXPLORE OUR WORLD</h3>
          <ul className="space-y-2">
            <li><Link href="/adboutiquevillas" className="hover:underline text-[#a36e3a]">Villas</Link></li>
            <li><Link href="/adboatrental" className="hover:underline text-[#a36e3a]">Boats</Link></li>
            <li><Link href="/caradventures" className="hover:underline text-[#a36e3a]">Cars</Link></li>
            <li><Link href="/professionals" className="hover:underline text-[#a36e3a]">About Us</Link></li>
            <li><Link href="/privacy-policy" className="hover:underline text-[#a36e3a]">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service" className="hover:underline text-[#a36e3a]">Terms of Service</Link></li>
          </ul>
        </div>
        {/* Join Our Family */}
        <div>
          <h3 className="font-bold mb-4">JOIN OUR FAMILY</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Travel professionals <span aria-label="external" className="inline-block"></span></a></li>
            <li><a href="#" className="hover:underline">Event planners <span aria-label="external" className="inline-block"></span></a></li>
            <li><a href="#" className="hover:underline">Media hub <span aria-label="external" className="inline-block"></span></a></li>
            <li><a href="#" className="hover:underline">Development <span aria-label="external" className="inline-block"></span></a></li>
            <li><a href="#" className="hover:underline">Careers <span aria-label="external" className="inline-block"></span></a></li>
            <li><a href="#" className="hover:underline">About albertodorner <span aria-label="external" className="inline-block"></span></a></li>
          </ul>
        </div>
        {/* Newsletter Signup */}
        <div>
          <h3 className="font-bold mb-4">SIGN UP FOR EXCLUSIVE NEWS, TRAVEL INSPIRATION AND OFFERS</h3>
          <form className="space-y-2">
            <div className="flex flex-col gap-2">
              <input type="text" placeholder="First name" className="border-b border-gray-300 flex-1 px-2 py-1 bg-transparent focus:outline-none" />
            </div>
            <input type="email" placeholder="Enter email address" className="border-b border-gray-300 w-full px-2 py-1 bg-transparent focus:outline-none" />
            <p className="text-xs text-gray-500 mt-2">
              I would like to be kept updated on exclusive news, travel inspiration and offers from the legendary world of albertodorner, and receive tailored communications based on my interests and circumstances. To learn more about how we store and process your data please visit our <a href="#" className="underline">Privacy Policy</a>. You may opt out of receiving our updates at any time, either by using an unsubscribe link or by contacting us at unsubscribe@albertodorner.com.
            </p>
            <Link href="/booknow/" className="animated-book-button">
                            <div className="circle"></div>
                            <svg className="arr-2" viewBox="0 0 24 24">
                                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                            </svg>
                            <span className="text font-thin">Sign Up</span>
                            <svg className="arr-1" viewBox="0 0 24 24">
                                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                            </svg>
              </Link>
          </form>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 text-xs text-gray-500 border-t border-gray-200 pt-6">
        <span className="font-semibold">Copyright albertodorner Management Limited 2025.</span> All copyright and other intellectual property rights in all logos, designs, text, images and other materials on this website are owned by albertodorner Management Limited or appear with permission of the relevant owner. &apos;albertodorner&apos; is a registered trade mark. All rights reserved.
      </div>
    </footer>
  );
}