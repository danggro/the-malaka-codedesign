import Image from "next/image";
import Container from "../Container";
import TitleSection from "../TitleSection";
import SubTitleSection from "../SubTitleSection";
import TextSection from "../TextSection";
import Picture from "@/public/penulis/Pic.png";

export default function SectionPenulis() {
  return (
    <section className="py-[200px]">
      <Container>
        <div className="flex items-center gap-[30px]">
          <div className="w-6/12">
            <Image
              src={Picture}
              alt="Picture"
              className="drop-shadow-[0px_15px_30px_rgba(29,43,63,0.5)] "
            />
          </div>
          <div className="w-6/12">
            <TitleSection colorLine="hidden" colorText="text-primary">
              penulis buku
            </TitleSection>
            <SubTitleSection color="text-dark mt-[10px] mb-5">
              Tak kenal maka tak kenal. Berkenalan dengan penulis buku ini
            </SubTitleSection>
            <TextSection color="text-dark text-base ">
              &quot;Halo, saya Nauval. Mungkin nama ini terdengar asing di
              telinga kamu. Namun, kedepannya saya berharap nama ini tidak lagi
              terdengar asing di telinga kamu sebagai orang yang rajin berbagi
              hal-hal baik untuk masyarakat, khususnya dalam ilmu komputer. Saya
              seorang web developer yang masuk kategori
              apa-aja-dikerjain-selagi-ada-manfaat-nya. Meski begitu, saya lebih
              senang fokus di front-end development, karena --menurut saya-- ini
              lebih sederhana saja. Di front-end development pada dasarnya hanya
              perlu menguasai tiga bahasa: HTML, CSS, dan JavaScript. Sudah
              jelas ini sederhana, yang bikin ribet itu kamu sendiri, sudah tau
              kamu cocoknya pake jQuery, malah maksa pake React.&quot;
            </TextSection>
          </div>
        </div>
      </Container>
    </section>
  );
}
