import SectionHarga from "@/components/Harga/SectionHarga";
import Header from "@/components/Header";
import SectionManfaat from "@/components/Manfaat/SectionManfaat";
import SectionPengantar from "@/components/Pengantar/SectionPengantar";
import SectionPenulis from "@/components/Penulis/SectionPenulis";
import SectionPratinjau from "@/components/Pratinjau/SectionPratinjau";
import SectionSelain from "@/components/Selain/SectionSelain";
import SectionSiapa from "@/components/Siapa/SectionSiapa";
import SectionTestimonial from "@/components/Testimonial/SectionTestimonial";

export default function Home() {
  return (
    <>
      <Header />
      <SectionSiapa />
      <SectionPengantar />
      <SectionManfaat />
      <SectionSelain />
      <SectionPratinjau />
      <SectionHarga />
      <SectionPenulis />
      <SectionTestimonial />
    </>
  );
}
