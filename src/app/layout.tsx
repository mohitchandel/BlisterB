"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import "@rainbow-me/rainbowkit/styles.css";
import {
  Chain,
  darkTheme,
  getDefaultConfig,
  lightTheme,
  midnightTheme,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Footer } from "@/components/Footer";

const neonevm = {
  id: 245022926,
  name: "Neon EVM Devnet",
  iconUrl: "https://icons.llamao.fi/icons/chains/rsz_neon.jpg",
  iconBackground: "#000",
  nativeCurrency: { name: "Neon", symbol: "NEON", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://devnet.neonevm.org	"] },
  },
  blockExplorers: {
    default: { name: "NeonScan", url: "https://neonscan.org/" },
  },
} as const satisfies Chain;

const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains: [neonevm],
  ssr: true,
});
const queryClient = new QueryClient();

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider
              theme={midnightTheme({
                accentColor: "#41ff54",
                accentColorForeground: "black",
              })}
            >
              <Header />
              {children}
              <Footer />
            </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </body>
    </html>
  );
}
