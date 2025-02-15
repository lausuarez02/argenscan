'use client';
import React, { useState } from 'react';
import { useAccount, useSendTransaction } from 'wagmi';
import { parseEther } from 'viem';
import { ConnectButton } from '@/components/ConnectButton';
import { useRouter } from 'next/navigation';
import { mantle } from 'wagmi/chains';

export default function CreateGame() {
  const router = useRouter();
  const { isConnected, address } = useAccount();
  const [isLoading, setIsLoading] = useState(false);
  const { sendTransaction } = useSendTransaction();
  const [formData, setFormData] = useState({
    name: '',
    type: 'Adventure',
    prompt: '',
    image: null as File | null
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isConnected) {
      alert("Ser, you need to connect your wallet first! 🦊");
      return;
    }

    setIsLoading(true);
    try {
      // Send 1 MANTLE using wagmi's hook
      const result = await sendTransaction({
        to: '0x52eF0e850337ecEC348C41919862dBAac42F620B',
        value: parseEther('1'),
        chainId: 5001, // Mantle chainId
        gas: BigInt(21000), // Standard gas limit for ETH transfers
      });

      console.log('Transaction:', result);
      router.push('/explore');
      
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong! Check console for details.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFormData({ ...formData, image: e.target.files[0] });
    }
  };

  return (
    <div className="relative min-h-screen">      
      <div className="relative z-10 min-h-screen py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            MINT YOUR DEGEN GAME 🎮
          </h1>
          <p className="text-gray-300 mb-8 text-lg">
            Ape in now! Only 1 $MANTLE to create your own AI game! 🚀
          </p>

          {!isConnected ? (
            <div className="text-center py-10 bg-gray-800/40 backdrop-blur-sm rounded-xl border border-purple-500/20 shadow-xl">
              <h2 className="text-2xl mb-4 text-white">GM! Connect Your Wallet Ser!</h2>
              <ConnectButton />
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 shadow-xl">
              <div className="mb-6">
                <label className="block text-purple-300 mb-2 font-bold">GAME NAME (MAKE IT DEGEN)</label>
                <input 
                  type="text"
                  required
                  placeholder="Super Degen Adventure v69"
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/60 border border-purple-500/50 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-purple-300 mb-2 font-bold">GAME VIBE</label>
                <select 
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/60 border border-purple-500/50 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                  onChange={(e) => setFormData({...formData, type: e.target.value})}
                >
                  <option>🗡️ ADVENTURE SER</option>
                  <option>🧩 PUZZLE LFG</option>
                  <option>🎲 STRATEGY WAGMI</option>
                  <option>🎭 RPG FRENS</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-purple-300 mb-2 font-bold">AI PROMPT (MAKE IT VIRAL)</label>
                <textarea 
                  required
                  placeholder="describe your degen masterpiece here..."
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/60 border border-purple-500/50 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-500"
                  rows={4}
                  onChange={(e) => setFormData({...formData, prompt: e.target.value})}
                />
              </div>

              <div className="mb-6">
                <label className="block text-purple-300 mb-2 font-bold">DROP YOUR PFP SER</label>
                <input 
                  type="file"
                  required
                  accept="image/*"
                  className="w-full px-4 py-3 rounded-lg bg-gray-900/60 border border-purple-500/50 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-500 file:text-white hover:file:bg-purple-600"
                  onChange={handleImageChange}
                />
              </div>

              <button 
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'MINTING...' : 'MINT FOR 1 $MANTLE 🚀'}
              </button>

              <p className="text-center mt-4 text-gray-400">
                Gas fees may apply. WAGMI! 🔥
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
} 