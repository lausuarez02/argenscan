'use client';

import { ConnectButton } from '@/components/ConnectButton';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const isMyBoyPage = pathname === '/my-boy';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${
      isMyBoyPage 
        ? 'bg-transparent' 
        : 'bg-gray-900/50 backdrop-blur-sm border-b border-purple-500/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            href="/"
            className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
          >
            ArgenScan 🎮
          </Link>
          
          <div className="flex items-center gap-6">
            <Link 
              href="/explore"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Explore
            </Link>
            <Link 
              href="/create"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Create
            </Link>
            <ConnectButton />
          </div>
        </div>
      </div>
    </nav>
  );
} 