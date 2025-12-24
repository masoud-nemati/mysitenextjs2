import Link from 'next/link'

export const NavLink = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) => (
  <Link
    href={href}
    className="
    mt-2  text-md font-medium text-blue-900
    text-center
    rounded-lg
    px-3 py-2
    transition-all duration-300
     hover:text-white hover:shadow-md
    focus:outline-none focus:ring-2 focus:ring-blue-300
  "
  >
    {children}
  </Link>

)
