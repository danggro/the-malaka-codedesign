import Container from "../Container";
import SubTitleSection from "../SubTitleSection";
import TextSection from "../TextSection";
import TitleSection from "../TitleSection";
import CardSiapa from "./CardSiapa";
import Siapa1 from "@/public/siapa/Utility.png";
import Siapa2 from "@/public/siapa/Tailwind.png";
import Siapa3 from "@/public/siapa/Unopinionated.png";

export default function SectionSiapa() {
  return (
    <section className="mt-[200px] py-[200px]">
      <Container>
        <div className="flex justify-between">
          <div className="w-5/12">
            <TitleSection colorLine="bg-primary" colorText="text-primary">
              Buku ini untuk siapa
            </TitleSection>
            <SubTitleSection color="text-dark">
              Buku yang cocok dibaca untuk front-end dan back-end, bahkan UI
              designer!
            </SubTitleSection>
          </div>
          <div className="w-6/12">
            <TextSection color="text-dark/80">
              Buku ini bukan hanya untuk front-end developer yang ingin
              meningkatkan skill, buku ini juga cocok untuk back-end developer
              dan UI designer agar dapat menulis style tanpa harus menulis kode
              CSS dan tanpa mengandalkan front-end developer!
            </TextSection>
          </div>
        </div>
        <div className="flex gap-[30px] mt-[84px] justify-between">
          <CardSiapa
            src={Siapa1}
            alt="Siapa1"
            title="Utility-First Framework"
            desc="Tailwind hadir dengan konsep utility-first. Utility-first artinya banyak class-class kecil yang bisa digabung untuk menjadi sebuah UI."
          />
          <CardSiapa
            src={Siapa2}
            alt="Siapa2"
            title="Tailwind JIT Engine"
            desc="JIT engine akan men-generate utility-class yang kita gunakan saja. Ini akan membuat pengalaman pengembangan semakin baik."
          />
          <CardSiapa
            src={Siapa3}
            alt="Siapa3"
            title="Unopinionated-Framework"
            desc="Tailwind tidak memiliki pra-desain komponen apapun, ini membuat desain website yang kita buat menjadi unik."
          />
        </div>
      </Container>
    </section>
  );
}
