import Link from "next/link";
import Image from "next/image";
import { navItems } from '@/data/navItem.data'
import {
  IconFacebookGray,
  IconInstagramGray,
  IconLinkedinGray,
  IconWhatsapp,
  IconTelegram,
  IconGithub,
  IconEmail,
} from "@/app/_components/ui/icons/icons";
import ScrollToTop from "@/app/_components/ui/scroll-to-top/scroll-to-top";

const socialLinks = [
  {
    href: "https://facebook.com/Masuod Nemati",
    icon: IconFacebookGray,
    label: "Facebook",
  },
  {
    href: "https://instagram.com/masuodnemati1981",
    icon: IconInstagramGray,
    label: "Instagram",
  },

  {
    href: "https://linkedin.com/in/Masuod Nemati",
    icon: IconLinkedinGray,
    label: "LinkedIn",
  },
  {
    href: "https://t.me/https://t.me/Mas_nema",
    icon: IconTelegram,
    label: "Telegram",
  },
  {
    href: "https://github.com/masoud-nemati",
    icon: IconGithub,
    label: "GitHub",
  },
];



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
                <strong className="font-bold flex items-center gap-2">
                  <a
                    href="https://wa.me/905313845662"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:opacity-80 transition"
                    aria-label="Chat on WhatsApp"
                  >
                    <IconWhatsapp
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="#25D366"
                      stroke="#25D366"
                    />
                    Whatsapp:
                  </a>
                </strong>

                <a
                  href="https://wa.me/905313845662"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 hover:underline"
                >
                  (+90) 531-384-5662
                </a>
              </div>

            </li>

            <li>
              <div className="text-md text-shop-gray-900">
                <strong className="font-bold">E-mail:</strong>
                <IconEmail
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="#25D366
"
                  stroke="#25D
"
                />
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
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="hover:scale-110 transition"
                  >
                    <Icon
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="#425a8b"
                      stroke="#fff"
                    />
                  </a>
                ))}
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
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-md text-shop-gray-900">
                  {item.label}
                </Link>
              </li>
            ))}
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
