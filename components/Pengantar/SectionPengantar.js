import Image from "next/image";
import Container from "../Container";
import SubTitleSection from "../SubTitleSection";
import TitleSection from "../TitleSection";
import Avatar from "@/public/pengantar/Avatar.png";
import TextSection from "../TextSection";

export default function SectionPengantar(props) {
  return (
    <section className="bg-primary py-[100px]">
      <Container>
        <div className="flex justify-between gap-[130px]">
          <div className="w-4/12">
            <TitleSection colorLine="bg-white" colorText="text-white">
              buku ini untuk siapa
            </TitleSection>
            <SubTitleSection color="text-white">
              Kata Pengantar Dari Penulis Buku
            </SubTitleSection>
            <span className="w-full h-[2px] bg-white/30 block my-10"></span>
            <div className="flex items-center gap-[21px]">
              <Image src={Avatar} alt="Avatar" />
              <div className="space-y-[5px]">
                <h5 className="text-lg font-medium">Muhamad Nauval Azhar</h5>
                <p className="text-sm">@mhdnauvalazhar</p>
              </div>
            </div>
          </div>
          <div className="w-7/12">
            <p className={`text-lg leading-[40px] flex-shrink-0`}>
              &quot;Tailwind sangat memungkinkan kamu untuk membangun sebuah
              desain website yang unik dan tanpa kamu perlu menulis kode CSS
              sedikitpun. Mungkin kamu akan berpikir bahwa kamu akan membutuhkan
              waktu yang lebih lama ketika membangun sebuah website dengan
              utility-first framework ketimbang dengan framework UIkit. Ya,
              benar. Karena kamu harus memikirkan desain dan mengimplementasikan
              desain tersebut dari awal sendirGi. Namun, kamu perlu ingat
              manfaat-manfaat yang diberikan oleh utility-first framework,
              sehingga kamu dapat mempertimbangkannya. Dalam buku ini, kita akan
              mempelajari framework Tailwind CSS. Mulai dari konsep, workflow,
              hingga membuat sebuah website responsive dengan TailwindCSS. Buku
              ini tidak untuk semua orang, setidaknya kamu memahami cara
              mengoperasikan komputer, memahami HTML, memahami CSS, atau bisa
              dibilang kamu sudah pernah membangun website sebelumnya dan ingin
              mempelajari hal baru untuk meningkatkan skill.&quot;
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
