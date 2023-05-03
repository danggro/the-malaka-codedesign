import Container from "../Container";
import SubTitleSection from "../SubTitleSection";
import TextSection from "../TextSection";
import TitleSection from "../TitleSection";

export default function SectionTestimonial() {
  return (
    <Container>
      <section className="bg-[#EDFCFD] p-[100px] rounded-[20px]">
        <div className="flex">
          <div className="flex-shrink-0 w-6/12">
            <TitleSection colorLine="bg-primary" colorText="text-primary">
              testimonial
            </TitleSection>
            <SubTitleSection color="text-dark">
              Apa kata orang-orang yang membaca buku ini?
            </SubTitleSection>
          </div>
          <TextSection color="text-dark/80">
            Kalo seandainya kamu belum percaya dengan buku ini maka tidak
            apa-apa, karena yang patut kamu percayai adalah Tuhan. Tapi, mungkin
            beberapa ulasan ini bisa membangkitkan hasratmu untuk membeli buku
            ini.
          </TextSection>
        </div>
      </section>
    </Container>
  );
}
