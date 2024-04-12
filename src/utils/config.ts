import { createPublicClient, http, custom, createWalletClient } from "viem";
import { neonDevnet } from "viem/chains";

let transportOption;

if (typeof window !== "undefined" && window.ethereum) {
  transportOption = custom(window.ethereum);
} else {
  // Use a default transport option for non-browser environments
  transportOption = http();
}

export const walletClient = createWalletClient({
  chain: neonDevnet,
  transport: transportOption,
});

export const publicClient = createPublicClient({
  chain: neonDevnet,
  transport: http(),
});
