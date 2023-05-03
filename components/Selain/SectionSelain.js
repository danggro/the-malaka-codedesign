import Image from "next/image";
import Container from "../Container";
import Left from "@/public/selain/Left.png";
import TitleSection from "../TitleSection";
import SubTitleSection from "../SubTitleSection";
import TextSection from "../TextSection";
import ItemSelain from "./ItemSelain";
import Live from "./Icon/Live";
import Komunitas from "./Icon/Komunitas";

export default function SectionSelain() {
  return (
    <section className="pb-[200px] bg-[#EDFCFD]">
      <Container>
        <div className="flex">
          <div className="w-6/12">
            <div className=" p-3 w-fit rounded-[15px] shadow-[0px_40px_80px_0_rgba(29,43,63,0.1)] -rotate-[5deg]">
              <Image
                src={Left}
                alt="Left"
                className="shadow-[0px_40px_80px_0_rgba(29,43,63,0.1)] rounded-[15px]"
              />
            </div>
          </div>
          <div className="w-6/12">
            <TitleSection colorLine="bg-primary" colorText="text-primary">
              Selain itu
            </TitleSection>
            <SubTitleSection color="text-dark mb-5 mt-[10px]">
              Buku dengan studi kasus nyata, juga komunitas yang ramah
            </SubTitleSection>
            <TextSection color="text-dark/80 ">
              Buku ini diakhiri dengan membangun website yang responsive dengan
              Tailwind. Selain itu kamu juga kamu dapat bergabung ke komunitas
              untuk bertanya ketika mengalami kesulitan.
            </TextSection>
            <div className="mt-10 space-y-[30px]">
              <ItemSelain
                icon={<Live />}
                title="Live Demo Project"
                desc="Lihat live demo project yang akan kamu buat di akhir buku ini."
              />
              <ItemSelain
                icon={<Komunitas />}
                title="Dukungan Komunitas"
                desc="Sebuah server Discord berisi teman-teman yang akan membantu kamu"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
