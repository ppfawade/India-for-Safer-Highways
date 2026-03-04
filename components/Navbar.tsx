"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-bold text-xl text-blue-900">
              SaferHighways<span className="text-yellow-500">India</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="#problem" className="text-gray-600 hover:text-blue-900 transition-colors">The Problem</Link>
            <Link href="#solution" className="text-gray-600 hover:text-blue-900 transition-colors">The Solution</Link>
            <Link href="#benefits" className="text-gray-600 hover:text-blue-900 transition-colors">Benefits</Link>
            <Link href="/policy-brief" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">Policy Brief</Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-blue-900">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#problem" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50" onClick={() => setIsOpen(false)}>The Problem</Link>
            <Link href="#solution" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50" onClick={() => setIsOpen(false)}>The Solution</Link>
            <Link href="#benefits" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50" onClick={() => setIsOpen(false)}>Benefits</Link>
            <Link href="/policy-brief" className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-50" onClick={() => setIsOpen(false)}>Policy Brief</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
