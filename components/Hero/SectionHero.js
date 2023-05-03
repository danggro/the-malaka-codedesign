import Image from "next/image";
import Button from "../Button";
import Container from "../Container";
import TitleSection from "../TitleSection";
import ArrowR from "./Icon/ArrowR";
import Download from "./Icon/Download";
import Teknologi from "@/public/hero/teknologi.png";
import Book from "@/public/hero/Book.png";

export default function SectionHero() {
  return (
    <section className="pt-[105px] relative">
      <Container>
        <div className="w-6/12">
          <h1 className="text-5xl font-medium leading-[62px]">
            Sebuah framework CSS untuk developer yang memiliki phobia terhadap
            CSS
          </h1>
          <p className="mt-5 mb-[50px] text-white/80 leading-[32px] w-10/12 pr-5">
            Buku ini akan mengajarkan kamu konsep utility-first pada CSS dan
            diakhiri dengan membangun website yang responsive dengan Tailwind
            CSS
          </p>
          <div className="flex gap-10 mb-[100px]">
            <Button variant="large-blue" className="flex items-center gap-4">
              Beli Sekarang
              <ArrowR />
            </Button>
            <div className="flex gap-[30px] py-[6px]">
              <Download />
              <div>
                <p className="font-bold tracking-widest text-white/60">
                  SUDAH TERJUAL
                </p>
                <p className="text-2xl font-semibold">501,234+</p>
              </div>
            </div>
          </div>
          <TitleSection colorLine="bg-white/40" colorText="text-white/40">
            teknologi yang digunakan
          </TitleSection>
          <Image src={Teknologi} alt="Teknologi" className="mt-4" />
        </div>
      </Container>
      <div className="absolute top-10 right-[150px] rotate-[8deg] ">
        <div className="w-[495px] h-[736px] shadow-[0px_80px_100px_15px_rgba(29,43,63,0.4)] absolute bottom-12 -z-10"></div>
        <Image src={Book} alt="Book" className="" />
      </div>
    </section>
  );
}
