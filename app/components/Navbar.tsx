'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Zap } from 'lucide-react';

const navItems = [
  { label: 'About', href: '/about', color: 'hover:text-indigo-300' },
  { label: 'Discover', href: '/discover', color: 'hover:text-cyan-400' },
  { label: 'Govern', href: '/govern', color: 'hover:text-purple-400' },
  { label: 'Enforce', href: '/enforce', color: 'hover:text-red-400' },
  { label: 'Monitor', href: '/monitor', color: 'hover:text-green-400' },
  { label: 'Platform', href: '/platform', color: 'hover:text-indigo-400' },
  { label: 'Pricing', href: '/pricing', color: 'hover:text-yellow-400' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f1e]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center pulse-glow">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="text-lg font-bold text-white">
            Agents<span className="text-indigo-400">Flow</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href}
              className={`text-sm text-gray-400 font-medium transition-colors ${item.color}`}>
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/#demo"
            className="text-sm text-gray-300 hover:text-white transition-colors">
            Sign In
          </Link>
          <Link href="/#demo"
            className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity pulse-glow">
            Book a Demo
          </Link>
        </div>

        {/* Mobile burger */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0f172a] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href}
              onClick={() => setOpen(false)}
              className={`text-sm text-gray-300 font-medium ${item.color}`}>
              {item.label}
            </Link>
          ))}
          <Link href="/#demo"
            className="mt-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white text-sm font-semibold rounded-lg text-center">
            Book a Demo
          </Link>
        </div>
      )}
    </nav>
  );
}
