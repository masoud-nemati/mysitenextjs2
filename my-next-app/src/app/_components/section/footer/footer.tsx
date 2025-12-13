import Link from "next/link";
import Image from "next/image";
import {
  IconFacebookGray,
  IconInstagramGray,
  IconLinkedinGray,
  IconTwitterGray,
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
                Tehran - Ayatollah Kashani - Abazar Blvd.
              </div>
            </li>

            <li>
              <div className="text-md text-shop-gray-900">
                <strong className="font-bold">Phone:</strong>
                (+98) 123-456-789
              </div>
            </li>

            <li>
              <div className="text-md text-shop-gray-900">
                <strong className="font-bold">E-mail:</strong>
                info@darsman.com
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
                <IconTwitterGray width="32" height="32" viewBox="0 0 32 32" fill="#425a8b" stroke="#fff" />
                <IconLinkedinGray width="32" height="32" viewBox="0 0 32 32" fill="#425a8b" stroke="#fff" />
              </div>
            </li>
          </ul>
        </div>

        {/* Footer Menu 1 */}
        <div>
          <h4 className="mb-[30px] text-2xl font-bold text-shop-gray-1000">
            Footer menu
          </h4>

          <ul className="space-y-5">
            <li className="text-md text-shop-gray-900">
              <Link href="#" className="flex items-end gap-0.5">
                Useful Links
              </Link>
            </li>
            <li className="text-md text-shop-gray-900"><a href="#">Useful Links</a></li>
            <li className="text-md text-shop-gray-900"><a href="#">Useful Links</a></li>
            <li className="text-md text-shop-gray-900"><a href="#">Useful Links</a></li>
            <li className="text-md text-shop-gray-900"><a href="#">Useful Links</a></li>
          </ul>
        </div>

        {/* Footer Menu 2 */}
        <div>
          <h4 className="mb-[30px] text-2xl font-bold text-shop-gray-1000">
            Footer menu
          </h4>

          <ul className="space-y-5">
            <li className="text-md text-shop-gray-900">
              <Link href="#" className="flex items-end gap-0.5">
                Useful Links
              </Link>
            </li>
            <li className="text-md text-shop-gray-900"><a href="#">Useful Links</a></li>
            <li className="text-md text-shop-gray-900"><a href="#">Useful Links</a></li>
            <li className="text-md text-shop-gray-900"><a href="#">Useful Links</a></li>
            <li className="text-md text-shop-gray-900"><a href="#">Useful Links</a></li>
          </ul>
        </div>

        {/* App & Payment */}
        <div className="w-[312px] p-3">
          <h4 className="mb-[30px] text-2xl font-bold text-shop-gray-1000">
            App & Payment
          </h4>

          <div className="flex flex-col gap-4">
            <p className="text-md text-shop-gray-900">
              Download our Apps and get extra 15% Discount on your first Order…!
            </p>

            <div className="flex">
              <Link className="mr-5" href="#">
                <Image src="/images/other-images/appstore.png" alt="Ecom" width="128" height="39" />
              </Link>

              <Link href="#">
                <Image src="/images/other-images/google-play.png" alt="Ecom" width="128" height="39" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
