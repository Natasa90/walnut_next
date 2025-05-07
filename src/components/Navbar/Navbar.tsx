import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/booking', label: 'Booking' },
  { href: '/contact', label: 'Contact' },
];

export const Navbar = () => {
  const router = useRouter(); 
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold">Walnut House</div>

        <div className="hidden md:flex gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:underline transition duration-200 ${
                router.pathname === link.href ? 'font-semibold underline' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:underline transition duration-200 ${
                router.pathname === link.href ? 'font-semibold underline' : ''
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
