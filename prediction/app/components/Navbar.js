// components/Navbar.js
'use client'
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-contentbetween items-center  justify-center">
        <div className="hidden md:flex space-x-4">
          <Link href="/About">
            <p className="text-white">About</p>
          </Link>
        </div>
        <div className="md:hidden">
          {/* Add your mobile menu button/icon here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
