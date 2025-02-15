'use client';
import React from 'react';
import { ConnectButton } from '@/components/ConnectButton';
import { useAccount } from 'wagmi';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Home() {
  const { isConnected } = useAccount();
  const router = useRouter();

  return (
    <div className="relative min-h-screen">
      
      <div className="relative z-10 min-h-screen">
        {/* Hero Section */}
        <div className="relative h-[70vh] flex items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                ArgenScan AI NFT Hub 🎮
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Create and explore AI-powered NFT games. WAGMI! 🚀
              </p>
              <div className="flex gap-6 justify-center">
                <button
                  onClick={() => router.push('/create')}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 font-bold text-lg"
                >
                  CREATE YOUR GAME 🚀
                </button>
                <button
                  onClick={() => router.push('/explore')}
                  className="px-8 py-4 bg-gray-800/40 backdrop-blur-sm text-white rounded-xl hover:bg-gray-700/40 transition-all duration-300 shadow-lg font-bold text-lg border border-purple-500/20"
                >
                  EXPLORE GAMES 🔍
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl bg-gray-800/40 backdrop-blur-sm border border-purple-500/20 shadow-xl hover:shadow-purple-500/25 transition-all">
                <h3 className="text-xl font-bold mb-3 text-white">CREATE 🎨</h3>
                <p className="text-gray-300">Design your game with AI-powered tools and custom prompts</p>
              </div>
              <div className="p-6 rounded-xl bg-gray-800/40 backdrop-blur-sm border border-purple-500/20 shadow-xl hover:shadow-purple-500/25 transition-all">
                <h3 className="text-xl font-bold mb-3 text-white">LAUNCH 🚀</h3>
                <p className="text-gray-300">Deploy your NFT collection with integrated gameplay</p>
              </div>
              <div className="p-6 rounded-xl bg-gray-800/40 backdrop-blur-sm border border-purple-500/20 shadow-xl hover:shadow-purple-500/25 transition-all">
                <h3 className="text-xl font-bold mb-3 text-white">PLAY 🎮</h3>
                <p className="text-gray-300">Enjoy and share your AI-powered gaming experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4 text-white">GM! READY TO START? 👋</h2>
              <p className="text-gray-300 mb-8">Connect your wallet and begin creating your AI NFT game</p>
              <ConnectButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Spline error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}