'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();

  const isActivePath = (path) => {
    return pathname === path ? 'text-amber-600' : 'text-gray-700';
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchQuery);
  };

  return (
    <nav className="sticky top-0 w-full z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-playfair text-2xl text-[#939292]">
              SunflowerC.com
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-64 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <button 
                type="submit"
                className="absolute right-3 top-2.5 text-gray-500 hover:text-amber-600"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>

            {/* Navigation Links */}
            <Link 
              href="/" 
              className={`${isActivePath('/')} hover:text-amber-600 transition-colors font-medium`}
            >
              HOME
            </Link>
            <Link 
              href="/catalog"
              className={`${isActivePath('/catalog')} hover:text-amber-600 transition-colors font-medium`}
            >
              CATALOG
            </Link>
            <Link 
              href="/policies"
              className={`${isActivePath('/policies')} hover:text-amber-600 transition-colors font-medium`}
            >
              POLICIES
            </Link>
            <Link 
              href="/login"
              className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors font-medium"
            >
              LOGIN
            </Link>
            <div className="flex items-center cursor-pointer">
                <FontAwesomeIcon icon={faCartShopping} />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-amber-600 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="px-4 pt-2 pb-3 space-y-1">
          {/* Mobile Search */}
          <form onSubmit={handleSearch} className="relative mb-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            <button 
              type="submit"
              className="absolute right-3 top-2.5 text-gray-500 hover:text-amber-600"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>

          {/* Mobile Navigation Links */}
          <Link
            href="/"
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActivePath('/')} hover:text-amber-600 hover:bg-gray-50`}
          >
            Home
          </Link>
          <Link
            href="/catalog"
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActivePath('/catalog')} hover:text-amber-600 hover:bg-gray-50`}
          >
            Catalog
          </Link>
          <Link
            href="/policies"
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActivePath('/policies')} hover:text-amber-600 hover:bg-gray-50`}
          >
            Policies
          </Link>
          <Link
            href="/login"
            className="block px-3 py-2 rounded-md text-base font-medium bg-amber-600 text-white hover:bg-amber-700 text-center mt-4"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}