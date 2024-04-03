import { ConnectButton } from "@rainbow-me/rainbowkit";

export const Header = () => {
  return (
    <>
      <div className="navbar bg-neutral">
        <div className="container mx-auto">
          <div className="flex-1">
            <h1 className="text-3xl font-bold font-Workbench text-[#41ff54]">
              BlisterB
            </h1>
          </div>
          <div className="flex-none">
            <ConnectButton />
          </div>
        </div>
      </div>
    </>
  );
};
