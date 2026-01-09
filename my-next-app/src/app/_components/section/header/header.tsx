'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { Input } from '@/app/_components/ui/input/input'
import {
    IconAccount,
    IconBar,
    IconCart,
    IconClose,
    IconCompare,
    IconWishlist,
} from '@/app/_components/ui/icons/icons'
import Image from 'next/image'
import { NavLink } from './nav-link'
import { HeaderIcons } from './header-icons/header-icons'
import { HeaderMobile } from '../header-mobile/header-mobile'
import { navItems } from '@/data/navItem.data'

export const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true)

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <>

            <nav className="header-wrapper">
                <div className="header-wrapper__header">
                    <div className="header__nav">
                        <div className="header-logo">
                            {/* Logo */}
                            <Link
                                href="/"
                                className="hidden w-32 md:inline-block lg:w-40"
                            >
                                <Image
                                    src="/logo/masoudnemati.png"
                                    alt="logo"
                                    width={111}
                                    height={37}
                                    className="object-cover"
                                />
                            </Link>
                            {/*search input */}
                            <div className="header__search-box">
                                   <Input variant="primary" compsize="md" placeholder="search" />

                            </div>
                            {/* Mobile menu button */}
                            <div className="flex lg:hidden ">
                                <button
                                    onClick={toggleMenu}
                                    type="button"
                                    className="toggle-btn"
                                    aria-label="toggle menu"
                                >
                                    {isOpen ? (
                                        <IconBar strokeWidth={3}  className='stroke-block-900'/>
                                    ) : (
                                        <HeaderMobile />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Menu */}
                        <div
                            className={`header-menu-wrapper `}
                        >
                            <div className="header_menu">
                                {navItems.map((item, index) => (
                                    <NavLink href={item.href} key={index}>
                                        {item.label}
                                    </NavLink>
                                ))}
                            </div>
                            {/* Icons */}
                            <HeaderIcons />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
