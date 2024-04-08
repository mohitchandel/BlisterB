import { Hero } from "@/components/Hero";
import Image from "next/image";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#ece3ca]">
      <div className="">
        <Hero />
        <Projects/>
      </div>
     
    </main>
  );
}
