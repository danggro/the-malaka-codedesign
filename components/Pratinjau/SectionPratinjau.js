import Image from "next/image";
import Container from "../Container";
import SubTitleSection from "../SubTitleSection";
import TextSection from "../TextSection";
import Book from "@/public/pratinjau/Book.png";
import Img1 from "@/public/pratinjau/halaman/image-7.png";
import Img2 from "@/public/pratinjau/halaman/image-8.png";
import Img3 from "@/public/pratinjau/halaman/image-9.png";
import Img4 from "@/public/pratinjau/halaman/image-10.png";
import Img5 from "@/public/pratinjau/halaman/image-11.png";
import Img6 from "@/public/pratinjau/halaman/image-12.png";
import Img7 from "@/public/pratinjau/halaman/image-13.png";
import Img8 from "@/public/pratinjau/halaman/image-14.png";
import ArrowR from "./ArrowR";
import TitleSection2 from "../TitleSection2";

export default function SectionPratinjau() {
  return (
    <section className="pb-[200px] bg-[#EDFCFD]">
      <Container>
        <div className="w-8/12 mx-auto text-center ">
          <TitleSection2 color="light">pratinjau</TitleSection2>
          <SubTitleSection color="text-dark mt-[10px] mb-5">
            Sebelum membeli, kamu dapat melihat beberapa halaman pratinjau isi
            di dalam buku ini
          </SubTitleSection>
          <TextSection color="text-dark/80 w-9/12 mx-auto">
            Klik pada gambar halaman di sebelah kanan buku untuk melihat lebih
            detail halaman buku tersebut dan membaca isinya.
          </TextSection>
        </div>
        <div className="mt-[100px] flex gap-[30px]">
          <div className="relative flex-shrink-0 w-4/12">
            <Image src={Book} alt="Book" />
            <div className="shadow-[0px_80px_100px_0_rgba(29,43,63,0.4)] w-[340px] h-[500px] absolute bottom-12 left-3"></div>
          </div>
          <div className="relative flex items-center flex-shrink-0">
            <Image
              src={Img1}
              alt="Img1"
              className="rounded-[10px] shadow-[0px_30px_60px_0_rgba(29,43,63,0.05)] z-50"
            />
            <Image
              src={Img2}
              alt="Img2"
              className="rounded-[10px] shadow-[0px_30px_60px_0_rgba(29,43,63,0.05)] -translate-x-[60%] z-40"
            />
            <Image
              src={Img3}
              alt="Img3"
              className="rounded-[10px] shadow-[0px_30px_60px_0_rgba(29,43,63,0.05)] -translate-x-[130%] z-30"
            />
            <Image
              src={Img4}
              alt="Img4"
              className="rounded-[10px] shadow-[0px_30px_60px_0_rgba(29,43,63,0.05)] -translate-x-[205%] z-20"
            />
            <Image
              src={Img5}
              alt="Img5"
              className="rounded-[10px] shadow-[0px_30px_60px_0_rgba(29,43,63,0.05)] -translate-x-[295%] z-10"
            />
            <Image
              src={Img6}
              alt="Img6"
              className="rounded-[10px] shadow-[0px_30px_60px_0_rgba(29,43,63,0.05)] -translate-x-[390%] z-[9]"
            />
            <Image
              src={Img7}
              alt="Img7"
              className="rounded-[10px] shadow-[0px_30px_60px_0_rgba(29,43,63,0.05)] -translate-x-[510%] z-[8]"
            />
            <button className="absolute left-[316px] w-[60px] h-[60px] rounded-full bg-primary shadow-box grid place-items-center top-[50%] -translate-y-[50%] z-[60]">
              <ArrowR />
            </button>
          </div>
        </div>
        <p className="font-medium text-center text-dark/80">
          Halaman 1 dari 257
        </p>
      </Container>
    </section>
  );
}
