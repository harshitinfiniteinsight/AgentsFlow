import Link from 'next/link';
import { Zap, Globe } from 'lucide-react';

const footerLinks = {
  Product: [
    { label: 'Discover', href: '/discover' },
    { label: 'Govern', href: '/govern' },
    { label: 'Enforce', href: '/enforce' },
    { label: 'Monitor', href: '/monitor' },
    { label: 'Platform', href: '/platform' },
  ],
  Solutions: [
    { label: 'Finance', href: '#' },
    { label: 'Healthcare', href: '#' },
    { label: 'Insurance', href: '#' },
    { label: 'Enterprise', href: '#' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Partners', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Pricing', href: '/pricing' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#060b18] border-t border-white/10 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white">Agents<span className="text-indigo-400">Flow</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              The Enterprise AI Control Plane - governing, controlling, and monitoring every AI agent inside your organisation.
            </p>
            <div className="flex gap-4 mt-6">
              {[Globe, Globe, Globe, Globe].map((Icon, i) => (
                <a key={i} href="https://iagentsflow.com" target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-indigo-500 transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-sm font-semibold text-white mb-4">{section}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2026 AgentsFlow Corp. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 text-sm hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-sm hover:text-white">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
