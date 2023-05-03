import Image from "next/image";
import NavBar from "./Navigation/NavBar";
import BGHero from "@/public/hero/bg-hero.png";
import SectionHero from "./Hero/SectionHero";

export default function Header() {
  return (
    <section className="relative">
      <Image
        src={BGHero}
        alt="BGHero"
        className="absolute w-screen h-[1075px] top-0 -z-10"
      />
      <NavBar />
      <SectionHero />
    </section>
  );
}
