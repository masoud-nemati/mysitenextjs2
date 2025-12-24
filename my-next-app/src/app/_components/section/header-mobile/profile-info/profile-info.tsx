// ProfileInfo.tsx
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { User, ShoppingCart, Heart, Settings, Package } from 'lucide-react'

const ProfileInfo = () => {
    return (
        <div className="flex flex-col gap-5 border-b border-gray-700 pb-5">
            {/* User Info */}
            <div className="flex items-center gap-4">
                <Image
                    src="/images/other-images/default-avatar.jpg"
                    alt="User Avatar"
                    width={60}
                    height={60}
                    className="rounded-full border-2 border-blue-500 shadow-md"
                />
                <div>
                    <h6 className="text-white text-sm font-semibold">
                        Hello <span className="text-blue-400">Steven!</span>
                    </h6>
                    <p className="text-gray-400 text-xs">
                        You have 3 new messages
                    </p>
                </div>
            </div>

            {/* User Links */}
            <ul className="grid grid-cols-2 gap-3 text-sm">
                <li>
                    <Link
                        href="/user-panel"
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                        <User size={16} /> My Account
                    </Link>
                </li>
                <li>
                    <Link
                        href="/order-tracking"
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                        <Package size={16} /> Order Tracking
                    </Link>
                </li>
                <li>
                    <Link
                        href="/orders"
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                        <ShoppingCart size={16} /> My Orders
                    </Link>
                </li>
                <li>
                    <Link
                        href="/wishlist"
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                        <Heart size={16} /> My Wishlist
                    </Link>
                </li>
                <li>
                    <Link
                        href="/settings"
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                        <Settings size={16} /> Settings
                    </Link>
                </li>
                <li>
                    <Link
                        href="/login"
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                        
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default ProfileInfo
