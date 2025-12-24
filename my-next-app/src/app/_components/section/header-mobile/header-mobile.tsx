// HeaderMobile.tsx
import Image from 'next/image'
import Link from 'next/link'
import { IconClose } from '@/app/_components/ui/icons/icons'
import { MenuItem } from './menu-item/menu-item'
import ProfileInfo from './profile-info/profile-info'
import MobileBaner from './mobile-baner/mobile-baner'
import HeaderFooter from './header-footer/header-footer'

export const HeaderMobile: React.FC = () => {
    return (
        <div className="absolute right-0 top-0 z-[999] w-[360px] h-screen bg-neutral-800 text-white p-6 md:hidden shadow-lg overflow-y-auto">
            {/* Logo & Close */}
            <div className="flex justify-between items-center border-b border-gray-700 pb-4 mb-4">
                <Link href="/" className="w-32">
                    <Image
                        src="logo/logo.svg"
                        alt="logo"
                        width={111}
                        height={37}
                        className="object-contain"
                    />
                </Link>
                <IconClose strokeWidth={3} className="cursor-pointer hover:text-red-400 transition-colors" />
            </div>

            {/* Menu */}
            <MenuItem />

            {/* Profile */}
            <ProfileInfo />

            {/* Mobile Banner */}
            <MobileBaner />

            {/* Footer */}
            <HeaderFooter />
        </div>
    )
}
