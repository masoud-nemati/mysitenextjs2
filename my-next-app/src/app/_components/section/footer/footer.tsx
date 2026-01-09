import Link from "next/link";
import Image from "next/image";



import {
  IconFacebookGray,
  IconInstagramGray,
  IconLinkedinGray,
 
} from "@/app/_components/ui/icons/icons";
import ScrollToTop from "@/app/_components/ui/scroll-to-top/scroll-to-top";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 text-white">

      {/* Scroll Button (Right Side) */}
      <div className="fixed bottom-8 right-6 z-50">
        <ScrollToTop />
      </div>

      <div className="container-fluid relative flex flex-wrap justify-between gap-4 py-20">

        {/* Contact */}
        <div>
          <h4 className="mb-[30px] text-2xl font-bold text-shop-gray-1000">
            Contact
          </h4>

          <ul className="space-y-5">
            <li className="flex items-center">
              <div className="text-md text-shop-gray-900">
                <strong className="font-bold">Address:</strong>
                turky    .....
              </div>
            </li>

            <li>
              <div className="text-md text-shop-gray-900">
                <strong className="font-bold">Phone:</strong>
                (+90) 531-384-5662
              </div>
            </li>

            <li>
              <div className="text-md text-shop-gray-900">
                <strong className="font-bold">E-mail:</strong>
                masuodn8@gmail.com
              </div>
            </li>

            <li>
              <div className="text-md text-shop-gray-900">
                <strong className="font-bold">Hours:</strong>
                8:00 - 17:00, Mon - Sat
              </div>
            </li>

            <li>
              <div className="flex gap-5 text-md">
                <IconFacebookGray width="32" height="32" viewBox="0 0 32 32" fill="#425a8b" stroke="#fff" />
                <IconInstagramGray width="32" height="32" viewBox="0 0 32 32" fill="#425a8b" stroke="#fff" />
               
                <IconLinkedinGray width="32" height="32" viewBox="0 0 32 32" fill="#425a8b" stroke="#fff" />
              </div>
            </li>
          </ul>
        </div>

        {/* Footer Menu 1 */}
        <div>
          <h4 className="mb-[30px] text-2xl font-bold text-shop-gray-1000">
            Pages
          </h4>

          <ul className="space-y-5">

            <li><Link href="/" className="text-md text-shop-gray-900">Home</Link></li>
            <li><Link href="/about" className="text-md text-shop-gray-900">About Me</Link></li>
            <li><Link href="/projects" className="text-md text-shop-gray-900">Projects</Link></li>
            <li><Link href="/blog" className="text-md text-shop-gray-900">Blog</Link></li>
            <li><Link href="/contact" className="text-md text-shop-gray-900">Contact</Link></li>
          </ul>
        </div>

        {/* Footer Menu 2 */}
        <div>
          <h4 className="mb-[30px] text-2xl font-bold text-shop-gray-1000">
            About
          </h4>

          <ul className="space-y-5">
            <li className="text-md text-shop-gray-900">Masoud Nemati</li>
            <li className="text-md text-shop-gray-900">Software & Theology Student</li>
            <li className="text-md text-shop-gray-900">Based in Türkiye</li>
            <li className="text-md text-shop-gray-900">Faith • Learning • Purpose</li>
          </ul>
        </div>

        {/* App & Payment */}
        <div className="w-[312px] p-3">
          <h4 className="mb-[20px] text-2xl font-bold text-shop-gray-1000">
            Stay in Touch
          </h4>

          <p className="mb-4 text-md text-shop-gray-900">
            Leave your email and I’ll get back to you.
          </p>

          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
              required
            />

            <button
              type="submit"
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition"
            >
              Send
            </button>
          </form>
        </div>


      </div>
    </footer>
  );
};

export default Footer;
