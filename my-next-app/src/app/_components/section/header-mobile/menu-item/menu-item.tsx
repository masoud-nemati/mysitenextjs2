
import { navItems } from '@/data/navItem.data'
import React from 'react'
import { NavLink } from '../../header/nav-link'

export const MenuItem = () => {
    return (
        <div className="flex flex-col divide-y divide-gray-700">
            {navItems.map((item, index) => (
                <NavLink
                    href={item.href}
                    key={index}
                    className="py-4 px-2 text-gray-100 hover:text-white font-medium transition-colors"
                >
                    {item.label}
                </NavLink>
            ))}
        </div>
    )
}
