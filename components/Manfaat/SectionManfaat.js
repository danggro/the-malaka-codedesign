import Image from "next/image";
import Container from "../Container";
import SubTitleSection from "../SubTitleSection";
import TextSection from "../TextSection";
import TitleSection from "../TitleSection";
import ItemManfaat from "./ItemManfaat";
import Book from "@/public/manfaat/Book.png";

export default function SectionManfaat() {
  return (
    <section className="py-[200px] bg-[#EDFCFD]">
      <Container>
        <div className="flex gap-[30px]">
          <div className="w-6/12">
            <TitleSection colorLine="bg-primary" colorText="text-primary">
              manfaat buku
            </TitleSection>
            <SubTitleSection color="text-dark mt-[10px] mb-5">
              Manfaat yang kamu dapatkan ketika membeli buku Tailwind CSS ini
            </SubTitleSection>
            <TextSection color="text-dark/80">
              &quot;Buku itu seperti cermin: kalau yang berkaca padanya adalah
              seorang yang bodoh, engkau tak bisa berharap yang terpantul adalah
              seorang yang jenius.&quot; - J.K Rowling
            </TextSection>
            <ul className="mt-10 space-y-5">
              <ItemManfaat>
                Buku ini cocok untuk seorang yang ingin memperdalam front-end
                development agar tidak hanya sekadar Bootstrap
              </ItemManfaat>
              <ItemManfaat>
                Buku ini ditulis berdasarkan dari dokumentasi Tailwind CSS
                langsung, agar meminimalisir terjadinya miskonsepsi
              </ItemManfaat>
              <ItemManfaat>
                Sangat ramah untuk back-end developer yang phobia terhadap CSS
                dan mudah dipahami bagi UI designer
              </ItemManfaat>
              <ItemManfaat>
                Studi kasus membangun sebuah website responsive dengan Tailwind
                CSS tanpa ngoding CSS
              </ItemManfaat>
            </ul>
          </div>
          <div className="relative flex items-end w-6/12">
            <Image
              src={Book}
              alt="Book"
              className="absolute bottom-[54px] right-[98px] shadow-[0px_15px_30px_0_rgba(2,40,43,0.33)] rotate-[9deg] -z-10 rounded-[15px]"
            />
            <div className="flex w-full justify-between items-center rounded-[20px] shadow-box bg-primary py-[30px] pl-[30px] pr-[59px] flex-shrink-0 ">
              <div>
                <h4 className="text-3xl font-bold">19</h4>
                <p className="text-sm">Jumlah Chapter</p>
              </div>
              <span className="block w-[1px] h-[50px] bg-white/30"></span>
              <div>
                <h4 className="text-3xl font-bold">253</h4>
                <p className="text-sm">Jumlah Halaman</p>
              </div>
              <span className="block w-[1px] h-[50px] bg-white/30"></span>
              <div>
                <h4 className="text-3xl font-bold">60</h4>
                <p className="text-sm">Hari Menulis</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
