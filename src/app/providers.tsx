'use client';

import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { createConfig, WagmiConfig } from 'wagmi';
import { http, createPublicClient } from 'viem';
import { Chain } from 'viem';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@rainbow-me/rainbowkit/styles.css';

const mantleChain: Chain = {
  id: 5000,
  name: 'Mantle',
  nativeCurrency: {
    decimals: 18,
    name: 'BIT',
    symbol: 'BIT',
  },
  rpcUrls: {
    default: { http: ['https://rpc.mantle.xyz'] },
    public: { http: ['https://rpc.mantle.xyz'] },
  },
  blockExplorers: {
    default: { name: 'Mantle Explorer', url: 'https://explorer.mantle.xyz' },
  },
} as const;

const mantleTestnet = {
  id: 5001,
  name: 'Mantle Testnet',
  network: 'mantle-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'MNT',
    symbol: 'MNT',
  },
  rpcUrls: {
    default: { http: ['https://rpc.testnet.mantle.xyz'] },
    public: { http: ['https://rpc.testnet.mantle.xyz'] },
  },
  blockExplorers: {
    default: { name: 'Mantle Testnet Explorer', url: 'https://explorer.testnet.mantle.xyz' },
  },
  testnet: true,
} as const;

const queryClient = new QueryClient();

const { connectors } = getDefaultWallets({
  appName: 'Talk to Your Boy',
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || '',
});

const config = createConfig({
  chains: [mantleChain, mantleTestnet],
  connectors,
  transports: {
    [mantleChain.id]: http(),
    [mantleTestnet.id]: http()
  }
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiConfig config={config}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </WagmiConfig>
    </QueryClientProvider>
  );
}