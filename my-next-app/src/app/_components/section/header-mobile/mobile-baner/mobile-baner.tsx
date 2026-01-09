// MobileBaner.tsx
import Link from 'next/link'
import React from 'react'

const MobileBaner = () => {
    return (
        <div className="mt-6 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 p-5 shadow-md">
            <div className="flex flex-col gap-1">
                <span className="text-sm text-gray-700 font-semibold">
                     Walking by Faith
                </span>
                <h3 className="text-lg font-bold text-gray-900">
                     Masoud Nemati
                </h3>
                <p className="text-gray-800 font-medium">Seeking truth, serving with love, growing in hope</p>
                <Link
                    href="shop-grid.html"
                    className="mt-2 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                >
                    Learn More
                </Link>
            </div>
        </div>
    )
}

export default MobileBaner
