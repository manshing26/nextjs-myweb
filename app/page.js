import Image from "next/image";
import { HeroIntro } from "@/app/UI/Home";

export default function Home() {
  return (
    <main id="hero" className="min-h-screen w-full flex flex-col pt-20 pl-4 sm:pl-7 lg:pt-24 lg:pl-10 xl:pl-14 2xl:pl-32 bg-gray-900 text-nowrap overflow-x-scroll">
      <div className="w-full h-11 sm:h-12 md:h-14" />
      <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-quot">
        <HeroIntro />
      </div>
    </main>
  );
}
