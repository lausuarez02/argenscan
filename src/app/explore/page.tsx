'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ExplorePage() {
  const router = useRouter();

  const dummyGames = [
    {
      title: "WINKWINKI",
      description: "eating disorders",
      image: "/wink.jpg"
    },
    {
      title: "PUNKING THE WORLDDDDD",
      description: "BE A PUNK AND PUNK THE WORLD",
      image: "/punk.png"
    },
    {
      title: "Game Collection",
      description: "clean game collection",
      image: "/gameC.svg"
    }
  ];

  const featuredGame = {
    title: "Boys by PetraVoice",
    description: "THE BOYS NFT COLLECTION, feed then and take care of them 🦸‍♂️",
    image: "/boy8.jpg"
  };

  const handlePlayGame = () => {
    router.push('/my-boy'); // Navigate to my-boy screen
  };

  return (
    <div className="relative min-h-screen">
      
      <div className="relative z-10 min-h-screen py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            THE BOYS NFT COLLECTION 🦸‍♂️
          </h1>
          <p className="text-gray-300 mb-12 text-lg">
            The most diabolical games in the metaverse! WAGMI CUNTS! 🚀
          </p> */}

          {/* Featured Game */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-white text-center">
              🔥 FEATURED GAME OF THE WEEK 🔥
            </h2>
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 shadow-xl hover:shadow-purple-500/25 transition-all duration-300">
              <div className="relative h-96">
                <Image
                  src={featuredGame.image}
                  alt={featuredGame.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-3xl font-bold mb-3 text-white">{featuredGame.title}</h3>
                  <p className="text-gray-300 mb-6 text-xl max-w-3xl">{featuredGame.description}</p>
                  <button 
                    onClick={handlePlayGame}
                    className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-purple-500/25"
                  >
                    PLAY NOW CUNT 🎮
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Game Collection */}
          <h2 className="text-2xl font-bold mb-6 text-white">
            ALL GAMES 🎮
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dummyGames.map((game, index) => (
              <div 
                key={index}
                className="bg-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 shadow-xl hover:shadow-purple-500/25 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="relative h-48">
                  <Image
                    src={game.image}
                    alt={game.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{game.title}</h3>
                  <p className="text-gray-400 mb-4">{game.description}</p>
                  <button 
                    onClick={handlePlayGame}
                    className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-bold shadow-lg hover:shadow-purple-500/25"
                  >
                    PLAY NOW CUNT 🎮
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 