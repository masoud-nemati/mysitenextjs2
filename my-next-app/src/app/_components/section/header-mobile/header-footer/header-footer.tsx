
import Link from 'next/link'
import React from 'react'

const HeaderFooter = () => {
    return (
        <div className="mt-6 py-4 text-center text-sm text-gray-400 border-t border-gray-700">
           © 2022 masoudnemati.com
            <br />
            Designed by{' '}
            <Link
                href="http://alithemes.com"
                className="text-blue-400 hover:text-blue-500 transition-colors"
                target="_blank"
            >
                AliThemes
            </Link>
        </div>
    )
}

export default HeaderFooter
